import { Stack } from 'expo-router';
import { AuthenticationProvider } from '../contexts/AuthenticationContext';


export default function RootLayout() {
  return (
    <AuthenticationProvider>
      <Stack>
        <Stack.Screen name={'(tabs)'} options={{ headerShown: false }} />
        <Stack.Screen name={'(auth)/sign-in'} options={{ headerShown: false }} />
      </Stack>
    </AuthenticationProvider>
  );
}
