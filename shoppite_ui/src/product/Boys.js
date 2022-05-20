import React from "react";
import { Icon } from '@iconify/react';
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import Filtercheck from "../Mobile/Filtercheck";
export const Boys=()=>{
    return(
        <>
                <div className="row">
      <Filtercheck/>
 <div className=" col-md-9 col-xl-9 col-lg-9 col-sm-12 col-xs-12 col-12 laptops">

      
     <div class="card-group row ">
<div className="row women_page">
      <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps ">
    <img src={window.location.origin + '/hat_1.png'} alt="" />
  <NavLink to="./discript_boy"><div class="card-body row body_for_women link_css">
     <div className="col-12 compny_name">H & M</div> 
     <div className="col-12 pro_name">Cotton twill cap</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 399<s><Icon icon="fa6-solid:indian-rupee-sign" />899 </s></span></div> 
     <div className="col-12 offer_price">10% Off</div>
      
    </div></NavLink>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/hat_2.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">Ray Ban</div> 
     <div className="col-12 pro_name">Black Sunglasses</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 4999 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 8999</s></span></div> 
     <div className="col-12 offer_price">20% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/hat_3.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">Forest Essensial</div> 
     <div className="col-12 pro_name">Perfume For Mens</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 899<s><Icon icon="fa6-solid:indian-rupee-sign" /> 999</s></span></div> 
     <div className="col-12 offer_price">5% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/hat_4.png'} alt=""/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">Woovly</div> 
     <div className="col-12 pro_name">Custmized Wallet & Kitchen</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />699  </span></div> 
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