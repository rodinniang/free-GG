import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Liste from './pages/Liste'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Categories from './pages/Categories'
import Parametre from './pages/Parametre'
// import DetailsScreen from './pages/Details'

import React from 'react'
// import Details from './pages/Details'

const AuthStack = createNativeStackNavigator()
const AppStack = createBottomTabNavigator()

export default function App() {
  const isLogged = true
  //ou false
  return (
    <NavigationContainer>
      {isLogged ? (
        <AppStack.Navigator>
          <AppStack.Screen name="Home" component={Home} />
          {/* <AppStack.Screen name="Details" component={Details} /> */}
          <AppStack.Screen name="Liste" component={Liste} />
          <AppStack.Screen name="Parametre" component={Parametre} />
          <AppStack.Screen name="Categories" component={Categories} />
          {/* <AppStack.Screen name="Details" component={DetailsScreen} /> */}
        </AppStack.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="Register" component={Register} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  )
}

// import * as React from 'react'
// import { View, Text, StatusBar, Button, StyleSheet } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

// function Screen1({ navigation }) {
//   const insets = useSafeAreaInsets()

//   return (
//     <View
//       style={[
//         styles.container,
//         {
//           backgroundColor: '#6a51ae',
//           paddingTop: insets.top,
//           paddingBottom: insets.bottom,
//           paddingLeft: insets.left,
//           paddingRight: insets.right
//         }
//       ]}
//     >
//       <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
//       <Text style={{ color: '#fff' }}>Light Screen</Text>
//       <Button title="Next screen" onPress={() => navigation.navigate('Screen2')} color="#fff" />
//     </View>
//   )
// }

// function Screen2({ navigation }) {
//   const insets = useSafeAreaInsets()

//   return (
//     <View
//       style={[
//         styles.container,
//         {
//           backgroundColor: '#ecf0f1',
//           paddingTop: insets.top,
//           paddingBottom: insets.bottom,
//           paddingLeft: insets.left,
//           paddingRight: insets.right
//         }
//       ]}
//     >
//       <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
//       <Text>Dark Screen</Text>
//       <Button title="Next screen" onPress={() => navigation.navigate('Screen1')} />
//     </View>
//   )
// }

// const Stack = createNativeStackNavigator()

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="Screen1" component={Screen1} />
//           <Stack.Screen name="Screen2" component={Screen2} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })
