import { View, StyleSheet } from 'react-native'
import links from './links'
import { Text } from 'react-native-paper'
import Link from '@/components/Link'

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
          <View key={link.to} style={styles.linkContainer}>
            <Link
              to={link.to}
              render={(state) => {
                const linkStyles = $style(
                  styles.link,
                  state.isActive && styles.linkActive
                )

                return (
                  <View
                    style={$style(
                      styles.ItemContent,
                      props.isMobile && styles.ItemContentMobile,
                      props.isTablet && styles.ItemContentTablet
                    )}
                  >
                    {
                      <link.Icon
                        {...link.iconProps}
                        style={linkStyles}
                        size={20}
                        color={linkStyles.color}
                      />
                    }

                    <Text style={linkStyles}>
                      {props.isTablet ? link.shortLabel : link.longLabel}
                    </Text>
                  </View>
                )
              }}
            />
          </View>
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

  linkContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },

  ItemContent: {
    flexDirection: 'row',
    width: '100%',
    padding: 5,
  },

  ItemContentTablet: {
    minWidth: 50,
    flexDirection: 'column',
    alignItems: 'center',
  },

  ItemContentMobile: {
    minWidth: 50,
    flexDirection: 'column',
    alignItems: 'center',
  },

  link: {
    color: 'red',
  },

  linkActive: {
    color: 'blue',
  },
})
