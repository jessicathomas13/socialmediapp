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
      setPosts(
        res.data.sort((p1,p2)=>{
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      )
    }
    fetchposts();
  },[username,user]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user?.username) && <Share/>}
        {posts.map((p) => ( <Post key={p._id} post={p}/>))}
      </div>
    </div>
  )
};
