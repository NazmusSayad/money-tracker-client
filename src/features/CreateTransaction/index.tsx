import Modal from '@/components/Modal'
import useTransactionModal from '@/hooks/useTransactionModal'
import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import {
  Button,
  IconButton,
  SegmentedButtons,
  Divider,
} from 'react-native-paper'
import TransactionForm from './TransactionForm'

export default function index({ visible }) {
  const modal = useTransactionModal()
  const [showMenu, setShowMenu] = useState(false)
  const [mode, setMode] = useState<
    'income' | 'expense' | 'loan' | 'transfer' | 'borrow'
  >('expense')

  useEffect(() => {
    modal.transaction && setMode('expense')
  }, [Boolean(modal.transaction)])

  return (
    <Modal
      visible={visible}
      animationType="fade"
      wrapperStyle={styles.wrapper}
      contentStyle={styles.content}
      onDismiss={() => modal.close()}
      onOutsidePress={() => modal.close()}
    >
      <View>
        <View style={styles.header}>
          <Button
            icon="arrow-left"
            onPress={() => modal.close()}
            mode="text"
            textColor={$clr.inverseSurface}
          >
            Create {mode}
          </Button>

          <IconButton
            icon="menu"
            onPress={() => setShowMenu((prev) => !prev)}
          />
        </View>

        <Divider />
      </View>

      <View
        style={$style(
          styles.segmentedButtonsContainer,
          showMenu ? { height: 'auto' } : { height: 0 }
        )}
      >
        <View style={styles.segmentedButtons}>
          <SegmentedButtons
            value={mode}
            onValueChange={setMode as any}
            buttons={[
              { value: 'income', label: 'Income' },
              { value: 'expense', label: 'Expense' },
            ]}
          />
          <SegmentedButtons
            value={mode}
            onValueChange={setMode as any}
            buttons={[
              { value: 'loan', label: 'Loan' },
              { value: 'transfer', label: 'Transfer' },
              { value: 'borrow', label: 'Borrow' },
            ]}
          />
        </View>

        <Divider />
      </View>

      <TransactionForm />
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 25,
    paddingHorizontal: '5%',
    backgroundColor: $clr.bgDarker,
  },

  content: {
    maxWidth: 500,
    backgroundColor: $clr.bgLighter,
    borderRadius: 10,
    overflow: 'hidden',
  },

  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  segmentedButtonsContainer: {
    overflow: 'hidden',
  },

  segmentedButtons: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    gap: 10,
  },
})
