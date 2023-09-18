import { View, StyleSheet } from 'react-native'
import Link from '@/components/Link'
import links from './links'
import { Text } from 'react-native-paper'

type Props = {
  isMobile: boolean
  isTablet: boolean
}

export default function Sidebar(props: Props) {
  return (
    <View style={styles.container}>
      <View
        style={$style(
          styles.listContainer,
          props.isMobile && styles.listContainerMobile
        )}
      >
        {links.map((link) => (
          <Link key={link.to} to={link.to} style={{ margin: 0 }} labelStyle={{ margin: 0 }}>
            <View
              style={$style(
                styles.ItemContent,
                props.isMobile && styles.ItemContentMobile,
                props.isTablet && styles.ItemContentTablet
              )}
            >
              {link.icon}
              {(props.isTablet && !props.isMobile) || (
                <Text>{props.isMobile ? link.shortLabel : link.longLabel}</Text>
              )}
            </View>
          </Link>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: $clr.bgLighter,
  },

  listContainer: {},

  listContainerMobile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },

  ItemContent: {
    flexDirection: 'row',
    padding: 5,
    width: '100%',
  },

  ItemContentTablet: {
    width: 'auto',
  },

  ItemContentMobile: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
})
