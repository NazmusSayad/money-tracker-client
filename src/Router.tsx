import { useEffect } from 'react'
import { Button } from 'react-native'
import { Navigate, Route, Routes } from 'react-router-dom'

import { useApi } from './http'
import Login from '@/features/Login'
import LandingPage from '@/features/LandingPage'

export default function Router() {
  const api = useApi()
  const isLoggedIn = $useStore((state) => state.auth.isLoggedIn)

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get<[{ jwt_token: string }]>('/auth/token')
      console.log('JWT_TOKEN updated!')
      $actions.auth.jwt(data?.jwt_token)
    })()
  }, [])

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
  </>
)

const privateRoutes = (
  <>
    <Route index element={<Button title="Dashboard" />} />
    <Route path="/login" element={<Navigate to="/" />} />
  </>
)
