import { createSlice } from 'react-rtk'

export default createSlice('main', {
  initialState: {
    isStoreSynced: false,
    dataFetchedFromServer: false,
    hasStoredData: false,
  },
  reducers: {
    finishStoreSync(state) {
      state.isStoreSynced = true
    },

    setHasStoredData(state, payload: boolean) {
      state.hasStoredData = payload
    },

    finishFetchingFromServer(state) {
      state.dataFetchedFromServer = true
    },
  },
})
