import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import './Navbar_Admin.css';
import { Icon } from '@iconify/react';
import { Button } from "@mui/material";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TreeItem, TreeView } from "@material-ui/lab";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const options = [
  {
    name: <Icon icon="quill:hamburger-sidebar" fontSize="1.5rem" />,
    scroll: false,
    backdrop: true,
  },
];
const Navbar_Admin = () => {
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
            <Offcanvas.Title className="offcanvas_title col-12"> <img src={window.location.origin + '/side_1.png'} className="sidebar_logo" /><button type="button" onClick={handleClose} className="close_sidebar" ><Icon icon="quill:hamburger-sidebar" /></button> </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <hr/>
            <TreeView>
              <TreeItem nodeId="1" label={
                <ListItem button component="" to="">
                  <NavLink to="./" onClick={handleClose} className="list_sidebar"><ListItemText primary="Dashbord "  style={{ "color": "black", "textDecoration": "none" }}/><Icon icon="ci:home-alt-outline" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                </ListItem>}>
              </TreeItem>
              
              <TreeItem nodeId="2" label={
                <ListItem button component="NavLink" to="">
                       <NavLink to="./profile" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Profile"  style={{ "color": "black", "textDecoration": "none" }}/><Icon icon="ep:user-filled" /></NavLink>
                </ListItem>}>
                
              </TreeItem>
              <TreeItem nodeId="3" label={
                <ListItem button component="NavLink" to="">
                       <NavLink to="./category" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Category"  style={{ "color": "black", "textDecoration": "none" }}/><Icon icon="bxs:category" /></NavLink>
                </ListItem>}>
                
              </TreeItem>
              <TreeItem nodeId="4" label={
                <ListItem button component="NavLink" to="">
                       <NavLink to="./subcategory" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Sub Category"  style={{ "color": "black", "textDecoration": "none" }}/><Icon icon="ic:baseline-category" /></NavLink>
                </ListItem>}>
                
              </TreeItem>
              <TreeItem nodeId="5" label={
                <ListItem button component="NavLink" to="">
                       <NavLink to="./products" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Products"  style={{ "color": "black", "textDecoration": "none" }}/><Icon icon="bxl:product-hunt" /></NavLink>
                </ListItem>}>
                
              </TreeItem>
              <TreeItem nodeId="5" label={
                <ListItem button component="NavLink" to="">
                       <NavLink to="./orders" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Orders" style={{ "color": "black", "textDecoration": "none" }} /><Icon icon="fontisto:shopping-bag-1" /></NavLink>
                </ListItem>}>
             
              </TreeItem>
              
              <TreeItem nodeId="7" label={
                <ListItem button component="NavLink" to="">
                       <NavLink to="./banner" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Banner Set" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                       <Icon icon="ph:flag-banner-fill" /></ListItem>}>
                

              </TreeItem>
              <TreeItem nodeId="8" label={
                <ListItem button component="NavLink" to="">
                       <NavLink to="./bestseller" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Best Seller" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                       <Icon icon="ant-design:fire-filled" /></ListItem>}>
                

              </TreeItem>
               <TreeItem nodeId="9" label={
                <ListItem button component="NavLink" to="">
                        <NavLink to="./discount" onClick={handleClose} className="list_sidebar"><ListItemText primary="Discount" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                        <Icon icon="teenyicons:discount-solid" /></ListItem>}>
                

              </TreeItem>  
              <TreeItem nodeId="6" label={
                <ListItem button component="NavLink" to="">
                       <NavLink to="./" onClick={handleClose} className="list_sidebar"> <ListItemText primary="Upcoming Earning" style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                  <Icon icon="emojione-monotone:money-bag" /></ListItem>}>
                

              </TreeItem>
         

            




            </TreeView>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }



  return (
    <>

      <nav class="navbar col-12 " >
        <div className="col-1">
          {options.map((props, idx) => (
            <OffCanvasExample key={idx} {...props} />
          ))}
        </div>

      <div className="col-1 admin_logo">
<NavLink to="./"><img src={window.location.origin + '/admin_logo_1502.png'}  /></NavLink>
      </div>
      <div className=" col-9 log_off">
    <NavLink to="./reg" style={{"marginRight":"3%"}} color="black"><span ><Icon icon="fa-solid:power-off" /></span></NavLink>
   <NavLink to="./profile"> <span ><Icon icon="fa-solid:user-cog" color="black"/></span></NavLink>

      </div>
       </nav>
<hr/>

    </>
  )

}
export default Navbar_Admin;