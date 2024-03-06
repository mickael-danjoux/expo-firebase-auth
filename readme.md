# Firebase Auth module

- Expo: ~50.0.8
- Node: v18
- React native Paper v5
- Formik 2.4
- Yup 2.3

## How to use ?

### Install packages

```shell
npm i @react-native-async-storage/async-storage@1.22 react-native-paper@5.12 formik@2.4 yup@2.3
npx expo install firebase@10.8
```

### Copy package

Copy these files in your project

- `/app/(auth)`
- `/packages/FirebaseAuth`
- `firebase.config.ts`

Add stack in your main layout

```tsx
 <Stack.Screen name={'(auth)'} options={{ headerShown: false }} />
```

### Configure

#### Set `.env` vars

```dotenv
EXPO_PUBLIC_FIREBASE_API_KEY=
EXPO_PUBLIC_FIREBASE_API_AUTH_DOMAIN=
EXPO_PUBLIC_FIREBASE_PROJECT_ID=
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
EXPO_PUBLIC_FIREBASE_APP_ID=
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

#### Add metro configuration

```shell
npx expo customize metro.config.js
```

in `metro.config.js`

```js
const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.sourceExts.push('cjs');

module.exports = defaultConfig;
```

### Texts

All text in this module are provided by a Hook. You can simply edit it or use a translation Hook.

Edit texts in `/packages/FirebaseAuth/Hooks/useAuthenticationTexts`
