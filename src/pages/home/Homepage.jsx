import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";

export default function Homepage(){
    return(
        <div>
            <>
            <Topbar/>
            <div className="homeContainer"></div>
            
            <Feed/>
            <Rightbar/>
            </>
        </div>
    )
        
    
}