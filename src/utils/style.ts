import { StyleSheet } from 'react-native'

export default function style<T extends any[]>(...args: T) {
  return StyleSheet.flatten(args)
}
