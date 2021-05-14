import dotenv from 'dotenv'
dotenv.config()
const API_KEY = process.env.REACT_APP_TMDB_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const endPoints = {
    popular: '/movie/popular'
}

export const popularMovie = async () => {
    const response = await fetch(`${BASE_URL}${endPoints.popular}?api_key=${API_KEY}`)
    return response.json()
}