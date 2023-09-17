import { getClassNames } from 'get-classnames'

try {
  window.$cn = getClassNames
} catch {
  try {
    globalThis.$cn = getClassNames
  } catch {}
}

declare global {
  var $cn: typeof getClassNames
}
