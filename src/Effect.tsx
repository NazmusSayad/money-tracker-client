import { useEffect } from 'react'
import { useApi } from './http'

export function CommonEffect() {
  const transactions = $useStore((state) => state.categories)
  console.log('transactions', transactions)

  return <></>
}

export function PrivateEffect() {
  const api = useApi()
  const jwt = $useStore((state) => state.auth.jwt)

  useEffect(() => {
    ;(async () => {
      const { data, ok } = await api.get<[{ jwt_token: string }]>('/auth/token')
      $actions.auth.jwt(data?.jwt_token)
      console.log(ok ? 'JWT_TOKEN updated!' : 'JWT_TOKEN update failed!')
    })()
  }, [])

  useEffect(() => {
    if (!jwt) return
    ;(async () => {
      $actions.main.startFetchingUserData()

      Fetch_Transactions: {
        const { data, ok } = await api.get(`/transaction`)
        $actions.transactions.addTransactions(data.transactions)
      }

      Fetch_Accounts: {
        const { data, ok } = await api.get(`/accounts`)
        $actions.accounts.addTransactions(data.accounts)
      }

      Fetch_Categories: {
        const { data, ok } = await api.get(`/category`)
        $actions.categories.addCategories(data.categories)
      }

      $actions.main.finishFetchingUserData()
    })()
  }, [Boolean(jwt)])

  return <></>
}

export function PublicEffect() {
  return <></>
}
