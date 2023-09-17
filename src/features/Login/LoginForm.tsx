import { StyleSheet, View } from 'react-native'
import { Button, Text, TextInput, useTheme } from 'react-native-paper'
import Wrapper from '@/layouts/Wrapper'

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  error,
}) {
  const { colors } = useTheme()
  console.log()

  return (
    <View style={styles.container}>
      <Wrapper>
        <View style={styles.formContainer}>
          <TextInput
            label="Email"
            mode="outlined"
            textContentType="emailAddress"
            theme={{ roundness: 10 }}
            value={email}
            onChangeText={(value) => setEmail(value)}
          />

          <TextInput
            label="Password"
            mode="outlined"
            textContentType="password"
            theme={{ roundness: 10 }}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />

          <Button
            mode="contained"
            style={styles.button}
            onPress={() => email && password && onSubmit()}
          >
            Login
          </Button>

          {error && (
            <Text
              variant="bodyLarge"
              style={{
                color: colors.error,
                marginTop: 10,
                textAlign: 'center',
              }}
            >
              {error}
            </Text>
          )}
        </View>
      </Wrapper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },

  formContainer: {
    width: '100%',
    maxWidth: 400,
    marginHorizontal: 'auto',
  },

  button: {
    marginTop: 8,
  },
})
