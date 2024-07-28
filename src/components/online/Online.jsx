import "./online.css"

export default function Online({user}) {
  return (
    <li className="Friend">
              <div className="rightImgContainer">
                <img className="rightProfile" src={user.profilePicture} alt=""/>
                <span className="rightOnline"></span>
              </div>
              <span className="Username">{user.username}</span>
     </li>
  )
}
