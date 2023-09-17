import './global'
import '@expo/match-media'
import { Provider } from 'react-redux'
import { Platform, View } from 'react-native'
import { BrowserRouter } from 'react-router-dom'
import { NativeRouter } from 'react-router-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PaperProvider, Text, MD3DarkTheme } from 'react-native-paper'

import os from '@/os'
import Main from '@/Main'
import { store } from '@/store'

const Router = os.isWeb ? BrowserRouter : NativeRouter
export default function App() {
  if (!os.isAndroid && !os.isWeb) {
    if (Platform.OS === 'macos' || Platform.OS === 'ios') {
      return (
        <View>
          <Text variant="displayLarge">Fuck you apple 🖕</Text>
        </View>
      )
    }

    return (
      <View>
        <Text>Your platform is't supported</Text>
      </View>
    )
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={{ ...MD3DarkTheme, roundness: 2.5 }}>
        <SafeAreaProvider>
          <Router>
            <Main />
          </Router>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  )
}
