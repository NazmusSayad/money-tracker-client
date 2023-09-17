import { ExpoConfig } from 'expo/config'

export default (): ExpoConfig => ({
  name: 'Money Tracker',
  slug: 'money-tracker',
  version: '1.0.0',
  orientation: 'default',
  userInterfaceStyle: 'dark',

  assetBundlePatterns: ['**/*'],
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },

  android: {
    package: 'com.expo.boilerplate',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  ios: {
    supportsTablet: true,
  },
  web: {
    favicon: './assets/favicon.png',
  },

  extra: {
    eas: {
      projectId: '8c72d69a-b0c9-4210-8f7e-2ca7d62855dc',
    },
  },
})
