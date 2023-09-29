import { Transaction } from '@/store/slice/Transactions'
import { View, StyleSheet } from 'react-native'
import { Text, TouchableRipple } from 'react-native-paper'
import Wrapper from './Wrapper'
import { getTime } from '@/utils'

type Props = {
  transaction: Transaction
}

export default function DayItem({ transaction }: Props) {
  return (
    <TouchableRipple onPress={() => console.log('Pressed')}>
      <Wrapper style={styles.container}>
        <Text style={styles.category}>
          {(transaction as any).category ?? '??'}
        </Text>

        <View style={styles.noteAndAccount}>
          {(transaction as any).note && (
            <Text style={styles.noteText}>{(transaction as any).note}</Text>
          )}

          <Text style={styles.dateText}>
            {getTime((transaction as any).date)}
          </Text>
        </View>

        <Text
          style={$style(styles.amount, {
            color: transaction.type === 'income' ? $clr.primary : $clr.error,
          })}
        >
          {(transaction as any).amount}
        </Text>
      </Wrapper>
    </TouchableRipple>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
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

  dateText: {
    fontSize: 12,
    color: $clr.bgWhitest,
  },

  amount: {
    flex: 10,
    textAlign: 'right',
  },
})
