import "./rightbar.css"
import Online from "../online/Online"
import {Users} from "../../userData"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Context } from "../../context/Context";
import {Add, Remove} from "@material-ui/icons"


export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [following, setFollowing] = useState([])
  const {user:currentUser, dispatch} = useContext(Context)
  const [followed, setFollowed] = useState(currentUser.following.includes(user?.id))

  useEffect(()=>{
    const getFollowing = async()=>{
      try{
        const followingList = await axios.get("/users/following/"+user._id);
        setFollowing(followingList.data);

      }catch(error){
        console.log(error)
      }
    }
    getFollowing();
  },[user])

  const handleClick = async ()=>{
    try{
      if(followed){
        await axios.put("/users/"+user._id+"/unfollow", {userId:currentUser._id})
        dispatch({type:"UNFOLLOW", payload:user._id})
      }else{
        await axios.put("/users/"+user._id+"/follow", {userId:currentUser._id})
        dispatch({type:"FOLLOW", payload:user._id})
      }

    }catch(error){
      console.log(error)
    }
    setFollowed(!followed)
  }

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
      {user.username !== currentUser.username && (
        <button className="rightbarFollow" onClick={handleClick}>
          {followed ? "Unfollow" : "Follow"}
          {followed ? <Remove/> : <Add/>}
        </button>
      )}
      <h4 className="rightBarTitle">User Info</h4>
      <div className="rightBarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">{user.city}</span>

        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">{user.from}</span>

        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" :  "-"}</span>

        </div>
      </div>
      <h4 className="rightBarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        {following.map((friend) => (
          <Link to={"/profile/" + friend.username} style={{textDecoration:"none"}}>
          <div className="rightbarFollowing">
            <img src={friend.profileImg ? PF+friend.profileImg : PF+"none.jpg"} alt="" className="rightBarFollowingImg" />
            <span className="rightbarFollowingUsername">{friend.username}</span>
          </div>
          </Link>

        ))}
        
        
      </div>

      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
};
