import { LinkButton } from '@/components/Link'
import { View } from 'react-native'

export default function index() {
  return (
    <View>
      <LinkButton to="/login" mode="contained">
        Login
      </LinkButton>
    </View>
  )
}
