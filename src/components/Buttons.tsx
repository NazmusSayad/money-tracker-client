import { ButtonProps, Button, View, Text } from 'react-native'

export type BaseButtonProps = ButtonProps & {
  title: string
}

function BaseButton({ title, ...props }: BaseButtonProps) {
  return (
    <View
      style={{
        borderRadius: 7.5,
        overflow: 'hidden',
        backgroundColor: 'blue',
      }}
    >
      <Button {...props} title={title}></Button>
    </View>
  )
}

export function ButtonPrimary(props: BaseButtonProps) {
  return <BaseButton {...props} color="#841584" />
}

export function ButtonSecondary(props: BaseButtonProps) {
  return <BaseButton {...props} color="#fff" />
}

export function ButtonDanger(props: BaseButtonProps) {
  return <BaseButton {...props} color="#f00" />
}

export function ButtonSuccess(props: BaseButtonProps) {
  return <BaseButton {...props} color="#0f0" />
}

export function ButtonWarning(props: BaseButtonProps) {
  return <BaseButton {...props} color="#ff0" />
}

export function ButtonBlank(props: BaseButtonProps) {}
