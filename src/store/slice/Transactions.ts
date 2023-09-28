import { useMemo } from 'react'
import { createSlice } from 'react-rtk'
const matchRegex = /^(?<year>\d+)-(?<month>\d+)-(?<date>\d+)/

type Transaction = Record<string, unknown>

type InitialTransacitonsState = {
  [year: string]: {
    [month: string]: {
      [date: string]: Transaction[]
    }
  }
}

const initialState = {
  transactions: {} as InitialTransacitonsState,
  localTransactions: {} as InitialTransacitonsState,
  localUpdates: {} as Record<string, Partial<Transaction>>,
  localDeleted: {} as Record<string, boolean>,
}

export default createSlice('transactions', {
  initialState,
  reducers: {
    init(state, data: InitialTransacitonsState) {
      return { ...state, ...data }
    },

    reset() {
      return initialState
    },

    addTransactions(state, transactions: Transaction[]) {
      addTransactionsToTarget(state.transactions, transactions)
    },

    addLocalTransactions(state, transactions: Transaction[]) {
      addTransactionsToTarget(state.localTransactions, transactions)
    },

    setTransactions(state, transactions: Transaction[]) {
      state.transactions = {}
      addTransactionsToTarget(state.transactions, transactions)
    },
  },
})

export function useTransactions(year?: number, month?: number) {
  const transactions: any = $useStore((state) => {
    if (month != null) {
      return state.transactions.transactions[String(year)]?.[String(month)]
    }

    if (year != null) {
      return state.transactions.transactions[String(year)]
    }

    return state.transactions.transactions
  })

  const localTransactions: any = $useStore((state) => {
    if (month != null) {
      return state.transactions.localTransactions[String(year)]?.[String(month)]
    }

    if (year != null) {
      return state.transactions.localTransactions[String(year)]
    }

    return state.transactions.localTransactions
  })

  const deletedTrans = $useStore((state) => state.transactions.localDeleted)
  const updatedTrans = $useStore((state) => state.transactions.localUpdates)

  const combinedTransactions = useMemo(() => {
    function assignDays(result, month) {
      for (let dayKey in month) {
        const day = month[dayKey] ?? []
        result[dayKey] ??= []

        day.forEach((trans: Transaction) => {
          if (deletedTrans[trans._id as string]) return

          result[dayKey].push(
            updatedTrans[trans._id as string]
              ? { ...trans, ...updatedTrans[trans._id as string] }
              : trans
          )
        })
      }
    }

    function assignMonths(result, year) {
      for (let monthKey in year) {
        const month = year[monthKey] ?? {}
        result[monthKey] ??= {}
        assignDays(result[monthKey], month)
      }
    }

    function assignYears(result, root) {
      for (let yearKey in root) {
        const year = root[yearKey] ?? {}
        result[yearKey] ??= {}
        assignMonths(result[yearKey], year)
      }
    }

    // When both month and year exists
    if (month != null) {
      const result = {}
      transactions && assignDays(result, transactions)
      localTransactions && assignDays(result, localTransactions)
      return result
    }

    // When only year exists
    if (year != null) {
      const result = {}
      transactions && assignMonths(result, transactions)
      localTransactions && assignMonths(result, localTransactions)
      return result
    }

    // When nothing exists
    const result = {}
    transactions && assignYears(result, transactions)
    localTransactions && assignYears(result, localTransactions)
    return result
  }, [transactions, localTransactions, year, month])

  return combinedTransactions
}

function addTransactionsToTarget(
  target: InitialTransacitonsState,
  transactions: Transaction[]
) {
  transactions.forEach((transaction: any) => {
    const { year, month, date } = transaction.date.match(matchRegex).groups
    const numYear = +year
    const numMonth = +month - 1
    const numDate = +date

    target[numYear] ??= {}
    target[numYear][numMonth] ??= {}
    target[numYear][numMonth][numDate] ??= []
    target[numYear][numMonth][numDate].push(transaction)
  })
}
