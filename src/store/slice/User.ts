import { createSlice } from 'react-rtk'

export default createSlice('user', {
  initialState: {
    user: {} as any,
  },
  reducers: {
    init(state, user) {
      return user
    },

    setUser(state, user) {
      state.user = user
    },
  },
})
