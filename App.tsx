import './global'
import os from '@/os'
import { store } from '@/store'
import AppRouter from './AppRouter'
import { Provider } from 'react-redux'
import { Platform, Text, View } from 'react-native'

export default function App() {
  if (!os.isAndroid && !os.isWeb) {
    if (Platform.OS === 'macos' || Platform.OS === 'ios') {
      return (
        <View>
          <Text>Fuck you apple 🖕</Text>
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
      <AppRouter />
    </Provider>
  )
}
