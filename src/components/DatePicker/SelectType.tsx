import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Menu } from 'react-native-paper'

export default function index({ selected, setSelected }) {
  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>{selected}</Button>}
      >
        <Menu.Item
          onPress={() => (setSelected('Monthly'), closeMenu())}
          title="Monthly"
        />
        <Menu.Item
          onPress={() => (setSelected('Yearly'), closeMenu())}
          title="Yearly"
        />
      </Menu>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: $clr.bgWhiter,
    borderWidth: 1.5,
    borderRadius: 5,
  },
})
