import os from '@/os'
import style from '@/utils/style'
import { setGlobal } from '@/utils'
import { paperTheme } from '@/colors'
import { useStore, actions } from '@/store'
import { View as BaseView, StyleSheet as BaseStyleSheet } from 'react-native'

declare global {
  var $style: typeof style
  var $useStore: typeof useStore
  var $actions: typeof actions
  var $clr: typeof paperTheme.colors
  var View: typeof BaseView
}

setGlobal('$style', style)
setGlobal('$useStore', useStore)
setGlobal('$actions', actions)
setGlobal('$clr', paperTheme.colors)
setGlobal('View', BaseView)

if (os.isWeb) {
  document.body.style.userSelect = 'none'
}
