import React from "./leftbar.css"
import {DynamicFeed, Chat, VideoLibrary, Group, Bookmark, Event} from "@material-ui/icons"

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
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile2.jpg" alt="" />
                  <span className="leftbarFriendName">Katie Buchanan</span>
                </li>
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile3.jpg" alt="" />
                  <span className="leftbarFriendName">John Reed</span>
                </li>
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile4.jpg" alt="" />
                  <span className="leftbarFriendName">Alissa May</span>
                </li>
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile5.jpg" alt="" />
                  <span className="leftbarFriendName">Esther Chen</span>
                </li>
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile6.jpg" alt="" />
                  <span className="leftbarFriendName">Mitchell Barnes</span>
                </li>
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile7.jpg" alt="" />
                  <span className="leftbarFriendName">Ethan Ramon</span>
                </li>
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile8.jpg" alt="" />
                  <span className="leftbarFriendName">Michael Gonsalves</span>
                </li>
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile9.jpg" alt="" />
                  <span className="leftbarFriendName">Andrea Picquadio</span>
                </li>
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile10.jpg" alt="" />
                  <span className="leftbarFriendName">Emily Morinho</span>
                </li>
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile11.jpg" alt="" />
                  <span className="leftbarFriendName">Brandon Davis</span>
                </li>
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile12.jpg" alt="" />
                  <span className="leftbarFriendName">Daniel Lee</span>
                </li>
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile13.jpg" alt="" />
                  <span className="leftbarFriendName">Julia Wilson</span>
                </li>
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile14.jpg" alt="" />
                  <span className="leftbarFriendName">James King</span>
                </li>
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile15.jpg" alt="" />
                  <span className="leftbarFriendName">Samuel Martinez</span>
                </li>
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile16.jpg" alt="" />
                  <span className="leftbarFriendName">Camila Aguiar</span>
                </li>
                <li className="leftbarFriend">
                  <img className="leftbarFriendImg" src="/assets/profiles/profile17.jpg" alt="" />
                  <span className="leftbarFriendName">Rachel Lewis</span>
                </li>
              </ul>
           </div>
        </div>
  )
};
