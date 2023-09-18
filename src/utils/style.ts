import os from '@/os'
import { StyleSheet } from 'react-native'

export default function style<T extends any[]>(...args: T) {
  return StyleSheet.flatten(args)
}

export function injectCSS(styleString: string) {
  if (!os.isWeb) return
  const style = document.createElement('style')
  style.textContent = styleString
  document.head.append(style)
}
