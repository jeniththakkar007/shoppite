import React from "react";
import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";
import '../Mobile/Mob_filter.css';

 export class Mob_Filters extends React.Component{
    render(){
        return(
            <>
   <span className="span_filter"> 
   <NavLink to="./filter"> <button type="button" className="btn btn-outline-dark" > <Icon icon="akar-icons:arrow-up-down" /> Sort </button></NavLink> 
           
    <NavLink to="./filter"> <button type="button" className="btn btn-outline-dark"  > <Icon icon="akar-icons:arrow-up-down" /> Filters </button></NavLink> 
    </span>


    {/* <button><input type="submit">Submit</input>  </button> */}
        
            </>
        )
    }
}