import * as AppleAuthentication from 'expo-apple-authentication';
import * as Crypto from 'expo-crypto';
import { StyleSheet } from 'react-native';
import { OAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from 'firebase.config';

interface Props {
  onSuccess: () => void;
}

export default function SignInWithAppleButton({
  onSuccess,
}: Props) {

  const handlePress = async () => {
    const nonce = Math.random().toString(36).substring(2, 10);
    return Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, nonce)
      .then((hashedNonce) =>
        AppleAuthentication.signInAsync({
          requestedScopes: [
            AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
            AppleAuthentication.AppleAuthenticationScope.EMAIL,
          ],
          nonce: hashedNonce,
        }),
      )
      .then((appleCredential) => {
        const { identityToken } = appleCredential;
        const provider = new OAuthProvider('apple.com');
        const credential = provider.credential({
          idToken: identityToken!,
          rawNonce: nonce,
        });
        return signInWithCredential(auth, credential);
        // Successful sign in is handled by firebase.auth().onAuthStateChanged
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={5}
      style={styles.button}
      onPress={() => {
        handlePress().then(onSuccess);
      }}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
  },
});
