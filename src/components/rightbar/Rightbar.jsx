import "./rightbar.css"
import Online from "../online/Online"
import {Users} from "../../userData"
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightWrapper">
        <div className="bdayContainer">
          <img className="bdayImg" src="assets/bday.png" alt=""/>
          <span className="bdayTxt"> <b>John Paul</b> and 2 friends have their birthday today.</span>
        </div>
        <h4 className="rbarTitle">Friends Online</h4>
        <ul className="FriendList">
          {Users.map(u=>(<Online key={u.id} user={u} />))}
          
        </ul>
      </div>
    </div>
  )
};
