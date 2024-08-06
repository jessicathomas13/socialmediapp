import "./post.css";
import { MoreVert } from "@material-ui/icons";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import {format} from "timeago.js";
import {Link} from "react-router-dom";
import { Context } from "../../context/Context";



export default function Post({post}) {
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser} = useContext(Context)
  

  useEffect(()=>{
    const fetchUser = async ()=>{
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    }
    fetchUser()
  },[post.userId]);

  useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id))
  },[currentUser?._id,post.likes])

  const likeHandler =()=>{
    try{
      axios.put("/posts/"+post._id+"/like", {userId:currentUser._id})
      setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
    }catch(error){

    }
    
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
              <Link to={`profile/${user.username}`}>
              <img className="postProfileImg" src={user.profileImg ? PF + user.profileImg : PF+"none.jpg"} alt="" />
              </Link>
                <span className="postUsername">{user.username}</span>
                <span className="postDate">{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImg" src={PF+post.img} alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeImg" src={`${PF}like.png`} onClick={likeHandler} alt="" />
                <span className="likeCounter">{like} people liked</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comments} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
};
