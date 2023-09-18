import { ViewProps, View } from 'react-native'

export default function Wrapper({
  style,
  maxWidth = 1440,
  ...props
}: ViewProps & { maxWidth?: number }) {
  return (
    <View
      {...props}
      style={Object.assign(
        { width: '100%', maxWidth, marginHorizontal: 'auto' },
        style
      )}
    />
  )
}
