import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import './Navbar.css';
import { Icon } from '@iconify/react';
import Mob_nav from "./Mobile/Mob_nav";
import Categryegory from "./Mobile/Category";
import Mob_body from "./Mobile/Mob_body";
import CountryDropdown from 'country-dropdown-with-flags-for-react';


const Navbar = () => {
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
  if (screenSize.dynamicWidth<=855) {
    return (
        <>
        <Mob_nav/>
        <Routes>
            <Route path="/category" element={<Categryegory/>}/>
        </Routes>
        {/* <Mob_body/> */}
         
        </>
      )
    
} else {
   
        
            <Navbar />
    
      
    
}


  return (
    <>
<nav class="navbar">

  <div class="logo row">
  <NavLink to="./">  <img src={window.location.origin + '/logo200.png'} alt="logo" className="logomain"/></NavLink> 

  </div>
  <div class="col-6" tabindex="0">
   <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><Icon icon="fe:search" /></button>
  </form>
      {/* <input type="text" class="search-click" name="" placeholder="search here..." /> */}
  </div>

  
  
  <NavLink to="" class=" col-2 item">

    <div class="group">
<img src={window.location.origin + '/resignup2.png'} className="resignup" />
     
    </div>
  </NavLink>

  <NavLink to="./cart" class="item col-2">
    <div class="group">
<img src={window.location.origin + '/recart2.png'} className="recart" />
    
    </div>
  </NavLink>
</nav>
{/* <hr/> */}

      <div className="row">
        <div className="second_nav">
          <div class="dropdown seco-chnge">
            <button class="dropbtn"><Icon icon="simple-icons:homeassistant" /> Home Decor </button>
            <div class="dropdown-content">
              <a href="#">Wall Decoration</a>
              <a href="#">Painting</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn"><Icon icon="map:electrician" /> Electronic
            </button>
            <div class="dropdown-content">
              <a href="#">Laptop</a>
              <a href="#">Mobile</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn"><Icon icon="fluent:food-grains-24-filled" /> Grocery
            </button>
            <div class="dropdown-content">
              <a href="#">Dairy Product</a>
              <a href="#">Snacks & Bevereges</a>
              <a href="#">House Hold</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn"><Icon icon="ic:round-kitchen" /> Appliances
            </button>
            <div class="dropdown-content">
              <a href="#">Seasonal  Appliances</a>
              <a href="#">kitchen Appliances</a>

            </div>


          </div>

          <div class="dropdown">
            <button class="dropbtn"><Icon icon="mdi:face-woman-shimmer" /> Beauty & Toys
            </button>
            <div class="dropdown-content">
              <a href="#">Beauty Products</a>
              <a href="#">Toys For Girls</a>
              <a href="#">Toys For Boys</a>
            </div>


          </div>

          <div class="dropdown">
        <NavLink to="./category/clothing">   <button class="dropbtn"><Icon icon="map:clothing-store" /> Clothing
            </button></NavLink> 
            <div class="dropdown-content">
              <a href="#">Men Ethanic Wear</a>
              <a href="#">Men Weastern Wear</a>
              <a href="#">Women Ethanic Wear</a>
              <a href="#">Women Weastern Wear</a>
            </div>

          </div>


          <div class="dropdown">
            <button class="dropbtn"><Icon icon="file-icons:ring" /> Accesories
            </button>
            <div class="dropdown-content">
              <a href="#">Women  Accesories</a>
              <a href="#">Men Accesories</a>

            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn"><Icon icon="emojione-monotone:high-heeled-shoe" /> Footwear
            </button>
            <div class="dropdown-content">
              <a href="#">Women  Footwear</a>
              <a href="#">Men Footwear</a>

            </div>
          </div>

        </div>

      </div>
      

    </>
  )

}
export default Navbar;