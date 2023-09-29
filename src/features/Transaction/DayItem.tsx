import { Transaction } from '@/store/slice/Transactions'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

type Props = {
  transaction: Transaction
}

export default function DayItem({ transaction }: Props) {
  return (
    <View style={styles.container}>
      <Text>
        {(transaction as any).type} {(transaction as any).amount}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
