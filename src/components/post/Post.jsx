import "./post.css"
import {MoreVert} from "@material-ui/icons"

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src="/assets/profiles/profile1.jpg" alt="" />
                <span className="postUsername">Matthew Peterson</span>
                <span className="postDate">12 seconds ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">It's my first post!</span>
            <img className="postImg" src="/assets/posts/post1.jpg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeImg" src="/assets/like.png" alt="" />
                <span className="likeCounter">20 people liked</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">3 comments</span>
            </div>
        </div>
      </div>
    </div>
  )
};
