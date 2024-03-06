import { StyleSheet, Text, View } from 'react-native';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';
import { useTheme } from 'react-native-paper';
import { useMemo } from 'react';

interface Props {
  message?: string | null;
}

export default function GlobalError({
  message
}: Props) {
  const theme = useTheme();
  const styles = useMemo(() => makeStyle(theme), [theme]);

  if(!message){
    return <></>
  }
  return (
    <View style={styles.globalError}>
      <Text style={styles.globalErrorText}>{message}</Text>
    </View>
  );
}
const makeStyle = (theme: ThemeProp) => StyleSheet.create({
  globalError: {
    backgroundColor: '#fff3cd',
    borderColor: '#ffeeba',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: theme.roundness,
  },
  globalErrorText: {
    color: '#856404',
    fontWeight: 'bold',
  },
})
