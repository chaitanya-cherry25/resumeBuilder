import "./App.css";
import { useState } from 'react';
import Resume from './components/resumeinput';
import Resumeoutput from './components/resumeoutput';
import Front from './components/resumeinitial';
import Register from './components/resumeregister';
import Rlogin from './components/resumelogin';
import Tophead from "./components/tophead";
import Home from "./components/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


function App() {

  

const router = createBrowserRouter([
{
  path:"/",
  element: <Front/>
},
{
  path:"/register",
  element: <Register/>
},
{
  path:"/login",
  element: <Rlogin/>
},

{
  path:"/home",
  element: <Home/>

}


])



// const [resumedata, setResumedata]= useState(data);


  return (
    <div>
{/* <Home resumedata = {resumedata} setResumedata={setResumedata}/> */}
<RouterProvider router={router}/>
</div>


    );

  }
  


export default App;

