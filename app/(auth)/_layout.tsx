import { Stack } from 'expo-router';
import useAuthenticationTexts from '@packages/FirebaseAuth/Hooks/useAuthenticationTexts';

export default function AuthLayout(){
  const texts = useAuthenticationTexts()
  return (
    <Stack>
      <Stack.Screen name={'index'} options={{ headerShown: false }} />
      <Stack.Screen name={'sign-in'} options={{ headerShown: false }} />
      <Stack.Screen name={'forgot-password'}
                    options={{
                      headerBackTitle: texts.buttons.back,
                      title: texts.titles.forgotPassword
                    }}
      />
    </Stack>
  )
}
