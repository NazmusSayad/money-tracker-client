import { StyleSheet } from 'react-native'
import { SegmentedButtons } from 'react-native-paper'

export default function SelectType({ type, setType }) {
  return (
    <SegmentedButtons
      style={styles.container}
      value={type}
      multiSelect={false}
      onValueChange={(value: any) => setType(value)}
      buttons={[
        {
          value: 'Monthly',
          label: 'Monthly',
          showSelectedCheck: true,
        },
        {
          value: 'Yearly',
          label: 'Yearly',
          showSelectedCheck: true,
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  container: { width: '100%' },
})
