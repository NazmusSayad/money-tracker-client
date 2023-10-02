import { useMemo } from 'react'
import { useSearchParams } from 'react-router-native'

export default function useTransactionModal() {
  const [params, setParams] = useSearchParams()
  return useMemo(
    () => ({
      transaction: params.get('transaction'),
      open: (id: string) => setParams({ transaction: id }),
      close: () => setParams({}),
    }),
    [params.get('transaction')]
  )
}
