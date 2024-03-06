// Lets you edit texts simply or use a translation hook
export default function useAuthenticationTexts() {

  return {
    errors: {
      required: 'This field is required',
      email: 'This email is not valid',
      invalidCredentials: 'Invalid credentials',
    },
    buttons: {
      submit: 'Submit',
    },
    or: 'OR'
  };

}
