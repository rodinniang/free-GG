import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { getAllGame, getGamesByCategory } from '../services/api/games/requests'
import { Game } from '../services/api/games/types'

const platforms = ['PC (Windows)', 'Web Browser', 'all']

export default function Parametre() {
  const [categoriesWithGames, setCategoriesWithGames] = useState<Record<string, Game[]>>({})
  const [selectedPlatform, setSelectedPlatform] = useState('')
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function fetchGames() {
      const games = await getAllGame()
      setCategoriesWithGames({ all: games })

      for (const platform of platforms) {
        const gamesInPlatform = await getGamesByCategory(platform)
        setCategoriesWithGames((prevCategories) => ({
          ...prevCategories,
          [platform]: gamesInPlatform
        }))
      }
    }

    fetchGames()
  }, [])

  const handlePlatformPress = (platform: string) => {
    setSelectedPlatform(platform)
    setSelectedGame(null)
  }

  const handleGamePress = (game: Game) => {
    setSelectedGame(game)
  }

  const handleBackButtonPress = () => {
    setSelectedGame(null)
    setSearchTerm('')
  }

  const handleSearch = () => {
    const foundGame = categoriesWithGames.all?.find((game) =>
      (game.title as string).toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (foundGame) {
      handleGamePress(foundGame)
    } else {
      alert('Jeu non trouvé. Veuillez essayer avec un autre terme.')
    }
  }

  const renderGames = () => {
    let gamesToRender: Game[] = []

    if (selectedPlatform === 'PC (Windows)') {
      gamesToRender = categoriesWithGames.pc || []
    } else if (selectedPlatform === 'Web Browser') {
      gamesToRender = categoriesWithGames.browser || []
    } else {
      gamesToRender = selectedPlatform ? categoriesWithGames[selectedPlatform] || [] : categoriesWithGames.all || []
    }

    return gamesToRender.map((game, index) => (
      <TouchableOpacity key={index} onPress={() => handleGamePress(game)}>
        <View style={styles.gameDetailsContainer}>
          <Text style={styles.gameTitle}>{game.title}</Text>
          <Image source={{ uri: game.thumbnail }} style={styles.thumbnail} />
          {selectedGame && selectedGame.title === game.title && (
            <View style={styles.gameDetailsContainer}>
              <Text style={styles.gameDetailsTitle}>{`Détails du jeu : ${game.title}`}</Text>
              <Text>{`Genre: ${game.genre}`}</Text>
              <Text>{`Plateforme: ${game.platform}`}</Text>
              <Text>{`Date de sortie: ${game.release_date}`}</Text>
              <Text style={{ color: '#1061DE' }}>{`Petite description: ${game.short_description}`}</Text>
              <Text style={{ color: '#1061DE' }}>{`description: ${game.id}`}</Text>
              <Text style={{ color: '#1061DE' }}>{`Freetogame Profile URL: ${game.freetogame_profile_url}`}</Text>
              <Text style={{ color: '#1061DE' }}>{`game_URL: ${game.game_url}`}</Text>
              <Button title="Retour" onPress={handleBackButtonPress} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    ))
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.header}>Liste des plateformes</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher un jeu..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <Button title="Rechercher" onPress={handleSearch} />

      <View style={styles.platformContainer}>
        {platforms.map((platform, index) => (
          <TouchableOpacity key={index} onPress={() => handlePlatformPress(platform)}>
            <Text style={selectedPlatform === platform ? styles.selectedPlatform : styles.platform}>{platform}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {renderGames()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  platformContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20
  },
  platform: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  selectedPlatform: {
    padding: 10,
    margin: 5,
    backgroundColor: '#1061DE',
    color: '#fff',
    borderRadius: 5
  },
  gameContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5
  },
  thumbnail: {
    width: 300,
    height: 300
  },
  gameDetailsContainer: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  gameDetailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
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
