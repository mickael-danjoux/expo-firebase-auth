import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';
import useAuthenticationTexts from '@packages/FirebaseAuth/Hooks/useAuthenticationTexts';

export default function Or() {
  const texts = useAuthenticationTexts();

  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{texts.or}</Text>
      </View>
    </View>
  );
}

const makeStyles = (colors: MD3Colors) => {
  return StyleSheet.create({
    container: {
      borderTopWidth: 1,
      borderTopColor: colors.shadow,
      width: '80%',
      alignSelf: 'center',
      marginVertical: 25,
    },
    textContainer: {
      marginTop: -11,
      backgroundColor: colors.background,
      width: '15%',
      alignSelf: 'center',
    },
    text: {
      textAlign: 'center',
      color: colors.shadow,
    },
  });
};
