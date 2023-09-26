import { View, Text, StyleSheet } from 'react-native'

export default function SeleteDate({ type }: { type: 'Yearly' | 'Monthly' }) {
  return (
    <View style={styles.container}>
      <Text>SeleteDate</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
