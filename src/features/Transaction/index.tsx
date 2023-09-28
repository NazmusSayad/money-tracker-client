import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import DatePicker from '@/components/DatePicker'
import HeaderStatus from './HeaderStatus'
import { useTransactions } from '@/store/slice/Transactions'

export default function index() {
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const [type, setType] = useState<'Monthly' | 'Yearly'>('Monthly')
  const transactions = useTransactions(
    year,
    type === 'Monthly' ? month : undefined
  )

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
      <Divider />
      <HeaderStatus transactions={transactions} year={year} month={month} />
      <Divider />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
