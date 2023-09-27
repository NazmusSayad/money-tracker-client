import {
  Pressable,
  StyleSheet,
  Modal as NativeModal,
  GestureResponderEvent,
  ModalProps as NativeModalProps,
} from 'react-native'

type ModalProps = NativeModalProps & {
  onOutsidePress?: ((event: GestureResponderEvent) => void) | null | undefined
  contentStyle?: any
  wrapperStyle?: any
}

export default function Modal({
  children,
  onOutsidePress,
  style,
  contentStyle,
  wrapperStyle,
  ...props
}: ModalProps) {
  return (
    <NativeModal {...props} style={$style(styles.root, style)} transparent>
      <Pressable
        focusable={false}
        accessible={false}
        android_disableSound
        accessibilityElementsHidden
        style={$style(styles.wrapper, wrapperStyle)}
        onPress={(event) => onOutsidePress && onOutsidePress(event)}
      >
        <Pressable
          focusable={false}
          accessible={false}
          android_disableSound
          accessibilityElementsHidden
          style={$style(styles.content, contentStyle)}
          onPress={(event) => event.stopPropagation()}
        >
          {children}
        </Pressable>
      </Pressable>
    </NativeModal>
  )
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },

  wrapper: {
    height: '100%',
    cursor: 'default',
  } as any,

  content: {
    cursor: 'default',
  } as any,
})
