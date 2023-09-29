import { View, ViewProps, StyleSheet } from 'react-native'

export default function Wrapper({ style, ...props }: ViewProps) {
  return <View {...props} style={$style(styles.container, style)} />
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 750,
    alignSelf: 'center',
  },
})
