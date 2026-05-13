import Header from '../Header'
import Footer from '../Footer'

import {useEffect, useState} from 'react'
import './index.css'

const TrendingMovie = () => {
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getMovieDetails = async () => {
      const apiUrl ='https://www.omdbapi.com/?i=tt3896198&apikey=4708f483'

      const response = await fetch(apiUrl)

      const data = await response.json()

      console.log(data)

      setMovie(data)
      setIsLoading(false)
    }

    getMovieDetails()
  }, [])

  if (isLoading) {
    return (
      <div className="loader-container">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <>
      <Header />

      <div className="trending_head">
        <h1>Trending & Popular Movie</h1>
      </div>

      <div className="mylist-container">
        <div className="mylist-card">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="mylist-image"
          />

          <div className="mylist-content">
            <h1 className="mylist-title">{movie.Title}</h1>

            <p className="mylist-plot">{movie.Plot}</p>

            <div className="mylist-info">
              <p>
                <span>Year:</span> {movie.Year}
              </p>

              <p>
                <span>Genre:</span> {movie.Genre}
              </p>

              <p>
                <span>Runtime:</span> {movie.Runtime}
              </p>

              <p>
                <span>IMDB Rating:</span> {movie.imdbRating}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default TrendingMovie