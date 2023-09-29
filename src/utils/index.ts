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

export function getDayName(index: number) {
  return ['Sunday'][index]
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

export function parseDate(dateStr: string) {
  const dateInstance = new Date(dateStr)

  return {
    year: dateInstance.getFullYear(),
    month: dateInstance.getMonth(),
    date: dateInstance.getDate(),
    day: dateInstance.getDay(),

    monthStr: getMonthName(dateInstance.getMonth()),
    dayStr: dateInstance
      .toLocaleDateString('en-US', { weekday: 'long' })
      .split(',')[0],
  }
}

console.log(parseDate(new Date().toISOString()))
