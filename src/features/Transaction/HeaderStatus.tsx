import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import useTotalBalance from './useTotalBalance'
import Wrapper from './Wrapper'

export default function HeaderStatus({ transactions, year, month }) {
  const balance = useTotalBalance(transactions, year, month)

  return (
    <Wrapper style={styles.container}>
      <View style={styles.item}>
        <Text>Income</Text>
        <Text style={{ color: $clr.primary }}>{balance.income}</Text>
      </View>

      <View style={styles.item}>
        <Text>Expense</Text>
        <Text style={{ color: $clr.error }}>{balance.expense}</Text>
      </View>

      <View style={styles.item}>
        <Text>Balance</Text>
        <Text>{balance.balance}</Text>
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },

  item: {
    flex: 1,
    alignItems: 'center',
    gap: 3,
  },
})
