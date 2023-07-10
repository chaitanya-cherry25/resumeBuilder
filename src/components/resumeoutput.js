import Resume from "./resumeinput";
import "../styles/styleresume.css";
import { HiOutlineMail } from "react-icons/hi";
import { ImMobile } from "react-icons/im";
import { FaRegAddressCard } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});


const Resumeoutput = ({ resumedata }) => {
    console.log(resumedata)

    const exportPdf =()=>{
        html2canvas(document.querySelector("#finalresume")).then((canvas)=>{
            const imgData= canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "PNG", 0, 0, 210,250);
            pdf.save("download.pdf")
        })
    }

    return (
        <Document >

                <div id="finalresume">
                    <div className="hname" >
                        <p>{resumedata.fname}</p>
                        <p>{resumedata.lname}</p>
                    </div>
                    <div className="profile">
                        <h>{resumedata.profile}</h>
                    </div>


                    <div className="resume-body">

                        <div className="left-resume">

                            <div className="contact">

                                <div><h1 style={{ fontWeight: "bolder", color: "black" }}>Contact Information</h1></div>

                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <HiOutlineMail />
                                    <p>{resumedata.email}</p>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <ImMobile />
                                    <p>{resumedata.phonenumber}</p>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <FaRegAddressCard />
                                    <p>{resumedata.address}</p>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <FaGitSquare />
                                    <p>{resumedata.gitid}</p>
                                </div>


                            </div>


                            <div className="skills">
                                <div className="sk1"><h1 style={{ color: "black" }}>Skills</h1></div>

                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <VscDebugBreakpointLog />
                                    <p>{resumedata.skill1}</p>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <VscDebugBreakpointLog />
                                    <p>{resumedata.skill2}</p>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <VscDebugBreakpointLog />
                                    <p>{resumedata.skill3}</p>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <VscDebugBreakpointLog />
                                    <p>{resumedata.skill4}</p>
                                </div>

                            </div>


                            <div className="languages">

                                <div className="sk1"><h1 style={{ color: "black" }}>Languages</h1></div>

                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <VscDebugBreakpointLog />
                                    <p>{resumedata.lang1}</p>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <VscDebugBreakpointLog />
                                    <p>{resumedata.lang2}</p>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <VscDebugBreakpointLog />
                                    <p>{resumedata.lang3}</p>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <VscDebugBreakpointLog />
                                    <p>{resumedata.lang4}</p>
                                </div>


                            </div>

                        </div>


                        <div className="right-resume">

                            <div className="aboutme">
                                <div><h1 style={{ fontWeight: "bolder", color: "black" }}>About me</h1></div>
                                <p>{resumedata.aboutme}</p>
                            </div>

                            <div className="education">
                                <div><h1 style={{ fontWeight: "bolder", color: "black" }}>Education Details</h1></div>
                                <p><b>Stream:</b> {resumedata.course}</p>
                                <p><b>Academy:</b> {resumedata.university}</p>
                                <p><b>Year of Passed out:</b> {resumedata.passedout}</p>
                                <p> <b>Achieved CGPA:</b> {resumedata.gpa}</p>
                            </div>


                            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }} className="exp">
                                <div><h1 style={{ fontWeight: "bolder", color: "black" }}>Professional Experience</h1></div>
                                <Text> <b>Organisation:</b> {resumedata.company}</Text>
                                <p><b>Role:</b> {resumedata.role} </p>
                                <b>Job Description</b>
                                <p>{resumedata.description}</p>


                            </div>


                        </div>








                    </div>

                </div>


<br></br>
<br></br>
<br></br>
<br></br>
<br></br>




<div style={{display:"flex", justifyContent:"center"}}>
<div><button className="dbtn" onClick={()=>exportPdf()}>CLick to download</button>
</div>
</div>


        </Document>






    );
}




export default Resumeoutput;