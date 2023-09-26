import { Button } from 'react-native'
import { Navigate, Route, Routes } from 'react-router-dom'

import * as effect from './Effect'
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
  const isLoggedIn = $useStore((state) => state.auth.isLoggedIn)
  const isStoreSynced = $useStore((state) => state.main.isStoreSynced)

  const hasStoredData = $useStore((state) => state.main.hasStoredData)
  const dataFetchedFromServer = $useStore(
    (state) => state.main.dataFetchedFromServer
  )

  if (!isStoreSynced) {
    return (
      <>
        <effect.InitStoreFromStorage />
        <Loading />
      </>
    )
  }

  return (
    <>
      {<effect.CommonEffect />}
      {isLoggedIn ? <effect.PrivateEffect /> : <effect.PublicEffect />}

      {(isLoggedIn && (hasStoredData || dataFetchedFromServer)) ||
      !isLoggedIn ? (
        <Routes>
          {isLoggedIn ? privateRoutes : publicRoutes}
          {commonRoutes}
        </Routes>
      ) : (
        <Loading />
      )}
    </>
  )
}

const commonRoutes = (
  <>
    <Route path="/about" element={<Button title="About" />} />
  </>
)

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
