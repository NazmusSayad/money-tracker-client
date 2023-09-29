import { StyleSheet } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { Transaction } from '@/store/slice/Transactions'
import DayItem from './DayItem'
import { parseDate } from '@/utils'
import Wrapper from './Wrapper'

type Props = {
  transactions: Record<string, Transaction[]>
}

export default function DaysList({ transactions }: Props) {
  return Object.entries(transactions).map(([date, transactions]) => (
    <DaysSection key={date} date={+date} transactions={transactions} />
  ))
}

type SectionProps = {
  date: number
  transactions: Transaction[]
}

function DaysSection({ date, transactions }: SectionProps) {
  if (transactions.length === 0) return null
  const parsedDate = parseDate((transactions[0] as any).date)

  return (
    <View style={styles.section}>
      <Divider />

      <Wrapper style={styles.date}>
        <Text>{parsedDate.date}</Text>
        <Text>{parsedDate.dayStr.slice(0, 3)}</Text>
      </Wrapper>

      {transactions.map((transaction) => (
        <>
          <Divider />

          <Wrapper>
            <DayItem key={(transaction as any)._id} transaction={transaction} />
          </Wrapper>
        </>
      ))}

      <Divider />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},

  section: {
    backgroundColor: $clr.bgLighter,
    marginBottom: 20,
  },

  date: {
    flexDirection: 'row',
    gap: 4,
  },
})
