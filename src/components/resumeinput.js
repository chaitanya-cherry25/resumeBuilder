import "../styles/resumestyle.css";
import React, { useState } from 'react';






const Resume = ({ resumedata, setResumedata }) => {



    const submitform = (e) => {
        e.preventDefault();

    }
    console.log(123)



    return (

        <div className="bodyy">

            
            <br></br>

            <div className="resumeform">

                <form className="formbody" onSubmit={submitform}>


                    <div>
                        <b style={{ color: "#ff5e44", fontSize: "1.5rem" }}>Name</b>
                    </div>

                    <div className="namedetails">

                        <div>
                            <label>
                                First Name:
                                <br></br>
                                <input type="text" placeholder="     first name" value={resumedata.fname} onChange={(e) => setResumedata({ ...resumedata, fname: e.target.value })} />
                            </label>
                        </div>

                        <div>
                            <label>
                                Last Name:
                                <br></br>
                                <input type="text" placeholder="   last name" value={resumedata.lname} onChange={(e) => setResumedata({ ...resumedata, lname: e.target.value })} />
                            </label>
                        </div>

                    </div>

                    <br></br>

                    <div className="occupation">
                        <div>
                            <b style={{ color: "#ff5e44", fontSize: "1.5rem" }}>Occupation</b>
                        </div>
                        <label>
                            Profile:
                            <input type="text" placeholder="    Profile" value={resumedata.profile} onChange={(e) => setResumedata({ ...resumedata, profile: e.target.value })} />
                        </label>
                    </div>

                    <br></br>



                    <div className="aboutme">
                        <b style={{ color: "#ff5e44", fontSize: "1.5rem" }}>About Me</b>
                        <textarea className="tarea" placeholder="      Type here" value={resumedata.aboutme} onChange={(e) => setResumedata({ ...resumedata, aboutme: e.target.value })}></textarea>
                    </div>


                    <br></br>

                    <div className="contact">

                        <div><b style={{ color: "#ff5e44", fontSize: "1.5rem" }}> Contact Details </b></div>


                        <label>
                            Email ID:
                            <input type="email" placeholder="    Email" value={resumedata.email} onChange={(e) => setResumedata({ ...resumedata, email: e.target.value })} />
                        </label>

                        <label>
                            Phone Number:
                            <input type="text" placeholder="    Phone number" value={resumedata.phonenumber} onChange={(e) => setResumedata({ ...resumedata, phonenumber: e.target.value })} />
                        </label>

                        <label>
                            Location:
                            <input type="text" placeholder="    Address" value={resumedata.address} onChange={(e) => setResumedata({ ...resumedata, address: e.target.value })} />
                        </label>

                        <label>
                            Git ID:
                            <input type="text" placeholder="    Git-id" value={resumedata.gitid} onChange={(e) => setResumedata({ ...resumedata, gitid: e.target.value })} />
                        </label>

                    </div>

                    <br></br>

                    <div className="education">

                        <div> <b style={{ color: "#ff5e44", fontSize: "1.5rem" }}>Education Details</b></div>
                        <label>
                            Course:
                            <input type="text" placeholder="    Course" value={resumedata.course} onChange={(e) => setResumedata({ ...resumedata, course: e.target.value })} />
                        </label>
                        <label>
                            University:
                            <input type="text" placeholder="    University" value={resumedata.university} onChange={(e) => setResumedata({ ...resumedata, university: e.target.value })} />
                        </label>
                        <label>
                            Year of Passed out:
                            <input type="text" placeholder="    Year of passed out" value={resumedata.passedout} onChange={(e) => setResumedata({ ...resumedata, passedout: e.target.value })} />
                        </label>

                        <label>
                            G.P.A:
                            <input type="text" placeholder="    G.P.A" value={resumedata.gpa} onChange={(e) => setResumedata({ ...resumedata, gpa: e.target.value })} />
                        </label>
                    </div>

                    <br></br>

                    <div className="experience">
                        <div> <b style={{ color: "#ff5e44", fontSize: "1.5rem" }}>Professional Experience</b></div>
                        <label>
                            Company Name:
                            <input type="text" placeholder="    company" value={resumedata.company} onChange={(e) => {
                                console.log(e.target.value)
                                setResumedata({ ...resumedata, company: e.target.value })
                            }} />
                        </label>
                        <label>
                            Role:
                            <input type="text" placeholder="    role" value={resumedata.role} onChange={(e) => setResumedata({ ...resumedata, role: e.target.value })} />
                        </label>
                        <label>
                            Job Description:
                            <textarea type="text" className="tarea" placeholder="    description" value={resumedata.description} onChange={(e) => setResumedata({ ...resumedata, description: e.target.value })}></textarea>
                        </label>
                    </div>

                    <br></br>

                    <div className="skills">

                        <div> <b style={{ color: "#ff5e44", fontSize: "1.5rem" }}> Skills </b></div>

                        <input type="text" placeholder="    skill-1" value={resumedata.skill1} onChange={(e) => setResumedata({ ...resumedata, skill1: e.target.value })} />
                        <input type="text" placeholder="    skill-2" value={resumedata.skill2} onChange={(e) => setResumedata({ ...resumedata, skill2: e.target.value })} />
                        <input type="text" placeholder="    skill-3" value={resumedata.skill3} onChange={(e) => setResumedata({ ...resumedata, skill3: e.target.value })} />
                        <input type="text" placeholder="    skill-4" value={resumedata.skill4} onChange={(e) => setResumedata({ ...resumedata, skill4: e.target.value })} />
                    </div>

                    <br></br>

                    <div className="languages">

                        <div> <b style={{ color: "#ff5e44", fontSize: "1.5rem" }}> languages Known</b></div>

                        <input type="text" placeholder="    ......" value={resumedata.lang1} onChange={(e) => setResumedata({ ...resumedata, lang1: e.target.value })} />
                        <input type="text" placeholder="    ......" value={resumedata.lang2} onChange={(e) => setResumedata({ ...resumedata, lang2: e.target.value })} />
                        <input type="text" placeholder="    ......" value={resumedata.lang3} onChange={(e) => setResumedata({ ...resumedata, lang3: e.target.value })} />
                        <input type="text" placeholder="    ......" value={resumedata.lang4} onChange={(e) => setResumedata({ ...resumedata, lang4: e.target.value })} />
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>




                </form>


            </div>
            {/* <div style={{ float: "right", paddingTop: "1rem" }}> <button type="submit" onClick={submitform} className="btn">create Resume</button></div> */}

            <br></br>
            <br></br>

            <br></br>



        </div>




    );
};

export default Resume;