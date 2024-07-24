import { ReactNode } from 'react'
import { Image } from 'react-native'

export type Game = {
  Title: string
  detail: string
  getGamesByCategory: string
  error: unknown
  gameDetailsTitle: string
  description: ReactNode
  thumbnail: string | undefined
  title: ReactNode
  id: string
  Name: string
  short_description: string
  genre: string
  Image: string
  status: string
  game_url: string
  platform: string
  publisher: string
  developer: string
  release_date: number
  freetogame_profile_url: string
  minimum_system_requirements: string
  os: string
  processor: string
  memory: string
  graphics: string
  storage: string
  screenshots: string
  toLowerCase: Number
}
