import { Text, TextInputProps } from 'react-native-paper'
import { StyleSheet, TextInput, Pressable, PressableProps } from 'react-native'
import { useState } from 'react'

type ChildType = 'input' | 'button'
type Props<T extends ChildType> = {
  label: string
  placeholder?: string
  type: T
} & Omit<T extends 'input' ? TextInputProps : PressableProps, 'children'>

export default function FormGroup<T extends ChildType>({
  type,
  label,
  placeholder,
  ...props
}: Props<T>) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View style={styles.group}>
      <Text variant="labelLarge" style={styles.label}>
        {label}
      </Text>

      <View style={styles.inputContainer}>
        {type === 'button' ? (
          <Pressable {...props} style={styles.button}>
            <Text>{placeholder || ' '}</Text>
          </Pressable>
        ) : (
          <TextInput
            {...(props as any)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={$style(
              styles.input,
              isFocused && { borderBottomColor: $clr.primary }
            )}
            autoComplete={'off'}
          />
        )}
      </View>
    </View>
  )
}

const commonStyles = StyleSheet.create({
  input: {
    color: $clr.inverseSurface,
    fontSize: 15,
    paddingHorizontal: 5,
    borderBottomColor: $clr.secondary,
    borderBottomWidth: 1,
    marginBottom: 2,
    outlineWidth: 0,
  },
})
const styles = StyleSheet.create({
  group: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    width: 65,
  },

  inputContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  input: {
    ...commonStyles.input,
  },

  button: {
    ...commonStyles.input,
    cursor: 'pointer',
    margin: 0,
    padding: 0,
  },
})
