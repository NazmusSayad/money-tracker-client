import Link from '@/components/Link'
import { View } from 'react-native'

export default function index() {
  return (
    <View>
      <Link to="/login" mode="contained">
        Login
      </Link>
    </View>
  )
}
