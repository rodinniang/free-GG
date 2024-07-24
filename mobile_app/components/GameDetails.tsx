// import React from 'react'
// import { View, Text, Image, ScrollView, Button, GestureResponderEvent } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
// import { Game } from '../services/api/games/types'

// type GameDetailsProps = {
//   game: Game
// }

// const GameDetails: React.FC<GameDetailsProps> = ({ game }) => {
//   const navigation = useNavigation()

//   function onBack(event: GestureResponderEvent): void {
//     throw new Error('Function not implemented.')
//   }

//   return (
//     <ScrollView>
//       <Image source={{ uri: game.thumbnail }} style={{ width: 200, height: 200 }} />
//       <Text>Title: {game.title}</Text>
//       <Text style={{ color: '#1061DE' }}> Description : {game.description}</Text>
//       <Text style={{ color: '#1061DE' }}> Petite description: {game.short_description}</Text>
//       {/* <Text style={{ color: '#1061DE' }}> id : {game.Id}</Text> */}
//       <Text style={{ color: '#1061DE' }}> genre : {game.genre}</Text>
//       {/* <Text style={{ color: '#1061DE' }}> nom : {game.Name}</Text> */}
//       {/* <Text style={{ color: '#1061DE' }}> status : {game.status}</Text> */}
//       <Text style={{ color: '#1061DE' }}> game_url : {game.game_url}</Text>
//       <Text style={{ color: '#1061DE' }}> platform : {game.platform}</Text>
//       <Text style={{ color: '#1061DE' }}> publisher : {game.publisher}</Text>
//       <Text style={{ color: '#1061DE' }}> developer : {game.developer}</Text>
//       <Text style={{ color: '#1061DE' }}> date de sortie : {game.release_date}</Text>
//       <Text style={{ color: '#1061DE' }}> freetogame_profile_url : {game.freetogame_profile_url}</Text>
//       {/* <Text style={{ color: '#1061DE' }}> minimum_system_requirements : {game.minimum_system_requirements}</Text>
//       <Text style={{ color: '#1061DE' }}> os : {game.os}</Text>
//       <Text style={{ color: '#1061DE' }}> processor : {game.processor}</Text>
//       <Text style={{ color: '#1061DE' }}> memory : {game.memory}</Text>
//       <Text style={{ color: '#1061DE' }}> graphics : {game.graphics}</Text>
//       <Text style={{ color: '#1061DE' }}> storage : {game.storage}</Text>
//       <Text style={{ color: '#1061DE' }}> screenshots : {game.screenshots}</Text> */}
//       <Button title="Retour" onPress={onBack} />
//       {/* <Button title="Retour" onPress={() => navigation.goBack()} /> */}
//     </ScrollView>
//   )
// }

// export default GameDetails
// import React from 'react'
// import { View, Text, Image, ScrollView, Button } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
// import { Game } from '../services/api/games/types'

// type GameDetailsProps = {
//   game: Game // Assurez-vous d'avoir une interface ou un type Game approprié
// }

// const GameDetails: React.FC<GameDetailsProps> = ({ game }) => {
//   const navigation = useNavigation()

//   return (
//     <ScrollView>
//       <Image source={{ uri: game.thumbnail }} style={{ width: 200, height: 200 }} />
//       <Text>Title: {game.title}</Text>
//       <Text>Description: {game.description}</Text>
//       {/* Autres informations essentielles du jeu */}
//       <Button title="Retour" onPress={() => navigation.goBack()} />
//     </ScrollView>
//   )
// }

// export default GameDetails
