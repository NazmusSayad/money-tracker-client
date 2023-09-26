import { createSlice } from 'react-rtk'

type InitialState = {
  [_id: string]: {}
}

export default createSlice('accounts', {
  initialState: { accounts: {} as InitialState },
  reducers: {
    addAccounts(state, accounts: unknown[]) {
      accounts.forEach((account: any) => {
        state.accounts[account._id] = account
      })
    },

    setAccounts(state, accounts: unknown[]) {
      state.accounts = {}
      this.addAccounts(state, accounts)
    },
  },
})
