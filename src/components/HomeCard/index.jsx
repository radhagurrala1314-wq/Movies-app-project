import './index.css'

const HomeCard = props => {
  const {movieDetails} = props
  const {imageUrl, title, duration, genre} = movieDetails

  return (
    <div className="home-movie-card">
      <img
        src={imageUrl}
        alt={title}
        className="home-movie-image"
      />

      <div className="home-hover-card">
        <img
          src={imageUrl}
          alt={title}
          className="home-hover-image"
        />

        <div className="home-content">
          <h3 className="home-title">{title}</h3>

          <div className="home-movie-info">
            <span className="home-age">U/A 13+</span>

            <span>{duration}</span>

            <span className="home-hd">HD</span>
          </div>

          <p className="home-genres">{genre}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeCard