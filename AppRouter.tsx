import Main from '@/Main'
import { Platform } from 'react-native'
import { BrowserRouter } from 'react-router-dom'
import { NativeRouter } from 'react-router-native'

function WebApp({ children }: { children: React.ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>
}

function NativeApp({ children }: { children: React.ReactNode }) {
  return <NativeRouter>{children}</NativeRouter>
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
