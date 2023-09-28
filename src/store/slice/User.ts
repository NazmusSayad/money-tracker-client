import { createSlice } from 'react-rtk'

export default createSlice('user', {
  initialState: {
    user: {} as any,
  },
  reducers: {
    init(state, data) {
      return { ...state, ...data }
    },

    setUser(state, user) {
      state.user = user
    },
  },
})
