import "./login.css"
import {useContext, useRef} from "react";
import {loginCall} from "../../apiCall"
import {Context} from "../../context/Context"
import {CircularProgress} from "@material-ui/core"
import {useNavigate} from "react-router"

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {isFetching,dispatch} = useContext(Context);
  let navigate = useNavigate(); 
  
  const routeChange = () =>{ 
    let path = `/register`; 
    navigate(path);
  }


  const handleClick = (e)=>{
    e.preventDefault()
    loginCall({email:email.current.value,password: password.current.value},dispatch)
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
                <button className="loginButton" type="submit" disabled={isFetching}>
                  {isFetching ? <CircularProgress size="22px"/> : "Log In"}
                </button>
                <span className="loginForgot">Forgot Password</span>

                <button className="loginRegisterButton" onClick={routeChange}>{isFetching ? <CircularProgress size="22px"/> : "Create an account"}</button>
                
            </form>
        </div>
      </div>
    </div>
  )
};
