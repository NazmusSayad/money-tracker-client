import AsyncStorage from '@react-native-async-storage/async-storage'

class Storage {
  clear() {
    return AsyncStorage.clear()
  }

  delete(key: string) {
    return AsyncStorage.removeItem(key)
  }

  async get(key: string) {
    const rawValue = await AsyncStorage.getItem(key)
    if (rawValue) return JSON.parse(rawValue)
  }

  set(key: string, value: any) {
    if (value == null) return AsyncStorage.removeItem(key)

    const rawValue = JSON.stringify(value)
    return AsyncStorage.setItem(key, rawValue)
  }
}

export default new Storage()
// AsyncStorage.clear()
