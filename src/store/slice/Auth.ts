import cookies from '@/cookies'
import { createSlice } from 'react-rtk'

export default createSlice('auth', {
  initialState: {
    jwt: null as string | null,
    isLoggedIn: Boolean(cookies.get('isLoggedIn')),
  },
  reducers: {
    jwt(state, payload: string | null) {
      state.jwt = payload
      state.isLoggedIn = !!payload
      cookies.set('isLoggedIn', !!payload, {
        maxAge: 86400000 * 30, // 1 day in milliseconds * 30 = 30 days
      })
    },
  },
})
