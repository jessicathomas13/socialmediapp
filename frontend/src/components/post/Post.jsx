import "./post.css"
import { MoreVert } from "@material-ui/icons"
import { Users } from "../../userData"
import{ useState } from "react";

export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src={Users.filter((u)=>u.id === post?.userID)[0].profilePicture} alt="" />
                <span className="postUsername">{Users.filter((u)=>u.id === post?.userID)[0].username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.description}</span>
            <img className="postImg" src={PF+post.photo} alt="" />
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
