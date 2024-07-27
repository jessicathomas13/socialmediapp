import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Left from "../../components/leftbar/Left";

export default function Homepage(){
    return(
        <div>
            <>
            <Topbar/>
            <div className="homeContainer"></div>
            <Left/>
            <Feed/>
            <Rightbar/>

            </>
        </div>
    )
        
    
}