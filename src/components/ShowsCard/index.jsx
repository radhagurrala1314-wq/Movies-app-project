import './index.css'

const ShowsCard = props => {
  const {movieDetails} = props
  const {imageUrl, title, duration} = movieDetails

  return (
    <div className="shows-card">
      <img
        src={imageUrl}
        alt={title}
        className="shows-image"
      />

      <div className="content">
        <h3 className="title">{title}</h3>

        <div className="movie-info">
          <span className="age">U/A 13+</span>
          <span>{duration}</span>
          <span className="hd">HD</span>
        </div>
      </div>
    </div>
  )
}

export default ShowsCard