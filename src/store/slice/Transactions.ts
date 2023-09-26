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
  initialState: { transactions: {} as InitialState },
  reducers: {
    addTransactions(state, transactions: unknown[]) {
      transactions.forEach((transaction: any) => {
        const { year, month, date } = transaction.date.match(matchRegex).groups

        state.transactions[year] ??= {}
        state.transactions[year][month] ??= {}
        state.transactions[year][month][date] ??= []

        state.transactions[year][month][date].push(transaction)
        state.transactions[year][month][date].sort((a: any, b: any) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
      })
    },

    setTransactions(state, transactions: unknown[]) {
      state.transactions = {}
      this.addTransactions(state, transactions)
    },
  },
})
