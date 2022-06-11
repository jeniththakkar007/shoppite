import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Mob_nav.css';
import { Icon } from '@iconify/react';
import { Button, TextField } from "@mui/material";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TreeItem, TreeView } from "@material-ui/lab";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FaBoxOpen } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';
const options = [
  {
    name: <Icon icon="quill:hamburger-sidebar" fontSize="1.5rem" />,
    scroll: false,
    backdrop: true,
  }
];

export const Mob_nav = () => {
  function Example({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow(true);
    return (
      <>
        <Button variant="primary" onClick={toggleShow} className="me-2">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props} className="mob_offcanvas">
          <Offcanvas.Header >
            <Offcanvas.Title className="offcanvas_title col-12"> <img src={window.location.origin + '/mob_logo_slogn.png'} className="sidebar_logo" /><button type="button" onClick={handleClose} className="close_sidebar" ><Icon icon="quill:hamburger-sidebar" /></button> </Offcanvas.Title>
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
                  <NavLink to="./cart" onClick={handleClose} className="list_sidebar"><ListItemText primary="My Orders" style={{ "color": "black", "textDecoration": "none" }} /><FaBoxOpen /></NavLink>
                </ListItem>}>

              </TreeItem>
              <TreeItem nodeId="3" label={
                <ListItem button component="NavLink" to="">
                  <ListItemText primary="Trendings" /><AiFillFire />
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
                    <NavLink to="./category/acces" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Accesories" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
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
                    <NavLink to="./myprofile" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Edit My Account" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>

                <TreeItem nodeId="21" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./myprofile" onClick={handleClose} className="list_sidebar"> <ListItemText primary="My Addresses" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>
                <TreeItem nodeId="22" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./cart" onClick={handleClose} className="list_sidebar"> <ListItemText primary="My Cart" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>
                <TreeItem nodeId="23" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./wishlist" onClick={handleClose} className="list_sidebar"> <ListItemText primary="My Wishlist" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>
                <TreeItem nodeId="24" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./cart" onClick={handleClose} className="list_sidebar"> <ListItemText primary="My Orders" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem>
                {/* <TreeItem nodeId="25" label={
                  <ListItem button component="NavLink" to="">
                    <NavLink to="./review"  onClick={handleClose}  className="list_sidebar"> <ListItemText primary="My Reviews" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>

                </TreeItem> */}




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
                    <NavLink to="./discount" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Extra 25% OFF" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="8" label={
                <ListItem button component="NavLink" to="">
                  <NavLink to="./gift" onClick={handleClose} className="list_sidebar"  ><ListItemText primary=" Most Gifted" style={{ "color": "black", "textDecoration": "none" }} /><Icon icon="carbon:gift" /></NavLink>
                </ListItem>}>

              </TreeItem>
              <TreeItem nodeId="9" label={
                <ListItem button component="NavLink" to="">
                  <NavLink to="./limited_offer" onClick={handleClose} className="list_sidebar" style={{ "display": "block" }}><ListItemText primary="Sponsored Products" style={{ "color": "black", "textDecoration": "none" }} /></NavLink> <Icon icon="bxl:product-hunt" />
                </ListItem>}>


              </TreeItem>
              <TreeItem nodeId="10" label={
                <ListItem button component="NavLink" to="">
                  <NavLink to="./limited_offer" onClick={handleClose} className="list_sidebar" style={{ "display": "block" }}><ListItemText primary="Limited Time Offers" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  <Icon icon="radix-icons:lap-timer" /></ListItem>}>


              </TreeItem>
              <TreeItem nodeId="11" label={
                <ListItem button component="NavLink" to="">
                  <NavLink to="./limited_offer" onClick={handleClose} className="list_sidebar" style={{ "display": "block" }}><ListItemText primary="Apply Coupon" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  <Icon icon="fluent:gift-card-16-regular" /></ListItem>}>


              </TreeItem>





            </TreeView>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }



  return (
    <>
      <div className="row">
        <nav class="navbar_mob col-12">
          {options.map((props, idx) => (
            <Example key={idx} {...props} />
          ))}


          <div class="logo col-sm-6 col-xs-6 col-6">
            <NavLink to="./">  <img src={window.location.origin + '/mob_slogn.png'} alt="logo" className="logo_main" /></NavLink>
          </div>


          <div class="group">

            <div class="dropdown login_drop">
              <button class="dropbtn login_btn"><img src={window.location.origin + '/mob_sign1.png'} /></button>
              <div class="dropdown-content login_content">
                <NavLink to="./signup">Sign Up</NavLink>
                <NavLink to="./login">Login</NavLink>
                <NavLink to="./myprofile">My Profile</NavLink>
              </div>
            </div>
          </div>
          <NavLink to="./reward" class="item">
            <div class="group ">

              <img src={window.location.origin + '/shopite_bank_mob.png'} className="bank" />

            </div>
          </NavLink>


          <NavLink to="./cart" class="item">
            <div class="group ">

              <img src={window.location.origin + '/recart.png'} className="mob_cart" />

            </div>
          </NavLink>
        </nav>
        {/* <div className="col-12 mobile_second_navbar" > */}
        {/* <div className="row mob_sec_nav"> <div class="item search right" tabindex="0">
          <div class="search-group">

            <form class="form-inline ">
              <input class="form-control col-6" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success col-2" type="submit"><Icon icon="fe:search" /></button>
            </form>

          </div>
        </div>
{/* </div> */}
        {/* <div class="text_area2" >
          <TextField id="standard_basic1" label="Search Here" variant="standard" />
          <Button variant="outlined"><Icon icon="fluent:tag-search-24-regular" width={"1.5em"} /></Button>
        </div> */}
        {/* </div> */}
      
          <div className="s2nd row">
        <div class="input-group">
  <input type="search" class="form-control rounded col-sm-6 col-xs-6 col-6" placeholder="Search" />
  <button type="button" class="btn btn-outline-dark button_filled col-sm-2 col-xs-2 col-2" style={{"margin":"0px"}}><Icon icon="fluent:search-24-filled" /></button>
</div>
</div>
       
       
       
          <div className="col-sm-12 col-xs-12 col-12 mob_third_nav">

            <NavLink className="third_navlink col-sm-3 col-xs-3 col-3 " to="./category"><Icon icon="bxs:category" className="cat_icon" /> Category </NavLink>
            <NavLink className="third_navlink col-sm-3 col-xs-3 col-3 " to="./wishlist"> <Icon icon="bi:bag-heart" /> Wishlist </NavLink>
            <NavLink className="third_navlink col-sm-3 col-xs-3 col-3 " to="./deals"><Icon icon="mdi:sale-outline" /> Deals </NavLink>


          </div>
        
        </div>
    





    </>
  )

}

