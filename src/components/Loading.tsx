import { Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

export default function Loading() {
  return <ActivityIndicator style={{ height: '100%' }} size="large" />
}
