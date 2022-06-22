import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import './Navbar.css';
import { FaBoxOpen } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';
import { Icon } from '@iconify/react';
import { Mob_nav } from "./Mobile/Mob_nav";
import Categryegory from "./Mobile/Category";
import { Button, TextField } from "@mui/material";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TreeItem, TreeView } from "@material-ui/lab";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Dropdown } from "react-bootstrap";
import { getAllCategory } from "./services/Category.service";
import * as Endpoint from "./End_point";
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

  
  const [categoryList, setcategoryList] = useState([])
  const [sidebarList, setsidebarList] = useState([])
  useEffect(() =>{
   
    fetchCategoryList();
    fetchSidebarMenuList();
  },[])

  const fetchCategoryList = async() => {
    await fetch(Endpoint.CATEGORY_NAV_BAR)
    .then(ctg => ctg.json())
    .then((category) => setcategoryList(category));  
}

  const fetchSidebarMenuList = async() => {
    await fetch(Endpoint.SIDEBAR_MENU)
    .then(sl => sl.json())
    .then((sidebarList) => setsidebarList(sidebarList))
  }

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
            <Offcanvas.Title className="offcanvas_title col-12"> <img src={window.location.origin + '/side_235.png'} className="sidebar_logo" /><button type="button" onClick={handleClose} className="close_sidebar" ><Icon icon="quill:hamburger-sidebar" /></button> </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {
              sidebarList.map(
                (sidebar) => (
                <TreeView>
              <TreeItem nodeId="1" label={
                <ListItem button component="" to="">
                  <NavLink to={sidebar.sidemenu_navlink} onClick={handleClose} className="list_sidebar"><ListItemText primary={sidebar.sidemenu_name} /><Icon icon={sidebar.icon_img} style={{ "color": "black", "textDecoration": "none" }} /></NavLink>
                </ListItem>}>
              </TreeItem>
              </TreeView>
              
                ))
            }

          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  if (!categoryList || categoryList.length == 0) return <div>Loading...</div>;

// console.log(categoryList);
// console.log(categoryList);
  return (
    <>

      <nav class="navbar row" style={{"--bs-gutter-x":"0rem" ,"--bs-gutter-y":"0rem"}}>
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
      <div className="row sec_nvbar_css">
        
      {/* <div className="shoppite_bank">
            <NavLink to="./reward"><img src={window.location.origin + ''} width="100%" alt="yedbkj" className="reward"/></NavLink>
          </div> */}
        <div className="second_nav col-12">
      
         {  
         categoryList.map(
        (category,index) => (
      <>
      <div class="dropdown seco-chnge">
            <button class="dropbtn"><Icon icon={category.category_image} /> {category.category_name} </button>
            <div class="dropdown-content">
            {
            
               categoryList[index].subCategoryList.map( 
               (item) => (
               <>
                 <NavLink to={{
                    pathname:'/products',
                 }}
                 state={{category_id: category.categoryId,sub_ctg_id :item.sub_category_id }} >{item.sub_ctg_name}</NavLink>
               </>)
             )
            }
          
            </div>
          </div>
      </>
      )
      )
          } 
          </div>
     
        

      </div>


    </>
  )

}
export default Navbar;