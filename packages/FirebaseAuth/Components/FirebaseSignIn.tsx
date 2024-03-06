import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useMemo } from 'react';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';
import SignInWithEmail from '@packages/FirebaseAuth/Components/SignInWithEmail';
import Or from '@packages/FirebaseAuth/Components/Or';
import SignInWithAppleButton from '@packages/FirebaseAuth/Components/SignInWithAppleButton';
import { router } from 'expo-router';

interface Props{
  onSuccess: () => void
}

export default function FirebaseSignIn({
  onSuccess
}:Props) {
  const theme = useTheme();
  const styles = useMemo(() => makeStyle(theme), [theme]);

  return (
    <KeyboardAvoidingView style={styles.mainView}>
      <SignInWithEmail onSuccess={onSuccess}/>
      <Or/>
      <SignInWithAppleButton onSuccess={()=>{
        router.replace('/(tabs)')
      }}/>
    </KeyboardAvoidingView>
  );
}
const makeStyle = (theme: ThemeProp) => StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: '40%',
    backgroundColor: theme.colors?.background
  },
});
