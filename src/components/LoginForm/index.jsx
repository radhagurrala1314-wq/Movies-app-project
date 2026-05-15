import {useState} from "react"
import {useNavigate, Navigate} from "react-router"
import Cookies from "js-cookie"
import "./index.css"

const LoginForm = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()

    if (username.trim() !== "" && password.trim() !== "") {
      Cookies.set("jwt_token", "dummy_token", {
        expires: 30,
      })

      navigate("/", {replace: true})
    } else {
      setShowSubmitError(true)
      setErrorMsg("Enter username and password")
    }
  }

  const jwtToken = Cookies.get("jwt_token")

  if (jwtToken !== undefined) {
    return <Navigate to="/" />
  }

  return (
    <>
      <div className="moviehub_card">
        <div>
          <img
            src="https://pbs.twimg.com/profile_images/1109524076203311104/15BVfOv2_400x400.jpg"
            alt="moviehub_image"
            className="moviehub_img"
          />
        </div>

        <form className="form_card" onSubmit={onSubmitForm}>
          <h1 className="form_head">
            Enter Your Info into Sign In
          </h1>

          <p className="form_para">
            Or get started with new account.
          </p>

          <input
            type="text"
            placeholder="Username"
            className="email_card"
            value={username}
            onChange={onChangeUsername}
          />

          <br />

          <input
            type="password"
            placeholder="Password"
            className="password_card"
            value={password}
            onChange={onChangePassword}
          />

          <br />

          <button
            type="submit"
            className="signin_button"
          >
            Sign In
          </button>

          {showSubmitError && (
            <p className="error_msg">
              {errorMsg}
            </p>
          )}
        </form>
      </div>

      <footer className="footer_container">
        <p className="foot_para">
          Questions? Call 000-800-1743 (Toll Free)
        </p>

        <nav className="foot_card">
          <ul className="login_order">
            <li>FAQ</li>
            <li>Cookie Preferences</li>
          </ul>

          <ul className="login_order">
            <li>Help Center</li>
            <li>Corporate Information</li>
          </ul>

          <ul className="login_order">
            <li>Terms of Use</li>
            <li>Privacy</li>
          </ul>
        </nav>
      </footer>
    </>
  )
}

export default LoginForm