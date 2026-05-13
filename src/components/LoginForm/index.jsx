import { useState } from "react"
import {useNavigate, Navigate} from 'react-router'
import Cookies from 'js-cookie'
import './index.css'
const LoginForm = () => {
   const navigate = useNavigate()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [showSubmitError, setShowSubmitError] = useState(false)
   const [errorMsg, setErrorMsg] = useState('')
   
   const onChangeEmail = event => {
      setEmail(event.target.value)
   }
   const onChangePassword = event => {
      setPassword(event.target.value)
   }
   const onSubmitSucess = jwtToken =>{
       Cookies.set('jwt_token',jwtToken,{expires:30})
      navigate("/", {replace:true})
   }
   const onSubmitFailure = errorMsg => {
       setShowSubmitError(true)
       setErrorMsg(errorMsg)
   }

   const onSubmitForm =async event => {
      event.preventDefault()
      const userDetails = { 
         username: email.trim(),
         password: password.trim(),
      }
      const url = 'https://dummyjson.com/auth/login'

   const options = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
   }
      const response = await fetch (url,options)
      const data =  await response.json()
      console.log(data.token)
      if (response.ok === true) {
   onSubmitSucess(data.token)
} else {
   onSubmitFailure(data.message)
}
   }
   const jwtToken = Cookies.get('jwt_token')
   if(jwtToken !== undefined){
      return <Navigate to="/" />
   }
   return (
    <>
     <div className="moviehub_card">
      <div>
      <img src="https://pbs.twimg.com/profile_images/1109524076203311104/15BVfOv2_400x400.jpg"
      alt="moviehub_image"
      className="moviehub_img"
       />
    </div>
      <form className="form_card" onSubmit={onSubmitForm}>
    <h1 className="form_head">Enter Your Info into Sign in</h1> 
    <p className="form_para">Or get started with new account.</p>

    
    <input 
    type="text"
    className="email_card"
    placeholder="Email"
    value={email}
    onChange={onChangeEmail}
    />
    <br />
    
    <input 
    type="password"
    className="password_card"
    placeholder="Password"
    value={password}
    onChange={onChangePassword}
    />
    <br />
    <button type="submit" className="signin_button">Sign In</button>
    {showSubmitError && <p>{errorMsg}</p>}

     </form>
     </div>
    <footer className="footer_container">
      <p className="foot_para">Quetions? Call 000-800-1743(Toll_Free)</p>
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