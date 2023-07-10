import "../styles/resumeinitial.css";
import {AiFillStar} from "react-icons/ai";

import { useNavigate } from "react-router-dom";


const Front=()=>{

    const navigate=useNavigate()

    const  Gosignup=()=>{
    navigate("/register")
    }


    const  Gologin=()=>{
    navigate("/login")
    }


    return(
<div className="initial-body">

    <div className="navbar">
 
 <div><img className="logo" src="https://resumegenius.com/wp-content/themes/genesis-rg-v3/images/resume-genius-logo.svg"/></div>

 <div className="nav-end">
<div><button  onClick={()=>Gosignup()} className="reg">Register</button></div>
<div><button onClick={()=>Gologin()} className="log">Login</button></div>
</div>
</div>

<div className="display">

    <div className="dispimg">
    <img className="displayimg" src="https://resumegenius.com/wp-content/uploads/rg-resume-builder-banner-desktop.png"/>
    <div style={{display:"flex", justifyContent:"center",alignItems:"center",gap:"3rem"}}>
        <p style={{fontWeight:"bold"}}>Excellent</p>

        <div style={{color:"goldenrod"}}>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>

        </div>

        <div><p style={{textAlign:"center"}}>38,668 Reviews on < AiFillStar/> TrustPilot</p></div>
    </div>
    </div>


    <div className="dispdata">

        <div><h1 style={{color:"black",fontSize:"3rem",fontFamily:"serif"}}>The Genius Resume <br></br> Builder</h1></div>

        <p style={{fontSize:"1.5rem", fontFamily:"cursive"}}>Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.</p>

        <div><button onClick={()=>Gosignup()} className="build">Build My Resume</button></div>
        
    </div>



</div>



    </div>




    )
};


export default Front;