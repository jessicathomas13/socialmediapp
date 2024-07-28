import "./rightbar.css"
import Online from "../online/Online"
import {Users} from "../../userData"
export default function Rightbar({profile}) {

  const HomeRightBar = () => {
    return(
      <>
      <div className="bdayContainer">
          <img className="bdayImg" src="assets/bday.png" alt=""/>
          <span className="bdayTxt"> <b>John Paul</b> and 2 friends have their birthday today.</span>
        </div>
        <h4 className="rbarTitle">Friends Online</h4>
        <ul className="FriendList">
          {Users.map(u=>(<Online key={u.id} user={u} />))}
          
        </ul>
      </>
    )
  };

  const ProfileRightBar = () => {
    return (
      <>
      <h4 className="rightBarTitle">User Info</h4>
      <div className="rightBarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>

        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Barcelona</span>

        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>

        </div>
      </div>
      <h4 className="rightBarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/profiles/profile2.jpg" alt="" className="rightBarFollowingImg" />
          <span className="rightbarFollowingUsername">katie buchanan</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/profiles/profile3.jpg" alt="" className="rightBarFollowingImg" />
          <span className="rightbarFollowingUsername">john reed</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/profiles/profile4.jpg" alt="" className="rightBarFollowingImg" />
          <span className="rightbarFollowingUsername">alissa may</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/profiles/profile5.jpg" alt="" className="rightBarFollowingImg" />
          <span className="rightbarFollowingUsername">esther chen</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/profiles/profile6.jpg" alt="" className="rightBarFollowingImg" />
          <span className="rightbarFollowingUsername">mitchelll barnes</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/profiles/profile7.jpg" alt="" className="rightBarFollowingImg" />
          <span className="rightbarFollowingUsername">ethan ramon</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/profiles/profile8.jpg" alt="" className="rightBarFollowingImg" />
          <span className="rightbarFollowingUsername">Michael Gonsalves</span>
        </div>
      </div>

      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
};
