import { useEffect } from 'react'
import { Button } from 'react-native'
import { Navigate, Route, Routes } from 'react-router-dom'

import { useApi } from './http'
import storage from './utils/storage'
import Loading from './components/Loading'

import Login from '@/features/Login'
import Profile from '@/features/Profile'
import Accounts from '@/features/Accounts'
import Dashboard from '@/features/Dashboard'
import Statistics from '@/features/Statistics'
import Transaction from '@/features/Transaction'
import LandingPage from '@/features/LandingPage'
import NavigationMore from '@/features/NavigationMore'

export default function Router() {
  const api = useApi()
  const isLoggedIn = $useStore((state) => state.auth.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn == null) {
      ;(async () => {
        const isLoggedIn = await storage.get('isLoggedIn')
        $actions.auth.setIsLoggedIn(isLoggedIn || false)
      })()
    } else if (isLoggedIn === false) return
    else {
      ;(async () => {
        const { data } = await api.get<[{ jwt_token: string }]>('/auth/token')
        console.log('JWT_TOKEN updated!')
        $actions.auth.jwt(data?.jwt_token)
      })()
    }
  }, [isLoggedIn])

  if (isLoggedIn == null) return <Loading />

  return (
    <Routes>
      {isLoggedIn ? privateRoutes : publicRoutes}
      <Route path="/about" element={<Button title="About" />} />
    </Routes>
  )
}

const publicRoutes = (
  <>
    <Route index element={<LandingPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Button title="Register" />} />

    <Route path="/transaction" element={<Navigate to="/login" />} />
    <Route path="/statistics" element={<Navigate to="/login" />} />
    <Route path="/accounts" element={<Navigate to="/login" />} />
    <Route path="/profile" element={<Navigate to="/login" />} />
    <Route path="/more" element={<Navigate to="/login" />} />
  </>
)

const privateRoutes = (
  <>
    <Route element={<Dashboard />}>
      <Route index element={<Navigate to="/transaction" />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/more" element={<NavigationMore />} />
    </Route>

    <Route path="/login" element={<Navigate to="/accounts" />} />
  </>
)
