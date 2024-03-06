import { router } from 'expo-router';
import FirebaseSignIn from '@packages/FirebaseAuth/Components/FirebaseSignIn';
import FirebaseSafeView from '@packages/FirebaseAuth/Components/FirebaseSafeView';


export default function SignIn() {
  return (
    <FirebaseSafeView>
      <FirebaseSignIn onSuccess={()=>{
        router.replace('/(tabs)')
      }}/>
    </FirebaseSafeView>
  );
}
