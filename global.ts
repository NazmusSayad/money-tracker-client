import os from '@/os'
import { useStore, actions } from '@/store'
import { getClassNames } from 'get-classnames'

try {
  window.$cn = getClassNames
  window.$useStore = useStore
  window.$actions = actions
} catch {
  try {
    globalThis.$cn = getClassNames
    globalThis.$useStore = useStore
    globalThis.$actions = actions
  } catch {}
}

declare global {
  var $cn: typeof getClassNames
  var $useStore: typeof useStore
  var $actions: typeof actions
}

if (os.isWeb) {
  document.body.style.userSelect = 'none'
}
