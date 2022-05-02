import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
import './Mob_nav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mob_nav = () => {
    return (
      <>
{/* <div className="row"> */}
    <div className="col-sm-12 mob_first_nav mob_nav1">
             
                 <div className="col-sm-6">
          <img src="shoppite_bag.png" className="img-logo " />
          </div> 
          <div className="col-sm-6 dv-signin-cls">
          <Icon icon="zondicons:shopping-cart"   font-size= "1rem" />
          <Icon icon="bxs:user" /><NavLink to="./login" className="signin">Sign In</NavLink> 
     {/* <ul> 
        <li class="mob_dropbtn f_nav"><Icon icon="zondicons:shopping-cart"   font-size= "1rem" />  </li>
          <li className="cart-icon f_nav"><NavLink to="./login" className="signin">Sign In</NavLink> <Icon icon="bxs:user" /></li>
          
     </ul> */}
     </div>
    </div>

    <div className="col-12 mob_secon_nav">
    <div class="search-container">
    <form action="/action_page.php" >
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit" className="search_btn"><Icon icon="fluent:search-28-filled"  fontSize={"1rem"} 
      /></button>
    </form>
  </div>
    </div>
    <div className="col-12 mob_third_nav">
          <div >
       <NavLink className="third_navlink" to="./category"> Category </NavLink>
       <NavLink   className="third_navlink" to="./wishlist"> <Icon icon="bi:bag-heart" /> Wishlist </NavLink>
       <NavLink  className="third_navlink" to="./deals"> Deals </NavLink>
       <span className="third_navlink"><Icon icon="fa6-solid:location-dot" /> Location</span>
    


       

            
          </div>
      </div>
      {/* </div> */}

      
          
          



   </>
  )

}
export default Mob_nav;