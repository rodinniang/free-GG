import { StyleSheet, Text, View, Button } from 'react-native'
import Card from '../components/Card'
import { TypedNavigator } from '@react-navigation/native'

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Card title={'bienvenue sur le login !'} />
      <Text style={styles.specialTitle}>Login</Text>

      <Button
        title="S'inscrire"
        onPress={() => {
          navigation.navigate('Register')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  specialTitle: {
    color: 'red'
  }
})
