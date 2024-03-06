import FirebaseForgotPassword from '@packages/FirebaseAuth/Components/FirebaseForgotPassword';
import FirebaseSafeView from '@packages/FirebaseAuth/Components/FirebaseSafeView';

export default function ForgotPassword() {
  return (
    <FirebaseSafeView>
      <FirebaseForgotPassword onSuccess={()=>{}}/>
    </FirebaseSafeView>
  );
}
