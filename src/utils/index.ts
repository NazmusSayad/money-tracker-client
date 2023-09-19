export function setGlobal(key: string, value: any) {
  try {
    globalThis[key] = value
  } catch {
    window[key] = value
    try {
      global[key] = value
    } catch {}
  }
}
