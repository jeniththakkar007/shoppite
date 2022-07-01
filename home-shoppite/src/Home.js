import React from "react";
import './Home.scss';
import {NavLink} from 'react-router-dom';
 export const Home=()=>{
    return(
        <>
<div className="container" >
    <div className="row  col-md-12 col-xl-12 col-lg-12 col-sm-12 col-xs-12 col-12 "  >
<img src="./wlc1.png" alt="welcome_banner"/>

    </div>
    <div className="row">
   <button class="btn"><span class="btn-text">Hover Me</span></button>
    <button class="btn rounded"><span class="text-green">Hover Me</span></button>
  </div>

    </div>
    
       
        </>
    )
}