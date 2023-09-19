import os from '@/os'
import style from '@/utils/style'
import { setGlobal } from '@/utils'
import { paperTheme } from '@/colors'
import { useStore, actions } from '@/store'

declare global {
  var $style: typeof style
  var $useStore: typeof useStore
  var $actions: typeof actions
  var $clr: typeof paperTheme.colors
}

setGlobal('$style', style)
setGlobal('$useStore', useStore)
setGlobal('$actions', actions)
setGlobal('$clr', paperTheme.colors)

if (os.isWeb) {
  document.body.style.userSelect = 'none'
}
