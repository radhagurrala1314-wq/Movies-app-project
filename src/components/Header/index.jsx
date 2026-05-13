import Cookies from 'js-cookie'
import {useNavigate, Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  const navigate = useNavigate()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login', {replace: true})
  }

  return (
    <div className="home_container">
      <nav className="nav_links">

        <div className="logo_section">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.xGODOGRV6qSXnzonv6laxwHaEc?pid=Api&P=0&h=180"
            alt="Movie_Hub"
            height="80"
            width="130"
            className="image"
          />
        </div>

        <ul className="unoder_links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/movies">Movies</Link>
          </li>

          <li>
            <Link to="/shows">Shows</Link>
          </li>

          <li>
            <Link to="/trend">TrendingMovie</Link>
          </li>
        </ul>

        <button className="signout" onClick={onClickLogout}>
          Sign out
        </button>

      </nav>
    </div>
  )
}

export default Header