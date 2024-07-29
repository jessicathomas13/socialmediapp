import React from "./leftbar.css"
import Friends from "../friends/Friends"
import {DynamicFeed, Chat, VideoLibrary, Group, Bookmark, Event} from "@material-ui/icons"
import {Users} from "../../userData"

export default function Left() {
  return (
        <div className="leftbar">
           <div className="leftbarWrapper">
              <ul className="leftbarList">
                <li className="leftbarListItem">
                  <DynamicFeed className="leftbarIcon"/>
                  <span className="leftbarText">Feed</span>
                </li>
                <li className="leftbarListItem">
                  <Chat className="leftbarIcon"/>
                  <span className="leftbarText">Chat</span>
                </li>
                <li className="leftbarListItem">
                  <VideoLibrary className="leftbarIcon"/>
                  <span className="leftbarText">Videos</span>
                </li>
                <li className="leftbarListItem">
                  <Group className="leftbarIcon"/>
                  <span className="leftbarText">Groups</span>
                </li>
                <li className="leftbarListItem">
                  <Bookmark className="leftbarIcon"/>
                  <span className="leftbarText">Bookmarks</span>
                </li>
                <li className="leftbarListItem">
                  <Event className="leftbarIcon"/>
                  <span className="leftbarText">Events</span>
                </li>
              </ul>

              <button className="leftbarButton"> Show More</button>
              <hr className="leftbarHr"/>
              <ul className="leftbarFriendList">
                {Users.map(u=>(<Friends key={u.id} user={u}/>))}

              </ul>
           </div>
        </div>
  )
};
