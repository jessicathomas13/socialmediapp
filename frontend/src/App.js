import Homepage from "./pages/home/Homepage";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
          
        <Route path="/login" element={<Login/>}/>
          
        <Route path="/register" element={<Register/>}/>
          
        <Route path="/profile/:username" element={<Profile/>}/>

      </Routes>

    </Router>
  );
}

export default App;