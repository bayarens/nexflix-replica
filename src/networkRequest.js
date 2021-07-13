import dotenv from 'dotenv'
dotenv.config()
const API_KEY = process.env.REACT_APP_TMDB_KEY;
console.log(API_KEY)
const BASE_URL = 'https://api.themoviedb.org/3'
const endPoints = {
    popularM: '/movie/popular',
    popularTV: '/tv/popular',
    topRatedM: '/movie/top_rated',
    topRatedTV: '/tv/top_rated',
    nowPlayingM: '/movie/now_playing',
    nowPlayingTV: '/tv/on_the_air',
    airingToday: '/tv/airing_today',
    search: '/search/multi',
    movieGenres: '/genre/movie/list',
    tvGenres: '/genre/tv/list',
    movieDiscover: '/discover/movie',
    tvDiscover: '/discover/tv'
}


export const popularMovie = async () => {
    const response = await fetch(`${BASE_URL}${endPoints.popularM}?api_key=${API_KEY}`)
    return response.json()
}

export const popularTV = async () => {
    const response = await fetch(`${BASE_URL}${endPoints.popularTV}?api_key=${API_KEY}`)
    return response.json()
}

export const topRatedMovie = async () => {
    const response = await fetch(`${BASE_URL}${endPoints.topRatedM}?api_key=${API_KEY}`)
    return response.json()
}

export const topRatedTV = async () => {
    const response = await fetch(`${BASE_URL}${endPoints.topRatedTV}?api_key=${API_KEY}`)
    console.log(response)
    return response.json()
}

export const nowPlayingMovie = async () => {
    const response = await fetch(`${BASE_URL}${endPoints.nowPlayingM}?api_key=${API_KEY}`)
    return response.json()
}

export const nowPlayingTV = async () => {
    const response = await fetch(`${BASE_URL}${endPoints.nowPlayingTV}?api_key=${API_KEY}`)
    return response.json()
}

export const airingToday = async () => {
    const response = await fetch(`${BASE_URL}${endPoints.airingToday}?api_key=${API_KEY}`)
    return response.json()
}

export const searchAPI = async (query) => {
    const response = await fetch(`${BASE_URL}${endPoints.search}?api_key=${API_KEY}&query=${query}`)
    return response.json()
}

export const movieGenres = async () => {
    const response = await fetch(`${BASE_URL}${endPoints.movieGenres}?api_key=${API_KEY}`)
    return response.json()
}

export const tvGenres = async () => {
    const response = await fetch(`${BASE_URL}${endPoints.tvGenres}?api_key=${API_KEY}`)
    return response.json()
}

export const movieDiscover = async (genreID) => {
    const response = await fetch(`${BASE_URL}${endPoints.movieDiscover}?api_key=${API_KEY}&with_genres=${genreID}`)
    return response.json()
}

export const tvDiscover = async (genreID) => {
    const response = await fetch(`${BASE_URL}${endPoints.tvDiscover}?api_key=${API_KEY}&with_genres=${genreID}`)
    return response.json()
}

