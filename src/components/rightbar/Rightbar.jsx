import React from "./rightbar.css"

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
          <li className="Friend">
              <div className="rightImgContainer">
                <img className="rightProfile" src="assets/profiles/profile3.jpg" alt=""/>
                <span className="rightOnline"></span>
              </div>
              <span className="Username">Andy Johnson</span>
          </li>
          <li className="Friend">
              <div className="rightImgContainer">
                <img className="rightProfile" src="assets/profiles/profile4.jpg" alt=""/>
                <span className="rightOnline"></span>
              </div>
              <span className="Username">Jonathan David</span>
          </li><li className="Friend">
              <div className="rightImgContainer">
                <img className="rightProfile" src="assets/profiles/profile5.jpg" alt=""/>
                <span className="rightOnline"></span>
              </div>
              <span className="Username">Kim Cho</span>
          </li><li className="Friend">
              <div className="rightImgContainer">
                <img className="rightProfile" src="assets/profiles/profile6.jpg" alt=""/>
                <span className="rightOnline"></span>
              </div>
              <span className="Username">Frank Baum</span>
          </li>
        </ul>
      </div>
    </div>
  )
};
