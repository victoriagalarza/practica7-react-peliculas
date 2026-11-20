import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { get } from '../services/httpClient.js'
import { getMovieImg } from '../utils/getMovieImg.js'
import './MovieDetails.css'

function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    get(`/movie/${movieId}`)
      .then((data) => setMovie(data))
      .catch((error) => console.error('Error al cargar la película:', error))
  }, [movieId])

  // Mientras no haya datos (o sean de otra película) se muestra el mensaje de carga
  if (!movie || String(movie.id) !== movieId) {
    return <p>Cargando información...</p>
  }

  const imageUrl = getMovieImg(movie.poster_path, 500)
  const genres = movie.genres?.map((g) => g.name).join(', ')

  return (
    <>
      <Link to="/" className="backLink">
        ← Regresar a la página principal
      </Link>

      <div className="detailsContainer">
        <img className="movieImage" src={imageUrl} alt={movie.title} />

        <div className="movieDetails">
          <h2>{movie.title}</h2>
          <p>
            <strong>Géneros:</strong> {genres || 'Sin géneros'}
          </p>
          <p>
            <strong>Descripción:</strong>{' '}
            {movie.overview || 'Sin descripción disponible'}
          </p>
        </div>
      </div>
    </>
  )
}

export default MovieDetails
