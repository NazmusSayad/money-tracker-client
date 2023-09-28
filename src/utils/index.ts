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

export function flattenObject(obj) {
  let result: any[] = []

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      result = result.concat(obj[key])
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      result = result.concat(flattenObject(obj[key]))
    }
  }

  return result
}
