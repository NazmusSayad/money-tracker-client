import { colors } from './app.config'
import { useStore, actions } from '@/store'
import { getClassNames } from 'get-classnames'

try {
  window.$cn = getClassNames
  window.$useStore = useStore
  window.$actions = actions
  window.$colors = colors
} catch {
  try {
    globalThis.$cn = getClassNames
    globalThis.$useStore = useStore
    globalThis.$actions = actions
    globalThis.$colors = colors
  } catch {}
}

declare global {
  var $cn: typeof getClassNames
  var $useStore: typeof useStore
  var $actions: typeof actions
  var $colors: typeof colors
}
