import { Text } from 'react-native';
import FirebaseSafeView from '@packages/FirebaseAuth/Components/FirebaseSafeView';
import { useContext } from 'react';
import { AuthenticationContext } from '@packages/FirebaseAuth/Contexts/AuthenticationContext';
import { router } from 'expo-router';

export default function AuthIndex(){
  const {isLoggedIn} = useContext(AuthenticationContext)
  if(isLoggedIn){
    router.replace('(tabs)')
  }
  return (
    <FirebaseSafeView>
      <Text>ok</Text>
    </FirebaseSafeView>
  )
}
