import "./feed.css";
import Share from "../share/Share"
import Post from "../post/Post"
import axios from "axios"
import { useState, useEffect, useContext } from "react";
import {Context} from "../../context/Context";

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(Context);

  useEffect(()=>{
    const fetchposts = async ()=>{
      const res = username ? await axios.get("/posts/profile/" + username) : await axios.get("posts/timeline/" + user._id);
      setPosts(res.data)
    }
    fetchposts();
  },[username,user._id]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {posts.map((p) => ( <Post key={p._id} post={p}/>))}
      </div>
    </div>
  )
};
