import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import './Navbar.css';
import {FaBoxOpen} from 'react-icons/fa';
import {AiFillFire} from 'react-icons/ai';
import { Icon } from '@iconify/react';
import {Mob_nav} from "./Mobile/Mob_nav";
import Categryegory from "./Mobile/Category";
import { Button, TextField } from "@mui/material";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TreeItem, TreeView } from "@material-ui/lab";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Dropdown } from "react-bootstrap";
const options = [
  {
    name: <Icon icon="quill:hamburger-sidebar" fontSize="1.5rem" />,
    scroll: false,
    backdrop: true,
  },
];
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

    return (() => {
      window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
  if (screenSize.dynamicWidth <= 855) {
    return (
      <>
        <Mob_nav />
        <Routes>
          <Route path="/category" element={<Categryegory />} />
        </Routes>
        {/* <Mob_body/> */}

      </>
    )

  } else {
    <>
      {/* <DarkModerToggle/> */}
      <Navbar />
      {/* <DarkModerToggle/> */}
    </>


  }
  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
      <>
        <Button variant="primary" onClick={toggleShow} className="me-2">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header >
            <Offcanvas.Title className="offcanvas_title col-12"> <img src={window.location.origin + '/side_235.png'}  className="sidebar_logo"/><button type="button" onClick={handleClose} className="close_sidebar" ><Icon icon="quill:hamburger-sidebar" /></button> </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

            <TreeView>
              <TreeItem nodeId="1" label={
                <ListItem button component="" to="">
                  <NavLink to="./" onClick={handleClose} className="list_sidebar"><ListItemText primary="Go to Home " /><Icon icon="ci:home-alt-outline" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                </ListItem>}>
              </TreeItem>
              <TreeItem nodeId="2" label={
                <ListItem button component="NavLink" to="./cart">
                  <NavLink to="./cart" onClick={handleClose} className="list_sidebar"><ListItemText primary="My Orders" style={{ "color": "black", "textDecoration": "none" }} /><FaBoxOpen/></NavLink>
                </ListItem>}>

              </TreeItem>
              <TreeItem nodeId="3" label={
                <ListItem button component="NavLink" to="">
                  <ListItemText primary="Trendings" /><AiFillFire/>
                </ListItem>}>
                <TreeItem nodeId="8" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./bestseller" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Best Sellers" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>
                </TreeItem>
                <TreeItem nodeId="9" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./newrelease" onClick={handleClose} className="list_sidebar">  <ListItemText primary="New releases" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="4" label={
                <ListItem button component="NavLink" to="">
                  <ListItemText primary="Top Categories For You" /><Icon icon="bxs:category" />
                </ListItem>}>
                <TreeItem nodeId="10" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./category/electric" onClick={handleClose} className="list_sidebar">  <ListItemText primary="Electronis" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>
                </TreeItem>
                <TreeItem nodeId="11" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./category/clothing" onClick={handleClose} className="list_sidebar">  <ListItemText primary="Clothings" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>
                </TreeItem>
                <TreeItem nodeId="12" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./category/acces"  onClick={handleClose} className="list_sidebar"> <ListItemText primary="Accesories" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>
                </TreeItem>
                <TreeItem nodeId="13" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./" onClick={handleClose} className="list_sidebar">  <ListItemText primary="See All Categories" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="5" label={
                <ListItem button component="NavLink" to="">
                <ListItemText primary="Programs & Features" style={{ "color": "black", "textDecoration": "none" }} />
                <Icon icon="material-symbols:featured-play-list-sharp" /> </ListItem>}>
                <TreeItem nodeId="14" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./top_offer" onClick={handleClose} className="list_sidebar"> <ListItemText primary=" Top Offers" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>
                <TreeItem nodeId="15" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./deals" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Today's Deals" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>
                <TreeItem nodeId="16" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./newrelease" onClick={handleClose} className="list_sidebar"> <ListItemText primary="What's New?" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>
                <TreeItem nodeId="17" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./discount" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Discount For You" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>
                <TreeItem nodeId="18" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./month_offer" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Offer's Of the Month" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>
                <TreeItem nodeId="19" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./bestseller" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Your City's Best Sellers" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>


              </TreeItem>

              <TreeItem nodeId="6" label={
                <ListItem button component="NavLink" to="">
                  <ListItemText primary="My Account" style={{ "color": "black", "textDecoration": "none" }} />
                  <Icon icon="mdi:comment-account-outline" /></ListItem>}>
                <TreeItem nodeId="20" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Edit My Account" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>

                <TreeItem nodeId="21" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./" onClick={handleClose} className="list_sidebar"> <ListItemText primary="My Addresses" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>
                <TreeItem nodeId="22" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./" onClick={handleClose} className="list_sidebar"> <ListItemText primary="My Cart" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>
                <TreeItem nodeId="23" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./" onClick={handleClose} className="list_sidebar"> <ListItemText primary="My Wishlist" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>
                <TreeItem nodeId="24" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./"  onClick={handleClose} className="list_sidebar"> <ListItemText primary="My Orders" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>
              
              </TreeItem>
              <TreeItem nodeId="7" label={
                <ListItem button component="NavLink" to="">
                  <ListItemText primary="Discount" style={{ "color": "black", "textDecoration": "none" }} /><Icon icon="nimbus:discount-circle" />
                </ListItem>}>
                <TreeItem nodeId="25" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./discount" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Extra 5% OFF" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>
                    </TreeItem>
                  <TreeItem nodeId="26" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./discount" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Extra 15% OFF" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>
                    </TreeItem>
                  <TreeItem nodeId="27" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./discount"  onClick={handleClose}   className="list_sidebar"> <ListItemText primary="Extra 25% OFF" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="8" label={
                <ListItem button component="NavLink" to="">
                  <NavLink to="./gift"  onClick={handleClose} className="list_sidebar"><ListItemText primary=" Most Gifted" style={{ "color": "black", "textDecoration": "none" }} /><Icon icon="carbon:gift" /></NavLink>
                </ListItem>}>

              </TreeItem>
              <TreeItem nodeId="9" label={
                <ListItem button component="NavLink" to="">
                   <NavLink to="./limited_offer"  onClick={handleClose} className="list_sidebar"><ListItemText primary="Sponsored Products" style={{ "color": "black", "textDecoration": "none" }} /></NavLink><Icon icon="bxl:product-hunt" />
                </ListItem>}>
               

              </TreeItem>
              <TreeItem nodeId="10" label={
                <ListItem button component="NavLink" to="">
                  <NavLink to="./limited_offer"  onClick={handleClose} className="list_sidebar"><ListItemText primary="Limited Time Offers" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  <Icon icon="radix-icons:lap-timer" /></ListItem>}>
                

              </TreeItem>
              <TreeItem nodeId="11" label={
                <ListItem button component="NavLink" to="">
                   <NavLink to="./limited_offer"  onClick={handleClose} className="list_sidebar"><ListItemText primary="Apply Coupon" style={{ "color": "black", "textDecoration": "none" }} />
                   </NavLink><Icon icon="fluent:gift-card-16-regular" /></ListItem>}>
                

              </TreeItem>





            </TreeView>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }



  return (
    <>

      <nav class="navbar row">
        <div className="col-1">
          {options.map((props, idx) => (
            <OffCanvasExample key={idx} {...props} />
          ))}
        </div>

        <div class="logo col-3">
          <NavLink to="./">  <img src={window.location.origin + '/logo_slogn.png'} alt="logo" className="logomain" /></NavLink>

        </div>
        <div class="col-4 text_area_1" >
          <TextField id="standard-basic" label="Search Here" variant="standard" />
          <Button variant="outlined"><Icon icon="fluent:tag-search-24-regular" width={"1.5em"} /></Button>
        </div>
        <div className="col-2 group">
          <NavLink to="./deals" className="deal_class"><Icon icon="mdi:sale-outline" fontSize="35px" color="black" style={{ "marginTop": "10%" }} /></NavLink>
          <NavLink to="./wishlist"><img src={window.location.origin + '/wishlist.png'} /></NavLink>
          {/* <NavLink to="./signup"><img src={window.location.origin + '/resignup2.png'} /></NavLink> */}
          <div class="dropdown login_drop">
  <button class="dropbtn login_btn"><img src={window.location.origin + '/resignup2.png'} /></button>
  <div class="dropdown-content login_content">
    <NavLink to="./login">Login</NavLink>
    <NavLink to="./myprofile">My Profile</NavLink>
    <NavLink to="./signup">Sign Up</NavLink>
  </div>
</div>
          <NavLink to="./cart"><img src={window.location.origin + '/recart2.png'} /></NavLink>

        </div>


      </nav>
      <div className="row">
        <div className="second_nav">

          {/* <div class="dropdown seco-chnge">
            <button class="dropbtn">hey</button>
          
          </div> */}
          <div class="dropdown seco-chnge">
            <button class="dropbtn"><Icon icon="simple-icons:homeassistant" /> Home Decor </button>
            <div class="dropdown-content">
              <NavLink to="" >Wall Decoration</NavLink>
              <NavLink to="" >Painting</NavLink>
            </div>

          </div>
          <div class="dropdown">
            <NavLink to="./category/electric"> <button class="dropbtn"><Icon icon="map:electrician" /> Electronic
            </button></NavLink>
            <div class="dropdown-content">
              <NavLink to="./category/electric/laptops">Laptop</NavLink>
              <NavLink to="./category/electric">Mobile</NavLink>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn"><Icon icon="fluent:food-grains-24-filled" /> Grocery
            </button>
            <div class="dropdown-content">
              <NavLink to="" >Dairy Product</NavLink>
              <NavLink to="" >Snacks & Bevereges</NavLink>
              <NavLink to="" >House Hold</NavLink>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn"><Icon icon="ic:round-kitchen" /> Appliances
            </button>
            <div class="dropdown-content">
              <NavLink to="" >Seasonal  Appliances</NavLink>
              <NavLink to="" >kitchen Appliances</NavLink>

            </div>


          </div>

          <div class="dropdown">
            <button class="dropbtn"><Icon icon="mdi:face-woman-shimmer" /> Beauty & Toys
            </button>
            <div class="dropdown-content">
              <NavLink to="" >Beauty Products</NavLink>
              <NavLink to="" >Toys For Girls</NavLink>
              <NavLink to="" >Toys For Boys</NavLink>
            </div>


          </div>

          <div class="dropdown">
            <NavLink to="./category/clothing">   <button class="dropbtn"><Icon icon="map:clothing-store" /> Clothing
            </button></NavLink>
            <div class="dropdown-content">
              <NavLink to="./category/clothing">Men Ethanic Wear</NavLink>
              <NavLink to="./category/clothing">Men Weastern Wear</NavLink>
              <NavLink to="./category/clothing">Women Ethanic Wear</NavLink>
              <NavLink to="./category/clothing">Women Weastern Wear</NavLink>
            </div>

          </div>


          <div class="dropdown">
            <NavLink to="./category/acces" >  <button class="dropbtn"><Icon icon="file-icons:ring" /> Accesories
            </button></NavLink>
            <div class="dropdown-content">
              <NavLink to="" >Women  Accesories</NavLink>
              <NavLink to="" >Men Accesories</NavLink>

            </div>
          </div>
          <div class="dropdown">
            <NavLink to="./shoes" ><button class="dropbtn"><Icon icon="emojione-monotone:high-heeled-shoe" /> Footwear
            </button></NavLink>
            <div class="dropdown-content">
              <NavLink to="./shoes" >Women  Footwear</NavLink>
              <NavLink to="./shoes" >Men Footwear</NavLink>

            </div>

          </div>


        </div>

      </div>


    </>
  )

}
export default Navbar;