import { useContext } from "react";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { Context } from "./context/Context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

function App() {

  const {user} = useContext(Context)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Homepage/> : <Login/>}/>
          
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
          
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>
          
        <Route path="/profile/:username" element={<Profile/>}/>

      </Routes>

    </Router>
  );
}

export default App;