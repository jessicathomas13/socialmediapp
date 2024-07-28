import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Left from "../../components/leftbar/Left";
import "./Homepage.css"

export default function Homepage(){
    return(
        
        <>
            <Topbar/>
            <div className="homeContainer">
                <Left/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
        
    )
        
    
}