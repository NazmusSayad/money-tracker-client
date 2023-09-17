import { Platform } from 'react-native'

export default Object.freeze({
  isWeb: Platform.OS === 'web',
  isAndroid: Platform.OS === 'android',
})
