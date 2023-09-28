import { useEffect } from 'react'
import { useApi } from './http'
import os from './os'
import storage from './utils/storage'
import useAsyncEffect from './hooks/useAsyncEffect'

export function CommonEffect() {
  return <></>
}

export function PublicEffect() {
  useEffect(() => {
    storage.clear()
    $actions.transactions.reset()
  }, [])

  return <></>
}

export function InitStoreFromStorage() {
  useAsyncEffect(async () => {
    const isLoggedIn = await storage.get('isLoggedIn')
    $actions.auth.setIsLoggedIn(isLoggedIn || false)

    if (!isLoggedIn || os.isWeb) return $actions.main.finishStoreSync()

    const user = await storage.get('user')
    const accounts = await storage.get('accounts')
    const categories = await storage.get('categories')
    const transactions = await storage.get('transactions')

    user && $actions.user.init(user)
    accounts && $actions.accounts.init(accounts)
    categories && $actions.categories.init(categories)
    transactions && $actions.transactions.init(transactions)

    $actions.main.finishStoreSync()
    $actions.main.setHasStoredData(
      Boolean(user && accounts && categories && transactions)
    )
  })

  return <></>
}

export function PrivateEffect() {
  const api = useApi()
  const jwt = $useStore((state) => state.auth.jwt)

  const user = $useStore((state) => state.user)
  const accounts = $useStore((state) => state.accounts)
  const categories = $useStore((state) => state.categories)
  const transactions = $useStore((state) => state.transactions)

  useAsyncEffect(async () => {
    const { data, ok } = await api.get<[{ jwt_token: string; user }]>(
      '/auth/token'
    )

    $actions.auth.jwt(data?.jwt_token)
    $actions.user.setUser(data?.user)
    console.log(ok ? 'JWT_TOKEN updated!' : 'JWT_TOKEN update failed!')
  })

  useAsyncEffect(async () => {
    if (!jwt) return

    Fetch_Transactions: {
      const { data, ok } = await api.get(`/transactions`)
      $actions.transactions.setTransactions(data.transactions)
    }

    Fetch_Accounts: {
      const { data, ok } = await api.get(`/accounts`)
      $actions.accounts.setAccounts(data.accounts)
    }

    Fetch_Categories: {
      const { data, ok } = await api.get(`/categories`)
      $actions.categories.setCategories(data.categories)
    }

    $actions.main.finishFetchingFromServer()
  }, [Boolean(jwt)])

  useEffect(() => {
    // if (os.isWeb) return
    storage.set('user', user)
    storage.set('accounts', accounts)
    storage.set('categories', categories)
    storage.set('transactions', transactions)
  }, [user, accounts, categories, transactions])

  return <></>
}
