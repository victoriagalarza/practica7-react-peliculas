import { useEffect, useState } from 'react'
import { get } from '../services/httpClient.js'
import MovieCard from './MovieCard.jsx'
import './MovieGrid.css'

function MovieGrid() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    get('/discover/movie')
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error al cargar películas:', error))
  }, [])

  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movieId={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
        />
      ))}
    </ul>
  )
}

export default MovieGrid
