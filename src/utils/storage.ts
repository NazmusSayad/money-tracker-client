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

  #setRawValue = async (key: string, value: string) => {
    if (value == null) return this.#clearRawValue(key)
    if (os.isWeb) return localStorage.setItem(key, value)
    return AsyncStorage.setItem(key, value)
  }

  async get(key: string) {
    const rawValue = await this.#getRawValue(key)
    if (rawValue) return JSON.parse(rawValue)
  }

  async set(key: string, value: any) {
    const rawValue = JSON.stringify(value)
    return this.#setRawValue(key, rawValue)
  }
}

export default new Storage()
