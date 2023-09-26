import { createSlice } from 'react-rtk'

export default createSlice('user', {
  initialState: {
    message: 'Hello world!',
  },
  reducers: {
    updateMessage(state, payload) {
      state.message = payload
    },
  },
})
