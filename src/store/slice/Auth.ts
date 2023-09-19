import storage from '@/utils/storage'
import { createSlice } from 'react-rtk'

export default createSlice('auth', {
  initialState: {
    jwt: null as string | null,
    isLoggedIn: null as boolean | null,
  },

  reducers: {
    setIsLoggedIn(state, payload: boolean) {
      state.isLoggedIn = payload
      storage.set('isLoggedIn', payload)
    },

    jwt(state, payload: string | null) {
      state.jwt = payload
      this.setIsLoggedIn(state, !!payload)
    },
  },
})
