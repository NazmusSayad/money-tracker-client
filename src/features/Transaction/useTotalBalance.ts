import { useMemo } from 'react'
import { useTransactions } from '@/store/slice/Transactions'
import { flattenObject } from '@/utils'

const restorePrev: boolean = false

export default function useTotalBalance(
  transactions,
  selectedYear,
  selectedMonth
) {
  const allTrans = useTransactions(
    restorePrev ? undefined : selectedYear,
    restorePrev ? undefined : selectedMonth
  )

  const prevBalance = useMemo(() => {
    let final: any = {}
    if (restorePrev) {
      for (let yearKey in allTrans) {
        if (+yearKey > selectedYear) continue
        const year = allTrans[yearKey]

        if (+yearKey < selectedYear) {
          final[yearKey] = year
          continue
        }

        final[yearKey] ??= {}
        for (let monthKey in year) {
          if (+monthKey > selectedMonth) continue
          final[yearKey][monthKey] = year[monthKey]
        }
      }
    } else {
      final = transactions
    }

    const flatted = flattenObject(final)
    let balance = 0

    flatted.forEach((t) => {
      if (t.type === 'income') {
        balance += t.amount
      } else {
        balance -= t.amount
      }
    })

    return balance
  }, [restorePrev ? allTrans : transactions, selectedMonth, selectedYear])

  const balance = useMemo(() => {
    const flatted = flattenObject(transactions)

    let income = 0
    let expense = 0

    flatted.forEach((t) => {
      if (t.type === 'income') {
        income += t.amount
      } else {
        expense += t.amount
      }
    })

    return { income, expense, balance: income - expense }
  }, [transactions, selectedYear, selectedMonth])

  return { ...balance, balance: prevBalance }
}
