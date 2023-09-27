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

export function getMonthName(index: number) {
  return [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ][index]
}
