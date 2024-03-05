import { StyleSheet, Text } from 'react-native';

export default function Settings(){
  return (
    <Text style={styles.title}>Hello settings</Text>
  )
}
const styles = StyleSheet.create({
  title:{
    fontSize: 22,
    marginTop: 20,
    marginBottom: 50,
    textAlign: 'center'
  }
})
