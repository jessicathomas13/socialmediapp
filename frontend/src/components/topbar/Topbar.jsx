import "./topbar.css";
import {Search, Person, Chat, Notifications} from "@material-ui/icons"
import { useContext } from "react";
import {Link} from "react-router-dom"
import { Context } from "../../context/Context";

export default function Topbar(){

    const {user} = useContext(Context);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}> 
                <span className="badge">MySpace</span> 
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                <Search className="searchIcon"/>
                <input placeholder = "Search" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarlinks">
                    <span className="links">Home</span>
                    <span className="links">Feed</span>
                </div>
            
                <div className="topbarIcons">
                    <div className="topbarItem">
                        <Person />
                        <span className="topbarIconbadge">1</span>
                    </div>
                    
                    <div className="topbarItem">
                        <Chat />
                        <span className="topbarIconbadge">2</span>
                    </div>

                    <div className="topbarItem">
                        <Notifications />
                        <span className="topbarIconbadge">1</span>
                    </div>

                </div>
                <Link to={`/profile/${user.username}`}>
                <img src={user.profileImg ? PF+user.profileImg : PF+"none.jpg"} alt="" className="topbarImg" />

                </Link>
            </div>
        </div>
    );
    
        
}