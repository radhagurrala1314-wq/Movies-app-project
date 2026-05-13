import './index.css'

const MovieListCard = props => {
  const {movieData} = props
  const {title, year, imageUrl, type} = movieData

  return (
    <li className="movie-list-card">
      <img
        src={imageUrl}
        alt={title}
        className="movie-list-image"
      />

      <h1 className="movie-list-title">{title}</h1>

      <p className="movie-list-text">{year}</p>

      <p className="movie-list-text">{type}</p>
    </li>
  )
}

export default MovieListCard