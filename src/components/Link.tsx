import { ButtonProps, Button } from 'react-native-paper'
import { useNavigate } from 'react-router-dom'

export default function Link({
  to,
  onPress,
  ...props
}: ButtonProps & { to: string }) {
  const navigate = useNavigate()

  function handlePress(e: any) {
    navigate(to)
    onPress && onPress(e)
  }

  return <Button {...props} onPress={handlePress} />
}
