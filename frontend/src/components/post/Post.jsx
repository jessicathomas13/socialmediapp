import "./post.css"
import { MoreVert } from "@material-ui/icons"
import{ useState } from "react";
import axios from "axios"
import { useState, useEffect } from "react";

export default function Post({post}) {
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setuser] = useState({})

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  

  useEffect(()=>{
    const fetchuser = async ()=>{
      const res = await axios.get('users/${post.userId}')
      setuser(res.data)
    }
    fetchuser()
  },[])

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src={user.profilePicture || PF+"assets/none.png"} alt="" />
                <span className="postUsername">{user.username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.description}</span>
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
