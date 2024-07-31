import "./login.css"
import {useRef} from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const handleClick = (e)=>{
    e.preventDefault()
    console.log("clicked")
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">MySpace</h3>
            <span className="loginDesc">
                Connect with friends and family on MySpace.
            </span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Email address" type="email" required className="loginInput" ref={email}/>
                <input placeholder="Password" type="password" required minLength="8" className="loginInput" ref={password}/>
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password</span>
                <button className="loginRegisterButton">Create an account</button>
            </form>
        </div>
      </div>
    </div>
  )
};
