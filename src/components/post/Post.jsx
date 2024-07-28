import "./post.css"
import {MoreVert} from "@material-ui/icons"
import { Users } from "../../userData"

export default function Post({post}) {
  const user = Users.filter(u=>u.id===1)
  console.log(user[0].username)
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src={Users.filter(u=>u.id===post?.userID)[0].profilePicture} alt="" />
                <span className="postUsername">{Users.filter(u=>u.id===post?.userID)[0].username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.description}</span>
            <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeImg" src="/assets/like.png" alt="" />
                <span className="likeCounter">{post.like} people liked</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comments} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
};
