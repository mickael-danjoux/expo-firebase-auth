import { router } from 'expo-router';
import FirebaseSignIn from '@packages/FirebaseAuth/Components/FirebaseSignIn';
import { SafeAreaView } from 'react-native';
import { useTheme } from 'react-native-paper';


export default function SignIn() {
  const {colors} = useTheme()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <FirebaseSignIn onSuccess={()=>{
        router.replace('/(tabs)')
      }}/>
    </SafeAreaView>
  );
}
