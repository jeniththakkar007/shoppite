import React, { useState, useEffect } from 'react'
import Body_part from './Body_part';
import Mob_body from './Mobile/Mob_body';
import Mob_nav from './Mobile/Mob_nav';
import Navbar from './Navbar';

export default function Check() {
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
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  
if (screenSize.dynamicWidth<=450) {
    // <h1>this is mobile view</h1>
    // console.log(screenSize.dynamicWidth);
    return (
        <>
            <Mob_nav />
        <Mob_body />
        </>
      )
    
} else {
    return (
        <>
            <Navbar />
        <Body_part />
        </>
      )
}
}
