import { useState } from 'react'
import LoginForm from './LoginForm'
import { useApi } from '@/http'

export default function index() {
  const api = useApi({ suspense: true })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit() {
    const { data, ok } = await api.post<{ data: { jwt_token: string; user } }>(
      '/auth/login',
      { email, password }
    )
    if (!ok) return
    data && $actions.auth.jwt(data.jwt_token)
  }

  return (
    <LoginForm
      error={api.response?.error}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onSubmit={handleSubmit}
    />
  )
}
