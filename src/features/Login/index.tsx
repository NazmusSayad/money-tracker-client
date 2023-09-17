import { useState } from 'react'
import LoginForm from './LoginForm'
import { useApi } from '@/http'

export default function index() {
  const api = useApi()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit() {
    const { data, ok } = await api.post<
      [{ jwt_token: string; user }, any, any]
    >('/auth/login', { email, password })
    if (!ok) return

    $actions.auth.jwt(data.jwt_token)
  }

  return (
    <LoginForm
      error={api.error}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onSubmit={handleSubmit}
    />
  )
}
