import { ExpoConfig } from 'expo/config'

export const colors = {
  dark: '#232323',
  light: '#f5f5f5',
}

export default (): ExpoConfig => ({
  name: 'Money Tracker',
  slug: 'money-tracker',
  version: '1.0.0',

  orientation: 'default',
  userInterfaceStyle: 'dark',
  primaryColor: colors.light,
  backgroundColor: colors.dark,

  androidStatusBar: {
    backgroundColor: colors.dark,
    barStyle: 'light-content',
  },

  assetBundlePatterns: ['**/*'],
  icon: './assets/icon.png',
  splash: {
    backgroundColor: colors.dark,
    resizeMode: 'contain',
    image: './assets/splash.png',
  },

  platforms: ['android', 'web'],
  android: {
    backgroundColor: colors.dark,
    package: 'com.nazmussayad.moneytracker',
    adaptiveIcon: {
      backgroundColor: colors.dark,
      foregroundImage: './assets/adaptive-icon.png',
    },
  },
  web: {
    backgroundColor: colors.dark,
    favicon: './assets/favicon.png',
  },

  extra: {
    eas: {
      projectId: '3e1874b6-1096-430b-b791-ec02ba167ca0',
    },
  },
})
