import {useState, useEffect} from 'react'
import MovieListCard from '../MovieListCard'
import DotLoader from 'react-spinners/DotLoader'
import './index.css'

const AllMoviesSection = () => {
  const [moviesList, setMoviesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getMoviesDetails = async () => {
      const apiUrl =
        'https://www.omdbapi.com/?apikey=de6094d9&s=batman'

      const response = await fetch(apiUrl)
      const fetchedData = await response.json()

      if (fetchedData.Search) {
        const formattedData = fetchedData.Search.map(eachMovie => ({
          id: eachMovie.imdbID,
          title: eachMovie.Title,
          year: eachMovie.Year,
          imageUrl: eachMovie.Poster,
          type: eachMovie.Type,
        }))

        setMoviesList(formattedData)
        setIsLoading(false)
      }
    }

    getMoviesDetails()
  }, [])

  if (isLoading) {
    return (
      <div className="loader-container">
        <DotLoader color='#f6f906' />
      </div>
    )
  }

  return (
    <div className="all-movies-container">
      <h1 className="movies-list-heading">All Movies</h1>

      <ul className="movies-list-container">
        {moviesList.map(movie => (
          <MovieListCard
            movieData={movie}
            key={movie.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default AllMoviesSection
