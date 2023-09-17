import { createSlice } from 'react-rtk'

export default createSlice('main', {
  initialState: {
    message: 'Hello world!',
  },
  reducers: {
    updateMessage(state, payload) {
      state.message = payload
    },
  },
})
