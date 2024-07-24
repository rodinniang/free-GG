import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput } from 'react-native'
import Card from '../components/Card'
import { getAllGame, getGameDetails } from '../services/api/games/requests'
import { Game } from '../services/api/games/types'

export default function Home() {
  const [displayCard, setDisplayCard] = useState(false)
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)
  const [games, setGames] = useState<Game[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getAllGame()
        // Limiter à seulement dix jeux
        setGames(data.slice(0, 10))
      } catch (error) {
        console.error('Error fetching games: ' + (error instanceof Error ? error.message : 'Unknown error'))
      }
    }

    fetchGames()
  }, [])

  const handleGameDetails = (game: Game) => {
    setSelectedGame(game)
    setDisplayCard(true)
  }

  const handleBackToHome = () => {
    setSelectedGame(null)
    setDisplayCard(false)
  }

  const handleSearch = () => {
    const foundGame = games.find(
      (game) => game.title ?? 'defaultTitle'.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (foundGame) {
      handleGameDetails(foundGame)
    } else {
      alert('Jeu non trouvé. Veuillez essayer avec un autre terme.')
    }
  }

  const RenderGameDetails = ({ game }: { game: Game }) => {
    const [data, setData] = useState<Game>()
    useEffect(() => {
      getGameDetails(game.id).then((data) => setData(data))
    }, [])
    return (
      data && (
        <View>
          <Card title={`Détails du jeu : ${data.title}`} />
          <Image source={{ uri: data.thumbnail }} style={{ width: 350, height: 400, padding: 15, margin: 15 }} />
          <Text style={{ color: '#1061DE' }}> Description : {data.description}</Text>
          <Text style={{ color: '#1061DE' }}> Petite description: {data.short_description}</Text>
          <Text style={{ color: '#1061DE' }}> genre : {data.genre}</Text>
          <Text style={{ color: '#1061DE' }}> id : {data.id}</Text>
          <Text style={{ color: '#1061DE' }}> game_url : {data.game_url}</Text>
          <Text style={{ color: '#1061DE' }}> platform : {data.platform}</Text>
          <Text style={{ color: '#1061DE' }}> publisher : {data.publisher}</Text>
          <Text style={{ color: '#1061DE' }}> developer : {data.developer}</Text>
          <Text style={{ color: '#1061DE' }}> date de sortie : {data.release_date}</Text>
          <Text style={{ color: '#1061DE' }}> freetogame_profile_url : {data.freetogame_profile_url}</Text>
          <Button title="Retour à la liste" onPress={handleBackToHome} />
        </View>
      )
    )
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
      {displayCard ? (
        selectedGame ? (
          <RenderGameDetails game={selectedGame} />
        ) : (
          <Button title="Retour à la liste" onPress={handleBackToHome} />
        )
      ) : (
        <>
          <Text>Home</Text>

          <TextInput
            style={[styles.searchInput, { justifyContent: 'center', alignItems: 'center' }]}
            placeholder="Rechercher un jeu..."
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <Button title="Rechercher" onPress={handleSearch} />

          {games.map((game, index) => (
            <View key={index}>
              <Text>{game.title}</Text>
              <Image
                source={{ uri: game.thumbnail }}
                style={{
                  width: 260,
                  height: 260,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 15,
                  margin: 15
                }}
              />
              <Text style={{ color: '#1061DE' }}> petite description : {game.short_description}</Text>
              <Button title="Voir les détails" onPress={() => handleGameDetails(game)} />
            </View>
          ))}
        </>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%'
  }
})

// import React, { useEffect, useState } from 'react'
// import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native'
// import Card from '../components/Card'
// import { getAllGame } from '../services/api/games/requests'
// import { Game } from '../services/api/games/types'
// import { NavigationContainer } from '@react-navigation/native'

// export default function Home() {
//   const [displayCard, setDisplayCard] = useState(false)
//   const [selectedGame, setSelectedGame] = useState<Game | null>(null)
//   const [games, setGames] = useState<Game[]>([])

//   useEffect(() => {
//     const fetchGames = async () => {
//       try {
//         const data = await getAllGame()
//         setGames(data)
//       } catch (error) {
//         console.error('Error fetching games by game: ' + (error instanceof Error ? error.message : 'Unknown error'))
//       }
//     }

//     fetchGames()
//   }, [])

//   const firstTenGames = games.slice(0, 10)
//   const SelectedGame = games.length > 0 ? games[0] : null

//   const handleGameDetails = (game: Game) => {
//     setSelectedGame(game)
//     setDisplayCard(true)
//     // Navigator.navigate('Details', { game })
//   }

//   const handleBackToHome = () => {
//     setSelectedGame(null)
//     setDisplayCard(false)
//   }

//   const renderGameDetails = (game: Game) => (
//     <>
//       <Card title={`Détails du jeu : ${game.title}`} />
//       <Image source={{ uri: game.thumbnail }} style={{ width: 260, height: 260 }} />
//       <Text style={{ color: '#1061DE' }}> Description : {game.description}</Text>
//       <Text style={{ color: '#1061DE' }}> Petite description: {game.short_description}</Text>
//       {/* <Text style={{ color: '#1061DE' }}> id : {game.Id}</Text> */}
//       <Text style={{ color: '#1061DE' }}> genre : {game.genre}</Text>

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

//       <Button title="Retour à la liste" onPress={handleBackToHome} />
//     </>
//   )

//   return (
//     <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'center', alignContent: 'center' }}>
//       {displayCard ? (
//         selectedGame ? (
//           renderGameDetails(selectedGame)
//         ) : (
//           <Button title="Retour à la liste" onPress={handleBackToHome} />
//         )
//       ) : (
//         <>
//           <Text>details</Text>

//           {firstTenGames.map((game, index) => (
//             <View key={index}>
//               <Text>{game.title}</Text>
//               <Image source={{ uri: game.thumbnail }} style={{ width: 260, height: 260 }} />
//               <Text style={{ color: '#1061DE' }}> petite description : {game.short_description}</Text>
//               <Button title="Voir les détails" onPress={() => handleGameDetails(game)} />
//             </View>
//           ))}
//         </>
//       )}
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   }
// })
