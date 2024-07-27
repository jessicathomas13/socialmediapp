import "./topbar.css";
import {Search, Person} from "@material-ui/icons"


export default function Topbar(){
    return(
        <div className="topbarcont">
            <div className="topbarLeft">
                <span className="badge">Poopstagram</span>
            </div>
            <div className="topbarCenter">
            <Search />
            <input placeholder = "Search" className="search"></input>
            </div>
            <div className="topbarRight">
                <div className="links">Home</div>
                <div className="links">Feed</div>
            </div>
            <div className="topbarIcon">
                <div className="topbarItem">
                    <Person />
                    <span className="topbarIcons">1</span>
                </div>

            </div>
            
        </div>
    )
        
}