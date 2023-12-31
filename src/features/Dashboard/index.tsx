import { View, StyleSheet } from 'react-native'
import { useMediaQuery } from 'react-responsive'
import { FAB } from 'react-native-paper'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import CreateTransaction from '@/features/CreateTransaction'
import useTransactionModal from '@/hooks/useTransactionModal'

export default function index() {
  const isMobile = useMediaQuery({ maxWidth: 500 / 16 + 'em' })
  const isTablet = useMediaQuery({ maxWidth: 800 / 16 + 'em' })
  const transactionModal = useTransactionModal()

  return (
    <View
      style={$style(
        styles.container,
        isTablet && styles.containerTablet,
        isMobile && styles.containerMobile
      )}
    >
      {isMobile || <Sidebar isMobile={isMobile} isTablet={isTablet} />}
      <View style={styles.main}>
        <Outlet />

        <FAB
          icon="plus"
          style={$style(styles.fab)}
          onPress={() => transactionModal.open('new')}
        />
      </View>
      {isMobile && <Sidebar isMobile={isMobile} isTablet={isTablet} />}
      <CreateTransaction visible={Boolean(transactionModal.transaction)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
  },

  containerTablet: {},

  containerMobile: {
    flexDirection: 'column',
  },

  main: {
    maxHeight: '100%',
    overflow: 'hidden',
    flex: 1,
  },

  fab: {
    position: 'absolute',
    margin: 15,
    right: 0,
    bottom: 0,
  },
})
