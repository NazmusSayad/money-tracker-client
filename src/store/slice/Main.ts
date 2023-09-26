import { createSlice } from 'react-rtk'

export default createSlice('main', {
  initialState: {
    isFetchingUserData: false,
  },
  reducers: {
    startFetchingUserData(state) {
      state.isFetchingUserData = true
    },
    finishFetchingUserData(state) {
      state.isFetchingUserData = false
    },
  },
})
