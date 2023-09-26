import axiosInstance from '@/http'
import storage from '@/utils/storage'
import { createSlice } from 'react-rtk'

export default createSlice('auth', {
  initialState: {
    jwt: null as string | null,
    isLoggedIn: null as unknown as boolean,
  },

  reducers: {
    setIsLoggedIn(state, payload: boolean) {
      state.isLoggedIn = payload
      storage.set('isLoggedIn', payload || null)
    },

    jwt(state, payload: string | null) {
      state.jwt = payload
      axiosInstance.defaults.headers.common.authorization = payload
      this.setIsLoggedIn(state, !!payload)
    },
  },
})
