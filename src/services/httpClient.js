const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export async function get(path) {
  const separator = path.includes('?') ? '&' : '?'
  const url = `${API_BASE_URL}${path}${separator}api_key=${API_KEY}&language=es-MX`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`)
  }

  return response.json()
}
