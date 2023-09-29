import { Suspense } from 'react'
import { useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

import Router from './Router'
import { setGlobal } from './utils'
import Loading from '@/components/Loading'
import { backgroundColor } from '../app.config'
import { injectCSS } from './utils/style'

injectCSS(`
  html, body, #root {
    height: 100%;
  }

`)

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
