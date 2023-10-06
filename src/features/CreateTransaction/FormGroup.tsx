import { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Text, TextInputProps, ButtonProps, Button } from 'react-native-paper'

type ChildType = 'input' | 'button'
type Props<T extends ChildType> = {
  label: string
  type: T
} & Omit<T extends 'input' ? TextInputProps : ButtonProps, 'children'>

export default function FormGroup<T extends ChildType>({
  label,
  type,
  ...props
}: Props<T>) {
  return (
    <View style={styles.group}>
      <Text variant="labelLarge" style={styles.label}>
        {label}
      </Text>

      <View style={styles.inputContainer}>
        {type === 'button' ? (
          <Button
            {...props}
            mode="text"
            style={styles.button}
            labelStyle={{ margin: 0, padding: 0 }}
            contentStyle={{ margin: 0, padding: 0 }}
          >
            {label}
          </Button>
        ) : (
          <TextInput
            {...(props as any)}
            style={styles.input}
            autoComplete={'off'}
            placeholder="eg: 100"
            keyboardType="number-pad"
            selectionColor={'transparent'}
          />
        )}

        <View style={styles.underline} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  group: {
    backgroundColor: '#fff',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    width: 70,
  },

  inputContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  input: {
    fontSize: 15,
  },

  button: {
    fontSize: 15,
    margin: 0,
    padding: 0,
    lineHeight: 0,
  },

  underline: {},
})
