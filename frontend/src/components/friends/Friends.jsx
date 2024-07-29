import "./friends.css"


export default function Friends({user}) {
  return (
    <li className="leftbarFriend">
        <img className="leftbarFriendImg" src={user.profilePicture} alt="" />
        <span className="leftbarFriendName">{user.username}</span>
    </li>
  )
};
