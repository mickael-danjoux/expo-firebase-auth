import { Button, StyleSheet, Text, View } from 'react-native';
import useAuthentication from '@packages/FirebaseAuth/Hooks/useAuthentication';

export default function Index() {
  const {doLogout} = useAuthentication()
  return (
    <View>
      <Text style={styles.title}>Hello Home</Text>
      <Button title={'Logout'} onPress={doLogout}/>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 22,
    marginTop: 20,
    marginBottom: 50,
    textAlign: 'center'
  }
})
