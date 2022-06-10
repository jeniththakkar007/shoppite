import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Filtercheck from "../Mobile/Filtercheck";
import { Icon } from '@iconify/react';
import Footer from "../Footer";

export const Newrelease = () => {
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
                <img src={window.location.origin + '/new_release.png'} alt="shopite_best_seller" className="best_seller_ban" style={{ "width": "100%" }} />
            </div>
            <div className="row best_row">
      <Filtercheck/>
 <div className=" col-md-9 col-xl-9 col-lg-9 col-sm-12 col-xs-12 col-12 laptops">

      
     <div class="card-group row ">
<div className="row women_page">
      <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps ">
    <img src={window.location.origin + '/seller_113.png'} alt="" />
  <NavLink to="./discript_lap"><div class="card-body row body_for_women link_css">
     <div className="col-12 compny_name">SHAIN</div> 
     <div className="col-12 pro_name">Flower Print Top</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />499</span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div></NavLink>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/seller_114.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">SHAIN</div> 
     <div className="col-12 pro_name">Red top</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />499</span></div> 
     {/* <div className="col-12 offer_price">10% Off</div> */}
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/seller_115.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">SHAIN</div> 
     <div className="col-12 pro_name">Green top</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 499</span></div> 
     {/* <div className="col-12 offer_price">25% Off</div> */}
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/seller_116.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">SHAIN</div> 
     <div className="col-12 pro_name">Full Sleeve Top</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 499 </span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div>
  </div>
  
  </div>
  

 

    </div>
    <div class="card-group row ">
<div className="row women_page">
      <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps ">
    <img src={window.location.origin + '/seller_117.png'} alt="" />
  <NavLink to="./discript_boy"><div class="card-body row body_for_women link_css">
     <div className="col-12 compny_name">SHAIN</div> 
     <div className="col-12 pro_name">White Lining Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />499</span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div></NavLink>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/seller_118.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">SHAIN</div> 
     <div className="col-12 pro_name">Boys Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />499</span></div> 
     {/* <div className="col-12 offer_price">10% Off</div> */}
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/seller_119.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">DLINGGER</div> 
     <div className="col-12 pro_name">Blue Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 499</span></div> 
     {/* <div className="col-12 offer_price">25% Off</div> */}
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/seller_120.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">DLINGGER</div> 
     <div className="col-12 pro_name">Green Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 499 </span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div>
  </div>
  
  </div>
  

 

    </div>
    <div class="card-group row ">
<div className="row women_page">
      <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps ">
    <img src={window.location.origin + '/seller_109.png'} alt="" />
  <NavLink to="./discript_acc"><div class="card-body row body_for_women link_css">
     <div className="col-12 compny_name">SHAIN</div> 
     <div className="col-12 pro_name">White Lining Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />499</span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div></NavLink>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/seller_110.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">SHAIN</div> 
     <div className="col-12 pro_name">Boys Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />499</span></div> 
     {/* <div className="col-12 offer_price">10% Off</div> */}
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/seller_111.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">DLINGGER</div> 
     <div className="col-12 pro_name">Blue Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 499</span></div> 
     {/* <div className="col-12 offer_price">25% Off</div> */}
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/seller_112.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">DLINGGER</div> 
     <div className="col-12 pro_name">Green Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 499 </span></div> 
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
   
   