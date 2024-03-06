# Firebase Auth module

- expo: ~50.0.8
- node: 18


## How to use ?

### Install packages
- `@react-native-async-storage/async-storage`
- `firebase`

```shell
npm i @react-native-async-storage/async-storage
npx expo install firebase
```

### Copy package
Copy these files in your project

-  `/packages/FirebaseAuth`
-  `firebase.config.ts`

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
