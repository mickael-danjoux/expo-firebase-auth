import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import useAuthentication from '../../hooks/useAuthentication';
import { router } from 'expo-router';


export default function SignIn() {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { doLogin } = useAuthentication();

  const handleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      await doLogin(email, password);
      router.replace('/(tabs)');
    } catch (error: any) {
      if ( ['auth/invalid-credential', 'auth/invalid-email'].includes(error.code)) {
        setError('Invalid Credentials');
      }
    }
    setLoading(false);

  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        {error &&
          <Text style={styles.error}>
            {error}
          </Text>
        }
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          autoComplete={'email'}
          keyboardType="email-address"
          returnKeyType={'next'}

        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
          returnKeyType={'go'}
          onSubmitEditing={handleSignIn}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignIn}
          style={styles.button}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '40%',
    alignItems: 'center',
  },
  error: {
    color: 'red',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
