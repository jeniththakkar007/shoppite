import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
import './Mob_nav.css';


const Mob_nav = () => {

    return (
      <>
<div className="row">
<nav class="navbar col-12">
 
  <div class="logo col-sm-6 col-xs-6 col-"> 
  <NavLink to="./">  <img src={window.location.origin + '/logo200.png'}  alt="logo" className="logo_main"/></NavLink>
  </div>
  
  <form action="/action_page.php">
 
  <select name="cars" id="cars">
    <option value="volvo">country</option>
    <option value="saab">India</option>
    <option value="opel">Afghanistan</option>
    <option value="audi">Bangladesh</option>
    <option value="audi">Belgium</option>
    <option value="audi">Cuba</option>
    <option value="audi">Belgium</option>
    <option value="audi">Ethiopia</option>
    <option value="audi">Albania</option>
    <option value="audi">Albania</option>
    <option value="audi">Albania</option>
    <option value="audi">Albania</option>
    <option value="audi">Albania</option>
    <option value="audi">Albania</option>
    <option value="audi">Albania</option>



  </select>

  
</form>
  
  <NavLink to="./signup" class="  item">

  <div class="group">
    <img src={window.location.origin + '/mob_sign1.png'} className="mob_sign"/>
       
    </div>
  </NavLink>

  <NavLink to="./cart" class="item">
    <div class="group ">

          <img src={window.location.origin + '/recart.png'} className="mob_cart"/>      
      
    </div>
  </NavLink>
</nav>
<div className="col-12 mob_sec_nav"> <div class="item search right" tabindex="0">
    <div class="search-group">
      {/* <select>
        <option value="all">All</option>
        <option value="all">Mens</option>
        <option value="all">Womens</option>
        <option value="all">Winter</option>
        <option value="all">Summer</option>
      </select> */}
      {/* <input type="text" class="search-click" name="" placeholder="search here..." /> */}
    {/* <input type="text"/>
    
    
    <img src={window.location.origin + '/research.png'} className="search"/>  <img src={window.location.origin + '/.png'}></img>*/}
<form class="form-inline row">
    <input class="form-control col-6" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success col-2" type="submit"><Icon icon="fe:search" /></button>
  </form>

      </div>
</div>
   
    <div className="col-sm-12 col-xs-12 col-12 mob_third_nav">
          <div >
       <NavLink className="third_navlink col-sm-3 col-xs-3 col-3 " to="./category"> Category </NavLink>
       <NavLink   className="third_navlink col-sm-3 col-xs-3 col-3 " to="./wishlist"> <Icon icon="bi:bag-heart" /> Wishlist </NavLink>
       <NavLink  className="third_navlink col-sm-3 col-xs-3 col-3 " to="./deals"> Deals </NavLink>
       <NavLink className="third_navlink col-sm-3 col-xs-3 col-3 " to="./location"><Icon icon="fa6-solid:location-dot" /> Location</NavLink>
    


       

            
          </div>
      </div>
      </div>
      </div>
      
          {/* <Footer/> */}
          



   </>
  )

}
export default Mob_nav;