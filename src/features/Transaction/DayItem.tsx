import { Transaction } from '@/store/slice/Transactions'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

type Props = {
  transaction: Transaction
}

export default function DayItem({ transaction }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>
        {(transaction as any).category ?? '??'}
      </Text>

      <View style={styles.noteAndAccount}>
        {(transaction as any).note && (
          <Text style={styles.noteText}>
            {(transaction as any).type} {(transaction as any).amount}
          </Text>
        )}

        {(transaction as any).account && (
          <Text style={styles.accountText}>
            {(transaction as any).type} {(transaction as any).amount}
          </Text>
        )}

        <Text style={styles.accountText}>Cash</Text>
      </View>

      <Text
        style={$style(styles.amount, {
          color: transaction.type === 'income' ? $clr.primary : $clr.error,
        })}
      >
        {(transaction as any).amount}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  category: {
    flex: 12,
  },

  noteAndAccount: {
    flex: 18,
    height: 32,
    justifyContent: 'center',
  },

  noteText: {},

  accountText: {
    fontSize: 12,
    color: $clr.bgWhitest,
  },

  amount: {
    flex: 10,
    textAlign: 'right',
  },
})
