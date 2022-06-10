import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { FaBoxOpen } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';
import { Icon } from '@iconify/react';
import { Button, TextField } from "@mui/material";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TreeItem, TreeView } from "@material-ui/lab";
import {ListItem} from '@material-ui/core';
import {ListItemText} from '@material-ui/core';
const options = [
    {
      name: <Icon icon="quill:hamburger-sidebar" fontSize="1.5rem" />,
      scroll: false,
      backdrop: true,
    },
];
 export const Sidebar_Admin = () => {
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
            <Offcanvas.Title className="offcanvas_title col-12"> <img src={window.location.origin + '/side_235.png'} className="sidebar_logo" /><button type="button" onClick={handleClose} className="close_sidebar" ><Icon icon="quill:hamburger-sidebar" /></button> </Offcanvas.Title>
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
                    <NavLink to="./" onClick={handleClose} className="list_sidebar"> <ListItemText primary="My Orders" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
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
                    <NavLink to="./discount" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Extra 25% OFF" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  </ListItem>}>
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="8" label={
                <ListItem button component="NavLink" to="">
                  <NavLink to="./gift" onClick={handleClose} className="list_sidebar"><ListItemText primary=" Most Gifted" style={{ "color": "black", "textDecoration": "none" }} /><Icon icon="carbon:gift" /></NavLink>
                </ListItem>}>

              </TreeItem>
              <TreeItem nodeId="9" label={
                <ListItem button component="NavLink" to="">
                  <NavLink to="./limited_offer" onClick={handleClose} className="list_sidebar"><ListItemText primary="Sponsored Products" style={{ "color": "black", "textDecoration": "none" }} /></NavLink><Icon icon="bxl:product-hunt" />
                </ListItem>}>


              </TreeItem>
              <TreeItem nodeId="10" label={
                <ListItem button component="NavLink" to="">
                  <NavLink to="./limited_offer" onClick={handleClose} className="list_sidebar"><ListItemText primary="Limited Time Offers" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  <Icon icon="radix-icons:lap-timer" /></ListItem>}>


              </TreeItem>
              <TreeItem nodeId="11" label={
                <ListItem button component="NavLink" to="">
                  <NavLink to="./limited_offer" onClick={handleClose} className="list_sidebar"><ListItemText primary="Apply Coupon" style={{ "color": "black", "textDecoration": "none" }} />
                  </NavLink><Icon icon="fluent:gift-card-16-regular" /></ListItem>}>


              </TreeItem>





            </TreeView>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  return(
      <>
       {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
      </>
  )
}