import { Button, HelperText, Text, TextInput, useTheme } from 'react-native-paper';
import { useMemo, useState } from 'react';
import useAuthentication from '@packages/FirebaseAuth/Hooks/useAuthentication';
import useAuthenticationTexts from '@packages/FirebaseAuth/Hooks/useAuthenticationTexts';
import { object, string } from 'yup';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';
import GlobalError from '@packages/FirebaseAuth/Components/GlobalError';

interface Props {
  onSuccess: () => void;
}

export default function FirebaseForgotPassword({
  onSuccess,
}: Props) {
  const theme = useTheme();
  const styles = useMemo(() => makeStyle(theme), [theme]);

  const [isLoading, setLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const { resetPassword } = useAuthentication();
  const texts = useAuthenticationTexts();
  const validationSchema = object({
    email: string().required(texts.errors.required).email(texts.errors.email),
  });
  const [globalError, setGlobalError] = useState<string | null>(null);

  const handleSubmit = async ({ email }: { email: string }) => {
    setLoading(true);
    setGlobalError(null);

    try {
      await resetPassword(email);
      onSuccess();
      setSent(true);
    } catch (error: any) {
      setGlobalError(texts.errors.global);
    }
    setLoading(false);
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        submitForm,
        errors,
      }) => (
        <View>
          <GlobalError message={globalError} />

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
              onSubmitEditing={() => submitForm()}
              error={!!errors.email}
              disabled={isLoading}
            />
            {!!errors.email &&
              <HelperText type="error" visible={!!errors.email}>
                {errors.email}
              </HelperText>
            }
          </View>
          <Button
            mode={'contained'}
            icon={sent ? 'check' : 'email'}
            onPress={submitForm}
            loading={isLoading}
            disabled={isLoading || sent}
          >
            {sent ? texts.buttons.emailSent : texts.buttons.receiveEmail}
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
});
