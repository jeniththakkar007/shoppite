import React from "react";
import { Icon } from '@iconify/react';
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import Filtercheck from "../Mobile/Filtercheck";
export const Laptops=()=>{
    return(
        <>
                <div className="row">
      <Filtercheck/>
 <div className=" col-md-9 col-xl-9 col-lg-9 col-sm-12 col-xs-12 col-12 laptops">

      
     <div class="card-group row ">
<div className="row women_page">
      <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps ">
    <img src={window.location.origin + '/laps_1.png'} alt="" />
  <NavLink to="./discript_lap"><div class="card-body row body_for_women " style={{"textDecoration":"none"}}>
     <div className="col-12 compny_name">Lenovo</div> 
     <div className="col-12 pro_name">Lenovo  Yoga 2-in-1</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />85,000 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 88,999</s></span></div> 
     <div className="col-12 offer_price">20% Off</div>
      
    </div></NavLink>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/laps_2.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">HP</div> 
     <div className="col-12 pro_name">HP Laptop 15s-fq2626TU</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 74,999 <s><Icon icon="fa6-solid:indian-rupee-sign" />78,000 </s></span></div> 
     <div className="col-12 offer_price">10% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/laps_3.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">Lenovo</div> 
     <div className="col-12 pro_name">ThinkPad X1 Carbon Gen 9</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,08,000 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 1,20,000</s></span></div> 
     <div className="col-12 offer_price">25% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/laps_4.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">Apple</div> 
     <div className="col-12 pro_name"> Apple MacBook Air 13-inch </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,59,999 </span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div>
  </div>
  </div>
  
  <div className="row women_page">
      <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/laps_5.png'} alt="" />
    <div class="card-body row body_for_women link_css">
     <div className="col-12 compny_name">ASUS</div> 
     <div className="col-12 pro_name">ASUS X409  8th G</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 59,999 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 63,000 </s></span></div> 
     <div className="col-12 offer_price">20% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps" >
    <img src={window.location.origin + '/laps_6.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">Apple</div> 
     <div className="col-12 pro_name">Apple's new 12-inch MacBook </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,79,000 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 2,20,000</s></span></div> 
     <div className="col-12 offer_price">30% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/laps_7.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">HP</div> 
     <div className="col-12 pro_name">HP Pavilion 13</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />  71,999<s><Icon icon="fa6-solid:indian-rupee-sign" /> 75,000 </s></span></div> 
     <div className="col-12 offer_price">25% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/laps_8.png'} alt=""/>
    <div class="card-body row link_css " style={{"textDecoration":"none"}}>
     <div className="col-12 compny_name">HP</div> 
     <div className="col-12 pro_name">HP spectre folio 15</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,25,000 </span></div> 
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