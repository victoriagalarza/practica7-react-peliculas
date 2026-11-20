import { Link } from 'react-router-dom'
import { getMovieImg } from '../utils/getMovieImg.js'
import './MovieCard.css'

function MovieCard({ title, posterPath, movieId }) {
  const imageUrl = getMovieImg(posterPath)

  return (
    <li className="movie-card">
      <Link to={`/movies/${movieId}`}>
        <img
          className="movie-image"
          src={imageUrl}
          alt={title}
          width={230}
          height={345}
        />
        <h2>{title}</h2>
      </Link>
    </li>
  )
}

export default MovieCard
