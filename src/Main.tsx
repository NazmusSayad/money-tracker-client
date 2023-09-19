import { Suspense } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Router from './Router'
import Loading from '@/components/Loading'
import { backgroundColor } from '../app.config'
import { useTheme } from 'react-native-paper'
import { setGlobal } from './utils'

export default function Main() {
  const theme = useTheme()
  setGlobal('$clr', theme.colors)

  return (
    <SafeAreaView style={{ backgroundColor, height: '100%' }}>
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </SafeAreaView>
  )
}
