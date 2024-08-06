import axios from "axios";
import "./register.css"
import {useRef} from "react";
import {useNavigate} from "react-router"

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordagain = useRef();
  const history = useNavigate();
  let navigate = useNavigate(); 
  
  const routeChange = () =>{ 
    let path = `/login`; 
    navigate(path);
  }

  const handleClick = async (e)=>{
    e.preventDefault()
    if(passwordagain.current.value !== password.current.value){
      passwordagain.current.setCustomValidity("Passwords do not match!")
    }else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try{
        await axios.post("/auth/register", user)
        navigate("/login");
      }
      catch(error){
        console.log(error)
      }
    }
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Social Network</h3>
            <span className="loginDesc">
                Connect with friends and family on MySpace.
            </span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Username" required ref={username} className="loginInput" />
                <input placeholder="Email address" type="email" required ref={email} className="loginInput" />
                <input placeholder="Password" type="password" minLength="8" required ref={password} className="loginInput" />
                <input placeholder="Re-enter Password" type="password" required ref={passwordagain} className="loginInput" />
                <button className="loginButton" type="submit">Sign Up</button>
                <button className="loginRegisterButton" onClick={routeChange}>Log into Account</button>
            </form>
        </div>
      </div>
    </div>
  )
};
