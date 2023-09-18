import os from '@/os'
import colors from '@/colors'
import style from '@/utils/style'
import { useStore, actions } from '@/store'

try {
  window.$style = style
  window.$useStore = useStore
  window.$actions = actions
  window.$clr = colors
} catch {
  try {
    globalThis.$style = style
    globalThis.$useStore = useStore
    globalThis.$actions = actions
    globalThis.$clr = colors
  } catch {}
}

declare global {
  var $style: typeof style
  var $useStore: typeof useStore
  var $actions: typeof actions
  var $clr: typeof colors
}

if (os.isWeb) {
  document.body.style.userSelect = 'none'
}
