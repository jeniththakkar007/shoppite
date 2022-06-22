import React, { useEffect, useState } from "react";
import './Wishlist.css';
import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";
import * as Endpoint from "./End_point";


 export const Wishlist=()=>{
	const [data ,setData]=useState([]);
	const [loading ,setLoading]=useState(undefined);
	const [completed ,setCompleteds]=useState(undefined);
	const [wishList, setwishList]= useState([]);
        useEffect(() =>{
            
            fetchWishList();
            
          },[1,1]);
          const fetchWishList = async() => {
            await fetch(Endpoint.GETWISHLIST+"/"+1+"/"+1)
            .then(wl => wl.json())
            .then((wish) => setwishList(wish));  
        }

		const fetchElseWishList = async(pass)=>{
			console.log(pass)
			await fetch(Endpoint.DELETEWISHLIST+"/"+1+"/"+1+"/"+pass)
			.then(dwl => dwl.json())
			.then((dwish) => setwishList(dwish));
		}
 
	useEffect(()=>{
	 setTimeout(()=>{
		 
	 fetch('https://jsonplaceholder.typicode.com/posts')
	 .then((response) => response.json())
	 .then((json) =>{ 
	 // console.log(json);
	 setData(json);
	 setLoading(true);
 
	 setTimeout(() => {
		 setCompleteds(true)
		 
	 }, 1000);
	});
 },2000);
	},[]);
	console.log(wishList);
    return(
        <>
		 { !completed ? ( 
          <>
          {! loading ? ( 
              <div className="row img_css" >
                  
                  <div  className="back-blur" >
                  
                <img src={window.location.origin + '/cart_loder.gif'}  className="img_loader"/>
              
                  </div>
               
                  </div>


          ):''}
              </>
            ):(

               
               <>
        	<div class="cart-wrap">
		<div class="container">
	        <div class="row">
			    <div class="col-md-12">
			        <div class="main-heading mb-10">My wishlist</div>
			        <div class="table-wishlist">
				        <table cellpadding="0" cellspacing="0" border="0" width="100%">
				        	<thead>
					        	<tr>
					        		<th width="40%">Product Name</th>
					        		<th width="15%">Unit Price</th>
					        		<th width="25%">Remove Item</th>
					        		<th width="15%">Go To Cart</th>
					        		{/* <th width="10%"></th> */}
					        	</tr>
					        </thead>
					        <tbody>
								{wishList.map((wish)=>(
									<tr>
					        		<td width="45%">
					        			<div class="display-flex align-center">
		                                    <div class="img-product">
		                                        <img src={wish.wproduct_image} alt="" class="mCS_img_loaded"/>
		                                    </div>
		                                    <div class="name-product">
		                                        {wish.wproduct_name}
		                                    </div>
	                                    </div>
	                                </td>
					        		<td width="15%" class="price"> <Icon icon="fa6-solid:indian-rupee-sign" />{wish.wproduct_price}</td>
					        		<td width="15%" style={{"paddingLeft":"2%" }}><button className="btn btn-outline-danger" onClick={()=>{fetchElseWishList(wish.id)}}><Icon icon="fluent:delete-20-filled" /></button></td>
					        		<NavLink to="./cart"><td width="15%"><button class="round-black-btn small-btn"><Icon icon="el:shopping-cart-sign" /></button></td></NavLink>
					        		<td width="10%" class="text-center"><a href="#" class="trash-icon"><i class="far fa-trash-alt"></i></a></td>
					        	</tr>
								))}
					        	{/* <tr>
					        		<td width="45%">
					        			<div class="display-flex align-center">
		                                    <div class="img-product">
		                                        <img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" alt="" class="mCS_img_loaded"/>
		                                    </div>
		                                    <div class="name-product">
		                                        Apple iPad Mini
		                                    </div>
	                                    </div>
	                                </td>
					        		<td width="15%" class="price"> <Icon icon="fa6-solid:indian-rupee-sign" />110.00</td>
					        		<td width="15%"><span class="in-stock-box">In Stock</span></td>
					        		<NavLink to="./cart"><td width="15%"><button class="round-black-btn small-btn"><Icon icon="el:shopping-cart-sign" /></button></td></NavLink>
					        		<td width="10%" class="text-center"><a href="#" class="trash-icon"><i class="far fa-trash-alt"></i></a></td>
					        	</tr>
					        	<tr>
					        		<td width="45%">
					        			<div class="display-flex align-center">
		                                    <div class="img-product">
		                                        <img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" alt="" class="mCS_img_loaded"/>
		                                    </div>
		                                    <div class="name-product">
		                                        Apple iPad Mini
		                                    </div>
	                                    </div>
	                                </td>
					        		<td width="15%" class="price"> <Icon icon="fa6-solid:indian-rupee-sign" />110.00</td>
					        		<td width="15%"><span class="in-stock-box">In Stock</span></td>
                                    <NavLink to="./cart">	<td width="15%"><button class="round-black-btn small-btn"><Icon icon="el:shopping-cart-sign" /></button></td></NavLink>
					        		<td width="10%" class="text-center"><a href="#" class="trash-icon"><i class="far fa-trash-alt"></i></a></td>
					        	</tr>
					        	<tr>
					        		<td width="45%">
					        			<div class="display-flex align-center">
		                                    <div class="img-product">
		                                        <img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" alt="" class="mCS_img_loaded"/>
		                                    </div>
		                                    <div class="name-product">
		                                        Apple iPad Mini
		                                    </div>
	                                    </div>
	                                </td>
					        		<td width="15%" class="price"><Icon icon="fa6-solid:indian-rupee-sign" />110.00</td>
					        		<td width="15%"><span class="in-stock-box">In Stock</span></td>
					        		<NavLink to="./cart"><td width="15%"><button class="round-black-btn small-btn"><Icon icon="el:shopping-cart-sign" /></button></td></NavLink>
					        		<td width="10%" class="text-center"><a href="#" class="trash-icon"><i class="far fa-trash-alt"></i></a></td>
					        	</tr> */}
				        	</tbody>
				        </table>
				    </div>
			    </div>
			</div>
		</div>
	</div>
	</>
               
			   )
		   }
			
			
		   </>
	   )
   }
   