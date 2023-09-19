import { backgroundColor } from '../app.config'
import { MD3DarkTheme } from 'react-native-paper'

const appColor = {
  bgWhitest: '#7D7F84',
  bgWhiter: '#3D3D48',
  bgLightest: '#32323b',
  bgLighter: '#27272E',
  bg: backgroundColor,
  bgDarker: '#15151C',
  bgDarkest: '#0b0b0e',
}

export const paperTheme = {
  ...MD3DarkTheme,
  roundness: 2.5,
  colors: { ...appColor, ...MD3DarkTheme.colors },
}
