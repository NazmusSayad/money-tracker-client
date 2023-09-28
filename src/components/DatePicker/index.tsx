import { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, IconButton, Divider } from 'react-native-paper'

import Modal from '../Modal'
import Wrapper from './Wrapper'
import SelectType from './SelectType'
import { getMonthName } from '@/utils'

export default function index({
  type,
  setType,
  year,
  setYear,
  month,
  setMonth,
}) {
  const [showModal, setShowModal] = useState(false)
  const handleLeftClick =
    type === 'Monthly'
      ? (n) =>
          setMonth((prev) => {
            const ni = prev + n
            if (ni < 0) {
              setYear((prev) => prev - 1)
              return 11
            } else if (ni > 11) {
              setYear((prev) => prev + 1)
              return 0
            } else {
              return ni
            }
          })
      : (n) => setYear((prev) => prev + n)

  return (
    <>
      <View style={styles.container}>
        <View style={styles.kasjdkfajsdkfjkadsfjadksf}>
          <IconButton
            onPress={() => handleLeftClick(-1)}
            icon="chevron-left"
            style={{ margin: 0 }}
          />

          <Text>
            {year} {type === 'Monthly' ? getMonthName(month) : ''}
          </Text>

          <IconButton
            onPress={() => handleLeftClick(+1)}
            icon="chevron-right"
            style={{ margin: 0 }}
          />
        </View>

        <IconButton onPress={() => setShowModal(true)} icon="filter-variant" />
      </View>

      <Modal
        transparent
        visible={showModal}
        animationType="fade"
        style={{ justifyContent: 'center' }}
        wrapperStyle={styles.modalWrapper}
        contentStyle={styles.modalContent}
        onDismiss={() => setShowModal(false)}
        onOutsidePress={() => setShowModal(false)}
      >
        <Wrapper>
          <Text variant="headlineMedium">View</Text>
          <Divider style={{ marginTop: 5, marginBottom: 10 }} />
          <SelectType type={type} setType={setType} />
        </Wrapper>
      </Modal>
    </>
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

  modalWrapper: {
    padding: 20,
    backgroundColor: '#ffffff25',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: $clr.bg,
    borderRadius: 10,
    paddingVertical: 15,
    maxWidth: 500,
    width: '100%',
    height: '100%',
  },

  kasjdkfajsdkfjkadsfjadksf: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
