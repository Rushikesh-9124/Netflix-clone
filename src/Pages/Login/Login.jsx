import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { IoLanguage } from "react-icons/io5";
import {login, signUp} from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'


const Login = () => {

  const [signState, setSignState] = useState("Sign In");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const userAuth = async(e) => {
    e.preventDefault();
    setLoading(true)
    if(signState === "Sign In"){
      await login(email, password);
    }
    else {
      await signUp(name, email, password)
    }
    setLoading(false);
  }


  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <div className="netflix">
        <img src={logo} alt=""  className='login-logo'/>
        <div className='btns'>
          
          <select name="" id="">
            <option value="English"> English</option>
            <option value="Telugu">Telugu</option>
          </select>
          {signState === "Sign Up" ? <button onClick={() => setSignState("Sign In")}>Sign In</button> : <></>}
          {signState === "Sign In" ? <button onClick={() => setSignState("Sign Up")}>Sign Up</button> : <></>}
        </div>
      </div>
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState === "Sign Up" ? <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" id="" placeholder='Your name'/> : <></>}
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="" id="" placeholder='Email'/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" id="" placeholder='password'/>
          <button onClick={userAuth} type='submit' className='user-btn'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          
          {signState === "Sign In" ? <p>New to Netflix?<span onClick={() => setSignState("Sign Up")}> Sign Up Now</span></p> : <></>}
          {signState === "Sign Up" ? <p>already have an account?<span onClick={() => setSignState("Sign In")}> Sign In Now</span></p> : <></>}
        </div>
      </div>
    </div>
  )
}

export default Login
