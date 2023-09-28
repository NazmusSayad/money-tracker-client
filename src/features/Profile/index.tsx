import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function index() {
  const user = $useStore((state) => state.user.user)

  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
