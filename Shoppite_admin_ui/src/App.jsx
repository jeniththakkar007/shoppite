import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import {Link} from "react-router-dom";
import Nevbar from "./Nevbar";
import Home from "./Home";
import Dashbord from "./dashbord/Dashbord";



import Sidebar from "./Sidebar";
import './App.css';
import ViewOrderData from "./dashbord/ViewOrderData";


function App()
{

    const Name=()=>
    {
        return <h1>This is Name Page , inside of Contact page</h1>
    };
    return(
        <>
            <div className="container-fuied">
                <div className="row">
                <Nevbar/>

                </div>
                <div className="row">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 app-main-div">

                    <Sidebar/>

                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10" id="body">
                        <Routes>
                            <Route exact path="/" element={<Dashbord/>}></Route>
                            <Route exact path='/about' element={< About />}></Route>
                            <Route exact path='/contact' element={<Contact />}></Route>
                            <Route exact path='/contact/name' element={<Name />}></Route>
                            <Route exact path='/home' element={<Home />}></Route>
                            <Route exact path='/dpage' element={<Dashbord/>}></Route>
                            <Route exact path="/dpage/order" element={<ViewOrderData/>}></Route>
                        </Routes>

                    </div>

                </div>
            </div>

         
           
           
            


           
            


      
       </>
    ); 
    
}

export default App;