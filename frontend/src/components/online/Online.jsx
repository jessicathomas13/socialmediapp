import "./online.css"

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="Friend">
              <div className="rightImgContainer">
                <img className="rightProfile" src={PF+user.profilePicture} alt=""/>
                <span className="rightOnline"></span>
              </div>
              <span className="Username">{user.username}</span>
     </li>
  )
}
