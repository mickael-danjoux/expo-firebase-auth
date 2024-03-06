import { Stack } from 'expo-router';
import { AuthenticationProvider } from '@packages/FirebaseAuth/Contexts/AuthenticationContext';
import { ThemeProvider } from 'react-native-paper';


export default function RootLayout() {
  return (
    <AuthenticationProvider>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name={'(tabs)'} options={{ headerShown: false }} />
          <Stack.Screen name={'(auth)/sign-in'} options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </AuthenticationProvider>
  );
}
