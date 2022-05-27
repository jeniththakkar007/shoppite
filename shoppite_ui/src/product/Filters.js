import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Icon } from '@iconify/react';
import './Filters.css';
import  {NavLink}  from "react-router-dom";
import { useNavigate } from 'react-router-dom' ;



const Filters=()=> {
  
        return(
            <>

{/* <div className="vl"></div> */}


  <ProSidebar className="col-md-2 col-xl-2 col-lg-2 filter_1">
  <Menu iconShape="square">
    <MenuItem >Filters</MenuItem>
    <SubMenu title="Clothings">
      <MenuItem> <input type="checkbox"/> For Men</MenuItem>
      <MenuItem> <input type="checkbox"/> For Women</MenuItem>
      <MenuItem> <input type="checkbox"/> For Kids</MenuItem>

    </SubMenu>
    <SubMenu title="Brands">
    <MenuItem> <input type="checkbox"/> Park Avenue</MenuItem>
      <MenuItem><input type="checkbox"/> Provogue</MenuItem>
      <MenuItem><input type="checkbox"/> Provogue</MenuItem>
      <MenuItem><input type="checkbox"/> Arrow</MenuItem>
      <MenuItem><input type="checkbox"/> Allen Solly</MenuItem>
      <MenuItem><input type="checkbox"/> Van Heusen</MenuItem>
      <MenuItem><input type="checkbox"/> Raymond</MenuItem>
      <MenuItem><input type="checkbox"/> Blackberry</MenuItem>
      <MenuItem><input type="checkbox"/> John Players</MenuItem>
      <MenuItem><input type="checkbox"/> fabindia</MenuItem>
      <MenuItem><input type="checkbox"/> Firstcry</MenuItem>
      <MenuItem><input type="checkbox"/> Myntra</MenuItem>
    </SubMenu>
    <SubMenu title="Customer Ratings">
      <MenuItem><input type="checkbox"/> 1<Icon icon="noto:star"/>  & above</MenuItem>
      <MenuItem><input type="checkbox"/> 2<Icon icon="noto:star"/>  & above</MenuItem>
      <MenuItem><input type="checkbox"/> 3<Icon icon="noto:star"/>  & above</MenuItem>
      <MenuItem><input type="checkbox"/> 4<Icon icon="noto:star"/>  & above</MenuItem>
      <MenuItem><input type="checkbox"/> 5<Icon icon="noto:star"/>  & above</MenuItem>


    </SubMenu>
    <SubMenu title="Price">
      <MenuItem>  <label for="vol">Select:- </label>
  <input type="range" id="vol" name="vol" min="0" max="50"/> </MenuItem>
   
    </SubMenu>
    <SubMenu title="Colours">
      <MenuItem><input type="checkbox"/> <Icon icon="twemoji:yellow-circle" /> Yellow</MenuItem>
      <MenuItem><input type="checkbox"/> <Icon icon="emojione:red-circle" /> Red</MenuItem>
      <MenuItem><input type="checkbox"/> <Icon icon="twemoji:white-circle" /> White</MenuItem>
      <MenuItem><input type="checkbox"/> <Icon icon="twemoji:green-circle" /> Green</MenuItem>
      <MenuItem><input type="checkbox"/> <Icon icon="twemoji:purple-circle" /> Purple</MenuItem>
      <MenuItem><input type="checkbox"/> <Icon icon="twemoji:blue-circle" /> Light Blue</MenuItem>
      <MenuItem><input type="checkbox"/> <Icon icon="emojione-v1:blue-circle" />  Dark Blue</MenuItem>

    </SubMenu>
    <SubMenu title="Discount">
      <MenuItem><input type="checkbox"/> 10% Discount</MenuItem>
      <MenuItem><input type="checkbox"/> 20% Discount</MenuItem>
      <MenuItem><input type="checkbox"/> 30% Discount</MenuItem>
      <MenuItem><input type="checkbox"/> 40% Discount</MenuItem>
      <MenuItem><input type="checkbox"/> 50% Discount & more</MenuItem>
    </SubMenu>
    <SubMenu title="Offers">
      <MenuItem><input type="checkbox"/> Buy 2 Get 1 Free</MenuItem>
      <MenuItem><input type="checkbox"/> Buy 4 Get 2 Free</MenuItem>
      <MenuItem><input type="checkbox"/> Buy 10 Get 4 Free</MenuItem>
      <MenuItem><input type="checkbox"/> Buy 20 Get 9 Free</MenuItem>
    </SubMenu>
    <SubMenu title="Avaliblity">
      <MenuItem><input type="checkbox"/> Available </MenuItem>
      <MenuItem><input type="checkbox"/> No Longer Available </MenuItem>
      <MenuItem><input type="checkbox"/> Last Stock </MenuItem>


    </SubMenu>
  </Menu>
  <NavLink to="/category/clothing" className="submit_btn"><button type="button" class="btn btn-outline-dark">Submit</button></NavLink>
</ProSidebar>

            
            </>
 
 )
        }
    

export default Filters;