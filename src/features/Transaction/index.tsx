import { useMemo, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Divider, Text } from 'react-native-paper'
import DatePicker from '@/components/DatePicker'

export default function index() {
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const [type, setType] = useState<'Monthly' | 'Yearly'>('Monthly')

  const transactions = $useStore((state) => state.transactions.transactions)
  const localTransactions = $useStore(
    (state) => state.transactions.localTransactions
  )

  const allTrans = useMemo(() => {
    if (type === 'Monthly') {
      const abc = transactions?.[year]?.[month] ?? {}
      const xyz = localTransactions?.[year]?.[month] ?? {}

      const result = JSON.parse(JSON.stringify(abc))
      for (let key in xyz) {
        const value = xyz[key] ?? []
        result[key]?.push(...value)
      }

      const entries = Object.entries(result).sort(([a]: any, [b]: any) => a - b)
      return entries
    }

    const abc = transactions?.[year] ?? {}
    const xyz = localTransactions?.[year] ?? {}

    const result = JSON.parse(JSON.stringify(abc))
    for (let key in xyz) {
      const value = xyz[key] ?? {}
      result[key] = { ...result[key], ...value }
    }

    const entries = Object.entries(result).sort(([a]: any, [b]: any) => a - b)
    return entries
  }, [transactions, localTransactions, month, year, type])

  return (
    <View style={styles.container}>
      <DatePicker
        type={type}
        year={year}
        month={month}
        setType={setType}
        setYear={setYear}
        setMonth={setMonth}
      />

      <Card style={{ margin: 10 }}>
        <Text>
          aksdjfkasdjfk asdkfkasdjfasjdfkasdjf kasdjkf adjskfsadkf sdkf{' '}
        </Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
