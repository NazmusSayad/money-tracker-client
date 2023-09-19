import { Avatar, Text } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'
import { Link } from '@/components/Link'
import links from './links'

type Props = {
  isMobile: boolean
  isTablet: boolean
}

export default function Sidebar(props: Props) {
  return (
    <View
      style={$style(
        styles.container,
        props.isMobile || styles.containerUpperThanMobile
      )}
    >
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
              forceRender
              render={(state) => {
                const linkStyles = $style(
                  styles.link,
                  state.isActive && styles.linkActive
                )

                return (
                  <View
                    style={$style(
                      styles.linkContent,
                      props.isMobile && styles.linkContentMobile,
                      props.isTablet && styles.linkContentTablet
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

                    <Text
                      style={linkStyles}
                      variant={props.isTablet ? 'labelSmall' : 'labelMedium'}
                    >
                      {props.isTablet ? link.shortLabel : link.longLabel}
                    </Text>
                  </View>
                )
              }}
            />
          </View>
        ))}
      </View>

      {props.isMobile || (
        <View style={styles.bottomListContainer}>
          <View style={{ width: 40, height: 40 }}>
            <Link
              to="/profile"
              render={() => (
                <Avatar.Image
                  size={40}
                  source={{ uri: 'https://picsum.photos/200' }}
                />
              )}
            />
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: $clr.bgLighter,
    justifyContent: 'space-between',
  },

  containerUpperThanMobile: {
    paddingTop: 5,
    paddingBottom: 12,
  },

  listContainer: {},

  listContainerMobile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },

  bottomListContainer: {
    alignItems: 'center',
    overflow: 'hidden',
  },

  linkContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },

  link: {
    color: $clr.bgWhitest,
  },

  linkActive: {
    color: $clr.secondary,
  },

  linkContent: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    gap: 7.5,
  },

  linkContentTablet: {
    gap: 0,
    padding: 7.5,
    flexDirection: 'column',
  },

  linkContentMobile: {
    minWidth: 50,
  },
})
