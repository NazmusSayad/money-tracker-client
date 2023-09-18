import { ButtonProps, Button } from 'react-native-paper'
import { useNavigate } from 'react-router-dom'

export type LinkProps = ButtonProps & { to: string }
export default function Link({ to, onPress, ...props }: LinkProps) {
  const navigate = useNavigate()

  function handlePress(e: any) {
    navigate(to)
    onPress && onPress(e)
  }

  return <Button {...props} onPress={handlePress} />
}
