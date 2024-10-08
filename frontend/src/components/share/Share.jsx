import { useContext, useState, useRef } from "react"
import "./share.css"
import {Collections, Label, Room, EmojiEmotions, Cancel} from "@material-ui/icons"
import {Context} from "../../context/Context"
import axios from "axios"


export default function Share() {
  const {user} = useContext(Context);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file,setFile] = useState(null)

  const submitHandler = async (e) =>{
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (error) {console.log(error)}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (error) {console.log(error)}
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
        
            <img className="shareProfileImg" src={user.profileImg ? PF + user.profileImg : PF+"none.jpg"} alt=""/>
            <input placeholder={"What's on your mind " + user.username + "?"} className="shareInput" ref={desc}/>
        </div>
        <hr className="shareHr"/>
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={()=>setFile(null)}/>
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
                <label htmlFor="file" className="shareOption">
                    <Collections htmlColor="limegreen" className="shareIcon"/>
                    <span className="shareOptionText">Photo/Video</span>
                    <input style={{display: "none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])}/>
                </label>
                <div className="shareOption">
                    <Label htmlColor="royalblue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="gold" className="shareIcon"/>
                    <span className="shareOptionText">Emoji</span>
                </div>
            </div>
            <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  )
};
