import { StyleSheet, ScrollView } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { Transaction } from '@/store/slice/Transactions'
import DayItem from './DayItem'
import { parseDate } from '@/utils'
import Wrapper from './Wrapper'
import React, { useMemo } from 'react'

type Props = {
  transactions: Record<string, Transaction[]>
}

export default function DaysList({ transactions }: Props) {
  const sortedEntries = useMemo(() => {
    return Object.entries(transactions).sort(([a], [b]) => +b - +a) as [
      string,
      Transaction[]
    ][]
  }, [transactions])

  return (
    <ScrollView style={styles.container}>
      {sortedEntries.map(([date, transactions]) => (
        <DaysSection key={date} date={+date} transactions={transactions} />
      ))}
    </ScrollView>
  )
}

type SectionProps = {
  date: number
  transactions: Transaction[]
}

function DaysSection({ date, transactions }: SectionProps) {
  if (transactions.length === 0) return null
  const parsedDate = parseDate((transactions[0] as any).date)

  const balance = useMemo(() => {
    let income = 0
    let expense = 0
    transactions.forEach((transaction) => {
      if (transaction.type === 'income') income += transaction.amount as number
      else expense += transaction.amount as number
    })

    return { income, expense }
  }, [transactions])

  const sortedTrans = useMemo(() => {
    return transactions.sort(
      (a, b) =>
        new Date(b.date as any).valueOf() - new Date(a.date as any).valueOf()
    )
  }, [transactions])

  return (
    <View style={styles.section}>
      <Divider />

      <Wrapper style={$style(styles.wrapper, styles.sectionHeader)}>
        <View style={styles.dateContainer}>
          <Text>{parsedDate.date}</Text>
          <Text style={styles.day}>{parsedDate.dayStr.slice(0, 3)}</Text>
        </View>

        <View style={styles.transactionsBalanceContainer}>
          <Text style={styles.income}>{balance.income}</Text>
          <Text style={styles.expense}>{balance.expense}</Text>
        </View>
      </Wrapper>

      {sortedTrans.map((transaction) => (
        <React.Fragment key={(transaction as any)._id}>
          <Divider />

          <DayItem transaction={transaction} />
        </React.Fragment>
      ))}

      <Divider />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },

  section: {
    backgroundColor: $clr.bgLighter,
    marginBottom: 15,
  },

  wrapper: {
    paddingHorizontal: 15,
  },

  sectionHeader: {
    paddingVertical: 7.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dateContainer: {
    gap: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },

  day: {
    backgroundColor: $clr.bgLightest,
    padding: 3,
    fontSize: 10,
  },

  transactionsBalanceContainer: {
    flexDirection: 'row',
    maxWidth: 260,
    flex: 1,
    // width: '100%',
  },

  income: {
    color: $clr.primary,
    flex: 1,
    textAlign: 'right',
  },

  expense: {
    color: $clr.error,
    flex: 1,
    textAlign: 'right',
  },
})
