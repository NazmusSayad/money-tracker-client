import { Suspense } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Router from './Router'
import Loading from '@/components/Loading'
import { backgroundColor } from '../app.config'

export default function Main() {
  return (
    <SafeAreaView style={{ backgroundColor, height: '100%' }}>
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </SafeAreaView>
  )
}
