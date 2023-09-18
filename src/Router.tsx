import { useEffect } from 'react'
import { Button } from 'react-native'
import { Navigate, Route, Routes } from 'react-router-dom'

import { useApi } from './http'
import LandingPage from '@/features/LandingPage'
import Login from '@/features/Login'
import Dashboard from '@/features/Dashboard'
import Transaction from '@/features/Transaction'
import Statistics from '@/features/Statistics'
import Accounts from '@/features/Accounts'
import NavigationMore from '@/features/NavigationMore'

export default function Router() {
  const api = useApi()
  const isLoggedIn = $useStore((state) => state.auth.isLoggedIn)

  useEffect(() => {
    if (!isLoggedIn) return
    ;(async () => {
      const { data } = await api.get<[{ jwt_token: string }]>('/auth/token')
      console.log('JWT_TOKEN updated!')
      $actions.auth.jwt(data?.jwt_token)
    })()
  }, [])

  return (
    <Routes>
      {/* {isLoggedIn ? privateRoutes : publicRoutes} */}
      {privateRoutes}
      <Route path="/about" element={<Button title="About" />} />
    </Routes>
  )
}

const publicRoutes = (
  <>
    <Route index element={<LandingPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Button title="Register" />} />
  </>
)

const privateRoutes = (
  <>
    <Route element={<Dashboard />}>
      <Route index element={<Navigate to="/transaction" />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/more" element={<NavigationMore />} />
    </Route>

    <Route path="/login" element={<Navigate to="/accounts" />} />
  </>
)
