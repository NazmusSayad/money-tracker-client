import { Platform } from 'react-native'
export default {
  isWeb: Platform.OS === 'web',
  isAndroid: Platform.OS === 'android',
}
