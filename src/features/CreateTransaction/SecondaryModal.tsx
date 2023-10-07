import Modal from '@/components/Modal'
import { View, StyleSheet } from 'react-native'
import { styles as rootStyles } from '.'
import { Text, Button } from 'react-native-paper'

export default function SecondaryModal({ label, visible, children, close }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      wrapperStyle={rootStyles.wrapper}
      contentStyle={$style(rootStyles.content, {
        paddingVertical: 10,
        paddingHorizontal: 18,
      })}
    >
      <View style={styles.header}>
        <Text variant="labelLarge">{label}</Text>
        <Button onPress={close}>Close</Button>
      </View>

      <View style={styles.body}>{children}</View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  header: {},

  body: {},
})
