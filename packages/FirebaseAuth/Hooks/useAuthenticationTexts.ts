// Lets you edit texts simply or use a translation hook
export default function useAuthenticationTexts() {

  return {
    errors: {
      required: 'This field is required',
      email: 'This email is not valid',
      invalidCredentials: 'Invalid credentials',
      global: 'An error occurred'
    },
    buttons: {
      submit: 'Submit',
      forgotPassword: 'Forgot password',
      back: 'Back',
      receiveEmail: 'Receive an email',
      emailSent: 'Email sent'
    },
    or: 'OR',
    titles:{
      forgotPassword: 'Forgot password'
    }
  };

}
