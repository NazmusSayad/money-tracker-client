import { createSlice } from 'react-rtk'

const matchRegex = /^(?<year>\d+)-(?<month>\d+)-(?<date>\d+)/
type InitialState = {
  [year: string]: {
    [month: string]: {
      [date: string]: unknown[]
    }
  }
}

export default createSlice('transactions', {
  initialState: {
    transactions: {} as InitialState,
    localTransactions: {} as InitialState,
  },
  reducers: {
    init(state, transactions: InitialState) {
      return transactions
    },

    addTransactions(state, transactions: unknown[]) {
      transactions.forEach((transaction: any) => {
        const { year, month, date } = transaction.date.match(matchRegex).groups
        const numYear = +year
        const numMonth = +month - 1
        const numDate = +date

        state.transactions[numYear] ??= {}
        state.transactions[numYear][numMonth] ??= {}
        state.transactions[numYear][numMonth][numDate] ??= []

        state.transactions[numYear][numMonth][numDate].push(transaction)
        state.transactions[numYear][numMonth][numDate].sort(
          (a: any, b: any) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
          }
        )
      })
    },

    addLocalTransactions(state, transactions: unknown[]) {
      transactions.forEach((transaction: any) => {
        const { year, month, date } = transaction.date.match(matchRegex).groups
        const numYear = +year
        const numMonth = +month - 1
        const numDate = +date

        state.localTransactions[numYear] ??= {}
        state.localTransactions[numYear][numMonth] ??= {}
        state.localTransactions[numYear][numMonth][numDate] ??= []

        state.localTransactions[numYear][numMonth][numDate].push(transaction)
        state.localTransactions[numYear][numMonth][numDate].sort(
          (a: any, b: any) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
          }
        )
      })
    },

    setTransactions(state, transactions: unknown[]) {
      state.transactions = {}
      this.addTransactions(state, transactions)
    },
  },
})
