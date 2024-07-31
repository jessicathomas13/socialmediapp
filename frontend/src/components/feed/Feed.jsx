import "./feed.css";
import Share from "../share/Share"
import Post from "../post/Post"
import axios from "axios"
import { useState, useEffect } from "react";

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const fetchposts = async ()=>{
      const res = username ? await axios.get("/posts/profile/" + username) : await axios.get("posts/timeline/66a8320882a63424cd90d07a");
      setPosts(res.data)
    }
    fetchposts();
  },[username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {posts.map((p) => ( <Post key={p._id} post={p}/>))}
      </div>
    </div>
  )
};
