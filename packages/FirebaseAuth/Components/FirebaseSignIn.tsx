import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useMemo } from 'react';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';
import SignInWithEmail from '@packages/FirebaseAuth/Components/SignInWithEmail';
import Or from '@packages/FirebaseAuth/Components/Or';

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
    </KeyboardAvoidingView>
  );
}
const makeStyle = (theme: ThemeProp) => StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: '40%',
    paddingHorizontal: 16,
    backgroundColor: theme.colors?.background
  },
});
