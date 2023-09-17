import { ExpoConfig } from 'expo/config'

export const backgroundColor = '#222227'

export default (): ExpoConfig => ({
  name: 'Money Tracker',
  slug: 'money-tracker',
  version: '1.0.0',

  orientation: 'default',
  userInterfaceStyle: 'dark',
  backgroundColor: backgroundColor,

  androidStatusBar: {
    backgroundColor: backgroundColor,
    barStyle: 'light-content',
  },

  assetBundlePatterns: ['**/*'],
  icon: './assets/icon.png',
  splash: {
    backgroundColor: backgroundColor,
    resizeMode: 'contain',
    image: './assets/splash.png',
  },

  platforms: ['android', 'web'],
  android: {
    backgroundColor: backgroundColor,
    package: 'com.nazmussayad.moneytracker',
    adaptiveIcon: {
      backgroundColor: backgroundColor,
      foregroundImage: './assets/adaptive-icon.png',
    },
  },
  web: {
    backgroundColor: backgroundColor,
    favicon: './assets/favicon.png',
  },

  extra: {
    eas: {
      projectId: '3e1874b6-1096-430b-b791-ec02ba167ca0',
    },
  },
})
