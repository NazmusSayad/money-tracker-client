import { useEffect } from 'react'

export default function useAsyncEffect(fn, deps: any[] = []) {
  useEffect(() => {
    fn()
  }, deps)
}
