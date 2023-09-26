import os from '@/os'
import AsyncStorage from '@react-native-async-storage/async-storage'

class Storage {
  #getRawValue = async (key: string) => {
    if (os.isWeb) return localStorage.getItem(key)
    return AsyncStorage.getItem(key)
  }

  #clearRawValue = async (key: string) => {
    if (os.isWeb) localStorage.removeItem(key)
    else AsyncStorage.removeItem(key)
  }

  delete(key: string) {
    return this.#clearRawValue(key)
  }

  async get(key: string) {
    const rawValue = await this.#getRawValue(key)
    if (rawValue) return JSON.parse(rawValue)
  }

  async set(key: string, value: any) {
    if (value == null) return this.#clearRawValue(key)

    const rawValue = JSON.stringify(value)
    if (os.isWeb) return localStorage.setItem(key, rawValue)
    return AsyncStorage.setItem(key, rawValue)
  }
}

export default new Storage()
