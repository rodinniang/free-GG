import React, { useEffect, useState, useMemo } from 'react'
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import Card from '../components/Card'
import { getAllGame, getGamesByCategory, getGameDetails } from '../services/api/games/requests'
import { Game } from '../services/api/games/types'
// import getGameDetails from '../services/api/games/requests'
;<link rel="stylessheet" href="categoriesstyle.css" />

const categories = [
  'mmorpg',
  'shooter',
  'strategy',
  'moba',
  'racing',
  'sports',
  'social',
  'sandbox',
  'open-world',
  'survival',
  'pvp',
  'pve',
  'pixel',
  'voxel',
  'zombie',
  'turn-based',
  'first-person',
  'third-Person',
  'top-down',
  'tank',
  'space',
  'sailing',
  'side-scroller',
  'superhero',
  'permadeath',
  'card',
  'battle-royale',
  'mmo',
  'mmofps',
  'mmotps',
  '3d',
  '2d',
  'anime',
  'fantasy',
  'sci-fi',
  'fighting',
  'action-rpg',
  'action',
  'military',
  'martial-arts',
  'flight',
  'low-spec',
  'tower-defense',
  'horror',
  'mmorts'
]

export default function Categories() {
  const [displayCard, setDisplayCard] = useState(false)
  const [categoriesWithGames, setCategoriesWithGames] = useState<Record<string, Game[]>>({})
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  // const [getGameDetails, setGetGameDetails] = useState('')

  useEffect(() => {
    async function fetchGames() {
      const games = await getAllGame()
      setCategoriesWithGames({ all: games })
      for (const category of categories) {
        const gamesInCategory = await getGamesByCategory(category)
        setCategoriesWithGames((prevCategories) => ({
          ...prevCategories,
          [category]: gamesInCategory
        }))
      }
    }

    fetchGames()
  }, [])

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category)
    setSelectedGame(null) // Réinitialiser le jeu sélectionné lorsque la catégorie change
  }

  const handleGamePress = (game: Game) => {
    setSelectedGame(game)
  }

  const handleBackButtonPress = () => {
    setSelectedGame(null)
    setSearchTerm('')
  }

  const handleSearch = () => {
    // Filtrer les jeux en fonction du terme de recherche
    const foundGame = categoriesWithGames.all?.find((game) =>
      (game.title as string).toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (foundGame) {
      handleGamePress(foundGame)
    } else {
      // Afficher un message si le jeu n'est pas trouvé
      alert('Jeu non trouvé. Veuillez essayer avec un autre terme.')
    }
  }

  const renderGames = () => {
    const gamesToRender = selectedCategory ? categoriesWithGames[selectedCategory] : categoriesWithGames.all

    return gamesToRender?.map((game, index) => (
      <TouchableOpacity key={index} onPress={() => handleGamePress(game)}>
        <View style={styles.gameContainer}>
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

              {/* Bouton Retour ajouté dans la page de détails */}
              <Button title="Retour" onPress={handleBackButtonPress} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    ))
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.header}>Catégories</Text>

      {/* Barre de recherche */}
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher un jeu..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <Button title="Rechercher" onPress={handleSearch} />

      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} onPress={() => handleCategoryPress(category)}>
            <Text style={selectedCategory === category ? styles.selectedCategory : styles.category}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {renderGames()}

      {/* Bouton Retour retiré de la partie principale */}
      {/* {selectedGame && (
        <>
          <Button title="Retour" onPress={handleBackButtonPress} />
        </>
      )} */}
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
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20
  },
  category: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  selectedCategory: {
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

  // Style pour la barre de recherche
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%'
  }
})
