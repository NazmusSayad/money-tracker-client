import { useState } from 'react'
import { ScrollView, StyleSheet, TextInput } from 'react-native'
import { Text, Button } from 'react-native-paper'
import FormGroup from './FormGroup'
import SecondaryModal from './SecondaryModal'

export default function TransactionForm() {
  const [modal, setModal] = useState('')

  return (
    <ScrollView>
      <View style={styles.container}>
        <FormGroup
          label={'Amount'}
          type="input"
          keyboardAppearance={'dark'}
          keyboardType={'number-pad'}
        />

        <FormGroup
          label={'Category'}
          type="button"
          onPress={() => setModal('Select Category')}
        />

        <SecondaryModal
          label={modal}
          visible={Boolean(modal)}
          close={() => setModal('')}
        >
          <Text>Boom</Text>
        </SecondaryModal>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
})

console.log(styles.container.paddingHorizontal)
