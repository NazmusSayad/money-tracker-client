import Modal from '@/components/Modal'
import { useState } from 'react'
import { ScrollView, StyleSheet, TextInput } from 'react-native'
import { Text, Button } from 'react-native-paper'
import FormGroup from './FormGroup'

export default function TransactionForm() {
  const [showModal, setShowModal] = useState(false)

  return (
    <ScrollView>
      <View style={styles.container}>
        <FormGroup label={'Boom'} type="input" />

        <FormGroup
          label={'Boom'}
          type="button"
          onPress={() => {
            console.log('bOom')
          }}
        />

        <Modal visible={showModal}></Modal>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
})

console.log(styles.container.paddingHorizontal)
