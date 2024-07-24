import { api } from '../api'
import { Game } from '../games/types'
import axios from 'axios'

export const getAllGame = async () => {
  try {
    const response = await api.get('/games')
    return response.data
  } catch (error) {
    throw new Error('Error fetching games by category: ' + (error instanceof Error ? error.message : 'Unknown error'))
  }
}

export const getGameDetails = async (gameId: string): Promise<Game> => {
  try {
    const response = await api.get(`/game?id=${gameId}`)
    return response.data as Game
  } catch (error) {
    throw new Error('Error fetching games by category: ' + (error instanceof Error ? error.message : 'Unknown error'))
  }
}

export const getGamesByCategory = async (category: string): Promise<Game[]> => {
  try {
    const response = await api.get(`/games?category=${category}`)
    return response.data as Game[]
  } catch (error) {
    throw new Error('Error fetching games by category: ' + (error instanceof Error ? error.message : 'Unknown error'))
  }
}
// export const getAllGamesByPlatform = async (platform: string): Promise<Game[]> => {
//   try {
//     const response = await api.get(`/games?platform=${platform}`)
//     return response.data as Game[]
//   } catch (error) {
//     throw new Error('Error fetching games by platform: ' + error.message)
//   }
// }

// export const getAllGamesByCategory = async (category: string): Promise<Game[]> => {
//   try {
//     const response = await api.get(`/games?category=${category}`)
//     return response.data as Game[]
//   } catch (error) {
//     throw new Error('Error fetching games by category: ' + error.message)
//   }
// }

// export const getAllGamesSorted = async (sortBy: string): Promise<Game[]> => {
//   try {
//     const response = await api.get(`/games?sort-by=${sortBy}`)
//     return response.data as Game[]
//   } catch (error) {
//     throw new Error('Error fetching sorted games: ' + error.message)
//   }
// }

// export const getAllGamesByPlatformCategorySorted = async (
//   platform: string,
//   category: string,
//   sortBy: string
// ): Promise<Game[]> => {
//   try {
//     const response = await api.get(`/games?platform=${platform}&category=${category}&sort-by=${sortBy}`)
//     return response.data as Game[]
//   } catch (error) {
//     throw new Error('Error fetching games by platform, category, and sorted: ' + error.message)
//   }
// }

// export const filterGamesByTags = async (tags: string[], platform?: string, sort?: string): Promise<Game[]> => {
//   try {
//     const tagString = tags.join('.')
//     const url = `/filter?tag=${tagString}${platform ? `&platform=${platform}` : ''}${sort ? `&sort=${sort}` : ''}`
//     const response = await api.get(url)
//     return response.data as Game[]
//   } catch (error) {
//     throw new Error('Error filtering games by tags: ' + error.message)
//   }
// }
