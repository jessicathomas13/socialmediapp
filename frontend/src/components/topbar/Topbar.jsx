import "./topbar.css";
import {Search, Person, Chat, Notifications} from "@material-ui/icons"
import {Link} from "react-router-dom"

export default function Topbar(){
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
            <img src="/assets/profiles/profile1.jpg" alt="" className="topbarImg" />
            </div>
        </div>
    );
    
        
}