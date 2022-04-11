import React from "react";
import { NavLink } from "react-router-dom";
import './Nav1.css';
import Solutions from './Solutions';
import Product from './product';
import Home from './Home'
import Contact from './Contact';
import Service from './Service';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 const Nav=()=>{
     return(
         <>
           <nav>
        
        <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links">
            <li><NavLink to="./home">Home</NavLink></li>
            <li><NavLink to="./solutions">Solutions</NavLink></li>
            <li><NavLink to="./product">Products</NavLink></li>
            <li><NavLink to="./service">Services</NavLink></li>
            <li><NavLink to="./contact">Contact Us</NavLink></li>
          
        </ul>
    </nav>
    
    
    
         
         
         
         </>
     );
 }
 

 
 export default Nav;
