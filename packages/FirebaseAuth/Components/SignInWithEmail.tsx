import { Button, HelperText, TextInput, useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useMemo, useRef, useState } from 'react';
import { TextInput as NativeTextInput } from 'react-native/Libraries/Components/TextInput/TextInput';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';
import { object, string } from 'yup';
import { Formik } from 'formik';
import useAuthentication from '@packages/FirebaseAuth/Hooks/useAuthentication';
import { router } from 'expo-router';
import useAuthenticationTexts from '@packages/FirebaseAuth/Hooks/useAuthenticationTexts';
import GlobalError from '@packages/FirebaseAuth/Components/GlobalError';


interface SignInModel {
  email: string;
  password: string;
}

const initialValues = {
  email: '',
  password: '',
};

interface Props {
  onSuccess: () => void;
}

export default function SignInWithEmail({
  onSuccess,
}: Props) {

const texts = useAuthenticationTexts()

  const theme = useTheme();
  const styles = useMemo(() => makeStyle(theme), [theme]);
  const [isLoading, setLoading] = useState(false);
  const $password = useRef<NativeTextInput>(null);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const { doLogin } = useAuthentication();

  const validationSchema = object({
    email: string().required(texts.errors.required).email(texts.errors.email),
    password: string().required(texts.errors.required),
  });

  const handleSubmit = async ({ email, password }: SignInModel) => {
    setLoading(true);
    setGlobalError(null);
    try {
      await doLogin(email, password);
      onSuccess();
    } catch (error: any) {
      if (['auth/invalid-credential', 'auth/invalid-email'].includes(error.code)) {
        setGlobalError(texts.errors.invalidCredentials);
      }
    }
    setLoading(false);
  };


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={true}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
      }) => (
        <View>
          <GlobalError message={globalError}/>

          <View style={styles.input}>
            <TextInput
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              label="Email"
              mode={'outlined'}
              autoComplete={'email'}
              keyboardType="email-address"
              returnKeyType={'next'}
              onSubmitEditing={() => $password.current?.focus()}
              error={!!errors.email}
              disabled={isLoading}
            />
            {!!errors.email &&
              <HelperText type="error" visible={!!errors.email}>
                {errors.email}
              </HelperText>
            }
          </View>

          <View style={styles.input}>
            <TextInput
              ref={$password}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              label="Password"
              mode={'outlined'}
              autoComplete={'email'}
              secureTextEntry
              returnKeyType={'go'}
              onSubmitEditing={() => handleSubmit()}
              error={!!errors.email}
              disabled={isLoading}
            />
            {!!errors.password &&
              <HelperText type="error" visible={!!errors.password}>
                {errors.password}
              </HelperText>
            }
          </View>
          <Button
            mode={'contained'}
            style={styles.button}
            onPress={() => handleSubmit()}
            loading={isLoading}
            disabled={isLoading}
          >
            {texts.buttons.submit}
          </Button>
          <Button
            mode={'text'}
            style={[styles.button, styles.forgotPassword]}
            onPress={() => router.navigate('(auth)/forgot-password')}
          >
            {texts.buttons.forgotPassword}
          </Button>
        </View>
      )}
    </Formik>
  );
}

const makeStyle = (theme: ThemeProp) => StyleSheet.create({
  input: {
    marginBottom: 8,
  },
  button: {
    borderRadius: theme.roundness,
  },
  forgotPassword:{
    alignItems: 'flex-start',
    marginLeft: 0
  }
});
