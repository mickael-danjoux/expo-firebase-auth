import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { User, onAuthStateChanged as onFirebaseAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.config';
import deepEqual from '../utils/DeepEqual';
import { router } from 'expo-router';

interface AuthenticationContextProps {
  user: User | null;
  clearUser: () => void;
  updateUser: () => void;
  initializing: boolean;
  isLoggedIn: boolean;
}

const initialState: AuthenticationContextProps = {
  user: null,
  initializing: true,
  clearUser: () => {},
  updateUser: () => {},
  isLoggedIn: false,
};

export const AuthenticationContext = createContext(initialState);

export function AuthenticationProvider({ children }: PropsWithChildren) {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setLoggedIn] = useState(false);


  // Handle user state changes
  const onAuthStateChanged = useCallback(
    (u: User | null) => {
      if (deepEqual(u, user)) {
        setInitializing(false);

        if (user === null && u === null) {
          setUser(null);
          setLoggedIn(false);
          router.replace('/(auth)/sign-in');
        }

        return;
      }

      setUser(u);
      setLoggedIn(Boolean(u));

      if (initializing) {
        setInitializing(false);
      }
    },
    [initializing, user],
  );

  useEffect(() => {
    if(!initializing && !user){
      router.replace('/(auth)/sign-in');
    }
  }, [initializing]);

  useEffect(() => {
    return onFirebaseAuthStateChanged(auth, onAuthStateChanged); // unsubscribe on unmount
  }, [onAuthStateChanged]);

  const clearUser = () => setUser(null);
  const updateUser = () => setUser(auth.currentUser);

  const values = useMemo(
    () => ({
      user,
      initializing,
      clearUser,
      updateUser,
      isLoggedIn,
    }),
    [user, initializing, isLoggedIn],
  );

  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  );
}
