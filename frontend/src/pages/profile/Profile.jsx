import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Left from "../../components/leftbar/Left";



export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
    <Topbar/>
    <div className="profile">
        <Left/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={`${PF}posts/post1.jpg`} alt=""/>
              <img className="profileImg" src={`${PF}profiles/profile1.jpg`} alt=""/>
            </div>
            <div className="profileInfo">
              <h4 className="profileName">Matthew Peterson</h4>
              <span className="profileDesc">Welcome to my profile!</span>

            </div>
        </div>
        <div className="profileRightBottom">
          <Feed/>
          <Rightbar profile/>
        </div>
      </div>
    </div>
</>
);
}
