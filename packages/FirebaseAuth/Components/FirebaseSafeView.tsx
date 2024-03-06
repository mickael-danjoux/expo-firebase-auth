import { PropsWithChildren, useMemo } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';

export default function FirebaseSafeView({
  children,
}: PropsWithChildren) {
  const theme = useTheme();
  const styles = useMemo(() => makeStyle(theme), [theme]);


  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.view}>
        {children}
      </View>
    </SafeAreaView>
  );
}
const makeStyle = (theme: ThemeProp) => StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: theme.colors?.background,
  },
  view: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16
  },
});
