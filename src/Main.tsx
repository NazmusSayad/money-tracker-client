import os from './os'
import { Text } from 'react-native'
import { ButtonDanger } from '@/components/Buttons'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

if (os.isWeb) {
  document.body.style.userSelect = 'none'
}

export default function Main() {
  const message = $useStore((state) => state.main.message)

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: $colors.dark, height: '100%' }}>
        <Text>{message.toLowerCase()}</Text>

        <ButtonDanger title="Error" />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
