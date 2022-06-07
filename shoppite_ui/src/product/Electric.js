import React from "react";
import Filterscheck from '../Mobile/Filtercheck';
import { Icon } from '@iconify/react';
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import './Electric.css';
class Electric extends React.Component{
    render(){
        return(
            <>
<div className="row">
    <Filterscheck/>
    <div className="col-md-9 col-xl-9 col-lg-9 col-sm-12 col-xs-12 col-12">
    <div className="clo_ban">
    <img src={window.location.origin + '/iphone.gif'} alt="fgedg" className="iphone_gif"/>

     </div>
     <div class="card-group row women">
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/men5.png'} alt="" className="flipcard"/>
    <NavLink to="./laptops"><div class="card-body row link_css">
     <div className="col-12 compny_name">Lenovo</div> 
     <div className="col-12 pro_name">Lenovo IdeaPad Core i7 11th Gen - </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />91,000 <s><Icon icon="fa6-solid:indian-rupee-sign" />1,14,100 </s></span></div> 
     <div className="col-12 offer_price">5% Off</div>
      
    </div></NavLink>
    
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/men6.png'} alt="" className="flipcard"/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">HP</div> 
     <div className="col-12 pro_name">HP Envy Intel EVO Core i7 11th Gen</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />87,120 <s><Icon icon="fa6-solid:indian-rupee-sign" />90,000 </s></span></div> 
     <div className="col-12 offer_price">10% Off</div>
      
    </div>
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/men7.png'} alt="" className="flipcard"/>
    <div class="card-body row link_css" >
     <div className="col-12 compny_name">OnePlus</div> 
     <div className="col-12 pro_name">OnePlus U1S 65 inch</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />76,000 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 79,999 </s></span></div> 
     <div className="col-12 offer_price">25% Off</div>
      
    </div>
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/men8.png'} alt="" className="flipcard"/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">SAMSUNG</div> 
     <div className="col-12 pro_name">SAMSUNG Crystal 4K (55 inch) </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 96,000  </span></div> 
     <div className="col-12 offer_price">20% Off</div>
      
    </div>
  </div>
    </div>
    <div className="women_sale_ban row">
<div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">   <img src={window.location.origin + '/elc_try_3.gif'} className="wom_ban"/></div>
<div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">   <img src={window.location.origin + '/elc_try_4.gif'}  className="wom_ban"/></div>
     </div>
     <div class="card-group row women link_css">
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/men9.png'} alt="" className="flipcard"/>
    <NavLink to="./ac">  <div class="card-body row link_css" style={{"textDecoration":"none"}}>
    <div className="col-12 compny_name">Whirlpool</div> 
     <div className="col-12 pro_name">Whirlpool Air conditioner</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />29,000 <s><Icon icon="fa6-solid:indian-rupee-sign" />34,100 </s></span></div> 
     <div className="col-12 offer_price">5% Off</div>
      
    </div></NavLink>
    
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/men10.png'} alt="" className="flipcard"/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">Syska</div> 
     <div className="col-12 pro_name">Syska Air Cooler</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />25,000<s><Icon icon="fa6-solid:indian-rupee-sign" />29,999</s></span></div> 
     <div className="col-12 offer_price">10% Off</div>
      
    </div>
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/men11.png'} alt="" className="flipcard"/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">LG</div> 
     <div className="col-12 pro_name">LG 3 Door Refridgerator</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />76,000 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 79,999 </s></span></div> 
     <div className="col-12 offer_price">25% Off</div>
      
    </div>
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/men12.png'} alt="" className="flipcard"/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">ALEXA</div> 
     <div className="col-12 pro_name">Amazon Echo Dot 3rd Gen Alexa </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />2,599 </span></div> 
     <div className="col-12 offer_price">20% Off</div>
      
    </div>
  </div>
    </div>
    <div className="women_sale_ban row">
<div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">   <img src={window.location.origin + '/elc_try_5.gif'} className="wom_ban"/></div>
<div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">   <img src={window.location.origin + '/elc_try_6.png'}  className="wom_ban"/></div>
     </div>
     

     <div class="card-group row women">
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/men1.png'} alt="" className="flipcard"/>
    <NavLink to="./headphone"><div class="card-body row link_css" style={{"textDecoration":"none"}}>
    <div className="col-12 compny_name">Boat</div> 
     <div className="col-12 pro_name">Black Headphone</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 3,500 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 4,000 </s></span></div> 
     <div className="col-12 offer_price">5% Off</div>
      
    </div></NavLink>
    
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/men2.png'} alt="" className="flipcard"/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">JBL</div> 
     <div className="col-12 pro_name">JBL Blue Speaker </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,790 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 2,200 </s></span></div> 
     <div className="col-12 offer_price">10% Off</div>
      
    </div>
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/men3.png'} alt="" className="flipcard"/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">MI</div> 
     <div className="col-12 pro_name">MI Headsfree</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />498 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 799 </s></span></div> 
     <div className="col-12 offer_price">25% Off</div>
      
    </div>
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/men4.png'} alt="" className="flipcard"/>
    <div class="card-body row link_css">
     <div className="col-12 compny_name">NOISE</div> 
     <div className="col-12 pro_name">NOISE Air Buds</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 5,599  </span></div> 
     <div className="col-12 offer_price">20% Off</div>
      
    </div>
  </div>
  
    </div>
    <div className="women_sale_ban row">
<div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">   <img src={window.location.origin + '/elc_try_1.gif'} className="wom_ban"/></div>
<div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">   <img src={window.location.origin + '/elc_try_2.gif'}  className="wom_ban"/></div>
     </div>
        </div>



</div>



        <Footer/>    
            
            </>
        )
    }
} 
export default Electric;
