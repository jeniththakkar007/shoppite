import { Box } from "@mui/material";
import { Icon } from '@iconify/react';
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Dashbord_Admin=()=>{
  
return(
     
    <>

  <div className="row">
                <div className="col-12">
                 <div className="wlc">  Welcome To Our Store!   <Icon icon="dashicons:store" /></div> 
                <Card>
                 {/* <Card.Header><Icon icon="wpf:statistics" color="black" /> Common statistics </Card.Header> */}
                    <Card.Body className="firstBoxBody">
                    <Card.Title style={{"marginBottom":"2%"}}> <Icon icon="wpf:statistics" color="black" />  Common statistics </Card.Title>

                        <div className="row">
                            <div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3  boxes  ">
                            <Box
                            sx={{
                                bgcolor: '#bdecf6',
                                boxShadow: 1,
                                borderRadius: 1,
                                p: 2,
                               
                            }}>
                        <div className="box-data-number">
                            55
                            <span className="box-data-icon"><Icon icon="ion:bag-check"  color="black" /></span>
                        </div>
                        <span>
                                Orders   
                        </span>
                        <div className="box-footer-1">
                               <NavLink className="info" to="./orders">More info</NavLink> 
                            </div>
                        </Box>
                            </div>
                            {/* SecondBox */}
                            <div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3  boxes" >
                            <Box
                            sx={{
                                bgcolor: '#f7f7a28c;',
                                boxShadow: 1,
                                borderRadius: 1,
                                p: 2,
                               
                            }}>
                        <div className="box-data-number">
                            8
                            <span className="box-data-icon"><Icon icon="bxs:category" color="black" /></span>
                        </div>
                        <span>
                                Home Page Design  
                        </span>
                        <div className="box-footer-2">
                               <NavLink className="info" to="./homedesign">More info</NavLink> 
                            </div>
                        </Box>
                            </div>
                            {/* ThirdBox */}
                            <div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3  boxes boxes" >
                            <Box
                            sx={{
                                bgcolor: '#ceffd4;',
                                boxShadow: 1,
                                borderRadius: 1,
                                p: 2,
                               
                            }}>
                        <div className="box-data-number">
                            15
                            <span className="box-data-icon"><Icon icon="ic:round-category"  color="black" /></span>
                        </div>
                        <span>
                               Subcategory
                        </span>
                        <div className="box-footer-3">
                               <NavLink className="info" to="./subcategory">More info</NavLink> 
                            </div>
                        </Box>
                            </div>
                            {/* FourthBox */}
                            <div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3  boxes" >
                            <Box
                            sx={{
                                bgcolor: '#f7b2b2;',
                                boxShadow: 1,
                                borderRadius: 1,
                                p: 2,
                               
                            }}>
                        <div className="box-data-number">
                            36
                            <span className="box-data-icon"><Icon icon="cib:product-hunt"  color="black" /></span>
                        </div>
                        <span>
                               Products  
                        </span>
                        <div className="box-footer-4" style={{"background":"#cf9595"}}>
                               <NavLink className="info" to="./products">More info</NavLink> 
                            </div>
                        </Box>
                            </div>
                            <div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3  boxes  ">
                            <Box
                            sx={{
                                bgcolor: '#e1c3e9',
                                boxShadow: 1,
                                borderRadius: 1,
                                p: 2,
                               
                            }}>
                        <div className="box-data-number">
                            5
                            <span className="box-data-icon"><Icon icon="ph:flag-banner-fill"   color="black" /></span>
                        </div>
                        <span>
                                 Add Banner  
                        </span>
                        <div className="box-footer-1" style={{"background":"#a679c6"}}>
                               <NavLink className="info" to="./banner">More info</NavLink> 
                            </div>
                        </Box>
                            </div>
                            <div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3  boxes  ">
                            <Box
                            sx={{
                                bgcolor: '#f2f2ff',
                                boxShadow: 1,
                                borderRadius: 1,
                                p: 2,
                               
                            }}>
                        <div className="box-data-number">
                            20
                            <span className="box-data-icon"><Icon icon="ant-design:fire-filled"  color="black" /></span>
                        </div>
                        <span>
                                Best Seller   
                        </span>
                        <div className="box-footer-1" style={{"background":"#979797"}}>
                               <NavLink className="info" to="./bestseller">More info</NavLink> 
                            </div>
                        </Box>
                            </div>
                            <div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3  boxes  ">
                            <Box
                            sx={{
                                bgcolor: '#c6ffe4',
                                boxShadow: 1,
                                borderRadius: 1,
                                p: 2,
                               
                            }}>
                        <div className="box-data-number">
                            15
                            <span className="box-data-icon"><Icon icon="teenyicons:discount-solid"   color="black" /></span>
                        </div>
                        <span>
                                Discount   
                        </span>
                        <div className="box-footer-1" style={{"background":"#8fde98"}}>
                               <NavLink className="info" to="./discount">More info</NavLink> 
                            </div>
                        </Box>
                            </div>
                            <div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3  boxes  ">
                            <Box
                            sx={{
                                bgcolor: '#eeb9d3f5',
                                boxShadow: 1,
                                borderRadius: 1,
                                p: 2,
                               
                            }}>
                        <div className="box-data-number">
                            65k
                            <span className="box-data-icon"><Icon icon="emojione-monotone:money-bag"   color="black" /></span>
                        </div>
                        <span>
                                Earning   
                        </span>
                        <div className="box-footer-1" style={{"background":"#ff9dd5"}}>
                               <NavLink className="info" to="./earning">More info</NavLink> 
                            </div>
                        </Box>
                            </div>
                           
                        </div> 
                    </Card.Body>
                </Card>
                </div>
                <div className="table-box">
                <Card className="table-card">
                    <Card.Body>
                        <Card.Title style={{"marginBottom":"2%"}}>  <Icon icon="carbon:recently-viewed" /> Recent orders</Card.Title>
                        <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Product Image</th>
        <th scope="col">Product Name</th>
        <th scope="col">Product Code</th>
        <th scope="col">Product Description</th>
        <th scope="col">Product Price</th>
        <th scope="col">Product Stock</th>
        <th scope="col">Product Quantity</th>
        <th scope="col">Available</th>
        <th scope="col">Action</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td><img src={window.location.origin + '/cat_1.png   '} /></td>
        <td>Laptop</td>
        <td>01</td>
        <td>Laptop power where electric current is used to energise equipment</td>
        <td>75,800</td>
        <td>In Stock</td>
        <td>200</td>
        <td><img src={window.location.origin + '/true.png   '} /></td>
        <NavLink to="./orders/view"><td className="action_xell" style={{"display":"flex"}}><button type="button" class="btn btn-outline-success"><Icon icon="akar-icons:eye" /></button></td></NavLink>
      
      </tr>
      <tr>
        <th scope="row">2</th>
        <td><img src={window.location.origin + '/cat_2.png   '} /></td>
        <td>Women Top</td>
        <td>02</td>
        <td> Women Top White color, Good material</td>
        <td>75,800</td>
        <td>In Stock</td>
        <td>200</td>
        <td><img src={window.location.origin + '/true.png   '} /></td>
        <NavLink to="./orders/view"><td className="action_xell" style={{"display":"flex"}}><button type="button" class="btn btn-outline-success"><Icon icon="akar-icons:eye" /></button></td></NavLink>

      
      </tr>
      <tr>
        <th scope="row">3</th>
        <td><img src={window.location.origin + '/cat_3.png   '} /></td>
        <td>Necklace</td>
        <td>03</td>
        <td>Necklace For Girls</td>
        <td>75,800</td>
        <td>In Stock</td>
        <td>200</td>
        <td><img src={window.location.origin + '/true.png   '} /></td>
        <NavLink to="./orders/view"><td className="action_xell" style={{"display":"flex"}}><button type="button" class="btn btn-outline-success"><Icon icon="akar-icons:eye" /></button></td></NavLink>

      
      </tr>
     
    </tbody>
  </table>
</div>
                    </Card.Body>
                </Card>
            </div> 
            </div> 
    </>
)
      
    

}