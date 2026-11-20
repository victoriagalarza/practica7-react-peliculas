const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

export function getMovieImg(path, width = 300) {
  return path ? `${IMAGE_BASE_URL}/w${width}${path}` : null
}
