import { ViewProps, View } from 'react-native'

export default function Wrapper({ style, ...props }: ViewProps) {
  return (
    <View
      {...props}
      style={Object.assign(
        { width: '100%', maxWidth: 1440, marginHorizontal: 'auto' },
        style
      )}
    />
  )
}
