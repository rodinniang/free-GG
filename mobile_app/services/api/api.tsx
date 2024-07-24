import axios from 'axios'

export const api = axios.create({ baseURL: 'https://www.freetogame.com/api' })

// export const api = axios.create({ baseURL: 'https://www.freetogame.com/api/games?platform=pc' })

// export const api = axios.create({ baseURL: 'https://www.freetogame.com/api/games?category=shooter' })

// export const api = axios.create({ baseURL: 'https://www.freetogame.com/api/games?sort-by=alphabetical' })

// export const api = axios.create({ baseURL: 'https://www.freetogame.com/api/games?platform=browser&category=mmorpg&sort-by=release-date' })

// export const api = axios.create({ baseURL: 'https://www.freetogame.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc' })

// export const api = axios.create({ baseURL: 'https://www.freetogame.com/api/game?id=452' })
