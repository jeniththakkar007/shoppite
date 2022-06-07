import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Filters from "../product/Filters";
import { Mob_Filters } from "./Mob_Filters";


export default function Filtercheck() {
    const [screenSize, getDimension] = useState({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    });
    const setDimension = () => {
      getDimension({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      })
    }
    
    useEffect(() => {
      window.addEventListener('resize', setDimension);
      console.log(screenSize.dynamicWidth);
      
      return(() => {
          window.removeEventListener('resize', setDimension);
      })
    }, [screenSize])
  
    
  if (screenSize.dynamicWidth<=462) {
    
      return (
          <>
          <Mob_Filters/>
       
           
          </>
        )
      
  } else {
      return (
          <>
         <Filters/>
          </>
        )
  }
  }