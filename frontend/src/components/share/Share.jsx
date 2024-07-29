import "./share.css"
import {Collections, Label, Room, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
        
            <img className="shareProfileImg" src="/assets/profiles/profile1.jpg" alt=""/>
            <input placeholder="What's on your mind?" className="shareInput"/>
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <Collections htmlColor="limegreen" className="shareIcon"/>
                    <span className="shareOptionText">Photo/Video</span>
                </div>
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
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
};
