import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Filtercheck from "../Mobile/Filtercheck";
import { Icon } from '@iconify/react';


export const Limited_offer = () => {
    const [data ,setData]=useState([]);
    const [loading ,setLoading]=useState(undefined);
    const [completed ,setCompleteds]=useState(undefined);
 
 
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
 
     return (
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
 
 
 <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-xs-12 col-12 shoppite_best">
                 <img src={window.location.origin + '/limited_time_offer.png'} alt="shopite_best_seller" className="best_seller_ban" style={{ "width": "100%" }} />
             </div>
             <div className="row best_row">
                 <Filtercheck />
                 <div className=" col-md-9 col-xl-9 col-lg-9 col-sm-12 col-xs-12 col-12 laptops">
                     <div>
                         <img src={window.location.origin + '/offer_big_1.png'} alt="shopite_best_seller" className="best_seller_ban" style={{ "width": "100%" }} />
                     </div>
                     <div class="card-group row ">
                         <div className="row women_page">
                             <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps ">
                                 <img src={window.location.origin + '/limited_101.png'} alt="" />
                                 <NavLink to="./discript_women"><div class="card-body row body_for_women link_css">
                                     <div className="col-12 compny_name">Shopmart</div>
                                     <div className="col-12 pro_name">Magenta Color Suit</div>
                                     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />799</span></div>
                                     {/* <div className="col-12 offer_price">20% Off</div> */}
 
                                 </div></NavLink>
                             </div>
                             <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                 <img src={window.location.origin + '/limited_102.png'} alt="" />
                                 <NavLink to="./discript_women"><div class="card-body row link_css">
                                     <div className="col-12 compny_name">Shopmart</div>
                                     <div className="col-12 pro_name">Light Grey Suit</div>
                                     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />899</span></div>
                                     {/* <div className="col-12 offer_price">10% Off</div> */}
 
                                 </div></NavLink>
                             </div>
                             <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                 <img src={window.location.origin + '/limited_103.png'} alt="" />
                                 <NavLink to="./discript_women"><div class="card-body row link_css">
                                     <div className="col-12 compny_name">Shopmart</div>
                                     <div className="col-12 pro_name">Green WesternWear</div>
                                     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 999</span></div>
                                     {/* <div className="col-12 offer_price">25% Off</div> */}
 
                                 </div></NavLink>
                             </div>
                             <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                 <img src={window.location.origin + '/limited_104.png'} alt="" />
                                 <NavLink to="./discript_women"> <div class="card-body row link_css">
                                     <div className="col-12 compny_name">Shopmart</div>
                                     <div className="col-12 pro_name">Green Dress</div>
                                     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 799 </span></div>
                                     {/* <div className="col-12 offer_price">20% Off</div> */}
 
                                 </div></NavLink>
                             </div>
 
                         </div>
                     </div>
                     <div class="card-group row ">
                         <div className="row women_page">
                          
                             <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                 <img src={window.location.origin + '/limited_105.png'} alt="" />
                                <NavLink to="./discript_footwear"> <div class="card-body row link_css">
                                     <div className="col-12 compny_name">SSS</div>
                                     <div className="col-12 pro_name">Yellow Sandle</div>
                                     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />899</span></div>
                                     {/* <div className="col-12 offer_price">10% Off</div> */}
 
                                 </div></NavLink>
                             </div>
                             <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                 <img src={window.location.origin + '/limited_106.png'} alt="" />
                                 <NavLink to="./discript_footwear"><div class="card-body row link_css">
                                     <div className="col-12 compny_name">SSS</div>
                                     <div className="col-12 pro_name">Blue Sandle</div>
                                     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 899</span></div>
                                     {/* <div className="col-12 offer_price">25% Off</div> */}
 
                                 </div></NavLink>
                             </div>
                             <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                 <img src={window.location.origin + '/limited_107.png'} alt="" />
                                 <NavLink to="./discript_footwear"><div class="card-body row link_css">
                                     <div className="col-12 compny_name">SSS</div>
                                     <div className="col-12 pro_name">Pink Shoes</div>
                                     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 999 </span></div>
                                     {/* <div className="col-12 offer_price">20% Off</div> */}
 
                                 </div></NavLink>
                                 
                             </div>
                             <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                 <img src={window.location.origin + '/limited_108.png'} alt="" />
                                 <NavLink to="./discript_footwear"><div class="card-body row link_css">
                                     <div className="col-12 compny_name">ADIDAS</div>
                                     <div className="col-12 pro_name">Black Shoes</div>
                                     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 10,999 </span></div>
                                     {/* <div className="col-12 offer_price">20% Off</div> */}
 
                                 </div></NavLink>
                                 
                             </div>
 
                         </div>
                     </div>
                     <div className="row women">
                      <div className="col-md-6 col-xl-6 xol-lg-6 col-sm-12 col-xs-12 col-12">
                <img src={window.location.origin + '/limited_try_1.png'} alt="img1" style={{"width":"100%"}} />

            </div>
            <div className="col-md-6 col-xl-6 xol-lg-6 col-sm-12 col-xs-12 col-12">
                <img src="limited_try_2.gif" alt="img2" style={{"width":"100%"}}/>

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