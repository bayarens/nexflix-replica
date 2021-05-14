const ACCESS_KEY = 'placeholder'
const BASE_URL = 'https://api.themoviedb.org/3'
const endPoints = {
    popular: '/movie/popular'
}

export const popularMovie = async () => {
    const response = await fetch(`${BASE_URL}${endPoints.popular}?api_key=${ACCESS_KEY}`)
    return response.json()
}