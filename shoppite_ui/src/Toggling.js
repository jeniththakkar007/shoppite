import React from "react";
import Sidebar from "./Sidebar";
import './Toggling.css';

 export var tog=()=>{
    
         <Sidebar/>  
    
    console.log("hello");
            
}
const Toggling=()=>{
    return(
        <>
        <button className="b1" onClick={()=>tog()}>open</button>
    </>

    );
}
export default Toggling;
