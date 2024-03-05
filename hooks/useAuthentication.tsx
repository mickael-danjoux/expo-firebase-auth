import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase.config';

export default function useAuthentication() {

  const doLogin = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const doLogout = async () => {
    signOut(auth)
      .then()
      .catch(() => {
      });
  };

  return {
    doLogin,
    doLogout
  };
}
