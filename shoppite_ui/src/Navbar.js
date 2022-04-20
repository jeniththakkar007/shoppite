import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import { Icon } from '@iconify/react';
import { CgProfile } from 'react-icons/cg'

const Navbar = () => {
  return (
    <>



      <div class="topnav">
        <div className="col-md-12">
          <img src="shoppite_bag.png" className="img-logo" />
          <span className="pro-icon"><Icon icon="fa-solid:user-circle" /> </span>
          <span className="cart-icon"><Icon icon="zondicons:shopping-cart" /><span className="cart-text"><b>Cart</b></span> </span>
          <span className="like-icon"><Icon icon="charm:heart" /></span>

          <div class="search-container">

            <form action="/action_page.php">
              <input type="text" className="search-bar" placeholder="Search" name="search" />
              <button type="submit" className="search_button" style={{ "background": "#c1e7e2", "float": "right" }}><Icon icon="wpf:search" /></button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <div className="col-md-12 second_nav">
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
            <button class="dropbtn"><Icon icon="map:clothing-store" /> Clothing
            </button>
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