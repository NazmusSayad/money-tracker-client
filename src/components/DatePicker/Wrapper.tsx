import { View, StyleSheet, ViewProps } from 'react-native'

export default function Wrapper({ style, ...props }: ViewProps) {
  return <View style={$style(styles.container, style)} {...props} />
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
})
