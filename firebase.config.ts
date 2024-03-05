// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps,   } from 'firebase/app';
import { getAuth, getReactNativePersistence, initializeAuth, Auth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
// https://firebase.google.com/docs/web/setup#available-libraries

const apiUrl = process.env.EXPO_PUBLIC_FIREBASE_API_KEY;
console.log(apiUrl);
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_API_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app;
let auth: Auth;


if(getApps().length === 0){
  app = initializeApp(firebaseConfig)
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  })
}else{
  app = getApp()
  auth = getAuth()
}

export { auth };
