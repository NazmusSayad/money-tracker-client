import { View, Text, StyleSheet } from 'react-native'
import DatePicker from '@/components/DatePicker'

export default function index(props) {
  return (
    <View style={styles.container}>
      <DatePicker />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
