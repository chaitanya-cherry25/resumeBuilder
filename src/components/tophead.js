import { useNavigate } from "react-router-dom";
import "../styles/tophead.css";

const Tophead = ()=>{

    const navigate=useNavigate();
    const userName=JSON.parse(localStorage.getItem("user"));

    const handlelogout=()=>{
        localStorage.removeItem("user");
        navigate("/login");
    }
    return(
        
        <div style={{display:"flex",justifyContent:"center",alignItems:"center", width:"100%",padding:"1rem", gap:"10rem"}}>

        <div className="head">
                <b style={{fontSize:"5rem"}}>Make Your Professional-</b>
                <p style={{color:"#ff5e44", fontSize:"5rem"}}>Resume</p>
            </div>

            <div><button onClick={handlelogout} className="flogout">logout</button></div>
            </div>
    
    )
}

export default Tophead;