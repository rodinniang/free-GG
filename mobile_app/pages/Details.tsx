// import React, { useEffect, useState } from 'react'
// import { View, Text, TouchableOpacity, StatusBar, Share, Animated, Image } from 'react-native'
// import { Ionicons } from '@expo/vector-icons'
// import { getAllGame } from '../services/api/games/requests'
// import * as Linking from 'expo-linking'

// const DetailsScreen = ({ route }) => {
//   const { data } = route.params
//   const [animation] = useState(new Animated.Value(0))
//   const [gameData, setGameData] = useState(null)

//   useEffect(() => {
//     Animated.timing(animation, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true
//     }).start()

//     const fetchData = async () => {
//       try {
//         const dataFromApi = await getAllGame()
//         setGameData(dataFromApi)
//       } catch (error) {
//         console.error('Error fetching game data:', error.message)
//       }
//     }

//     fetchData()
//   }, [])

//   const openWebsite = () => {
//     if (data.url) {
//       Linking.openURL(data.url)
//     }
//   }

//   const shareData = async () => {
//     try {
//       await Share.share({
//         message: `Découvrez : ${data.title} - ${data.description}. Plateforme: ${data.platform}.`
//       })
//     } catch (error) {
//       console.error(error.message)
//     }
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           paddingHorizontal: 10,
//           paddingTop: StatusBar.currentHeight || 0
//         }}
//       >
//         <Text style={{ flex: 1, fontSize: 16, color: 'white', textAlign: 'center', marginRight: 10 }}>Welcome!</Text>
//         <TouchableOpacity
//           style={{
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             width: 50,
//             height: 50,
//             borderRadius: 25,
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}
//           onPress={openWebsite}
//         >
//           <Ionicons name="share-social" size={24} color="white" />
//         </TouchableOpacity>
//       </View>

//       <View style={{ flex: 1, padding: 20 }}>
//         <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>{data.title}</Text>
//         <TouchableOpacity
//           onPress={openWebsite}
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10, borderRadius: 5, marginTop: 10 }}
//         >
//           <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Visit Website</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={shareData}
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10, borderRadius: 5, marginTop: 10 }}
//         >
//           <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Share</Text>
//         </TouchableOpacity>
//         {/* Display your UI components here using gameData */}
//         {/* For example, an image */}
//         {gameData && <Image source={{ uri: gameData.imageURL }} style={{ width: 200, height: 200 }} />}
//       </View>
//     </View>
//   )
// }

// export default DetailsScreen
