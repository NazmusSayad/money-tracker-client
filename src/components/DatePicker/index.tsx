import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SelectType from './SelectType'
import SeleteDate from './SeleteDate'

export default function index(props) {
  const [type, setType] = useState<'Monthly' | 'Yearly'>('Monthly')

  return (
    <View style={styles.container}>
      <SelectType selected={type} setSelected={setType} />
      <SeleteDate type={type} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: $clr.bgLighter,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
