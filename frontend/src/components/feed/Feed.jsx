import "./feed.css";
import Share from "../share/Share"
import Post from "../post/Post"
import axios from "axios"
import { useState, useEffect } from "react";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const fetchposts = async ()=>{
      const res = await axios.get("posts/timeline/66a7f1a6d55b1ae9a153c746")
      setPosts(res.data)
    }
    fetchposts();
  },[]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {posts.map((p) => ( <Post key={p.id} post={p}/>))}
      </div>
    </div>
  )
};
