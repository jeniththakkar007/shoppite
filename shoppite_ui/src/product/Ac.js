import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import Filtercheck from "../Mobile/Filtercheck";
export const Ac=()=>{
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


                <div className="row">
      <Filtercheck/>
 <div className=" col-md-9 col-xl-9 col-lg-9 col-sm-12 col-xs-12 col-12 laptops">

      
     <div class="card-group row ">
<div className="row women_page">
      <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps ">
    <img src={window.location.origin + '/fridge_1.png'} alt="" />
  <NavLink to="./discript_lap"><div class="card-body row body_for_women link_css">
     <div className="col-12 compny_name">LG</div> 
     <div className="col-12 pro_name">LG Fridge</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />85,000 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 88,999</s></span></div> 
     <div className="col-12 offer_price">20% Off</div>
      
    </div></NavLink>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/fridge_2.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">Whirlpool</div> 
     <div className="col-12 pro_name">Whirlpool 3 Door Fridge</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 74,999 <s><Icon icon="fa6-solid:indian-rupee-sign" />78,000 </s></span></div> 
     <div className="col-12 offer_price">10% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/fridge_3.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">Lenovo</div> 
     <div className="col-12 pro_name">ThinkPad X1 Carbon Gen 9</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,08,000 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 1,20,000</s></span></div> 
     <div className="col-12 offer_price">25% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/fridge_4.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">SAMSUNG</div> 
     <div className="col-12 pro_name">SAMSUNG 3 Door Refridgerator</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,59,999 </span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div>
  </div>
  </div>
  

 

    </div>


</div>


</div>
<Footer/>

</>
               
               )
           }
            
            
           </>
       )
   }