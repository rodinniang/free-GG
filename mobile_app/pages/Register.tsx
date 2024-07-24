import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Button
        title="Se connecter"
        onPress={() => {
          navigation.navigate('Login')
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
  }
})
