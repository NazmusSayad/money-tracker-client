import Main from '@/Main'
import { Platform } from 'react-native'
import { BrowserRouter } from 'react-router-dom'
import { NativeRouter } from 'react-router-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

function WebApp({ children }: { children: React.ReactNode }) {
  return <BrowserRouter>{children} </BrowserRouter>
}

function NativeApp({ children }: { children: React.ReactNode }) {
  return (
    <NativeRouter>
      <SafeAreaProvider>
        <SafeAreaView>{children}</SafeAreaView>
      </SafeAreaProvider>
    </NativeRouter>
  )
}

export default function AppPortal() {
  return Platform.OS === 'web' ? (
    <WebApp>
      <Main />
    </WebApp>
  ) : (
    <NativeApp>
      <Main />
    </NativeApp>
  )
}
