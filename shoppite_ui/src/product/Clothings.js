import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Filterscheck from '../Mobile/Filtercheck';
import './Clothings.css';
import { Icon } from '@iconify/react';
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
class Clothings extends React.Component{
    render(){
        return(
            <>
<div className="row"><Filterscheck/>
 <div className="col-md-9 col-xl-9 col-lg-9 col-sm-12 col-xs-12 col-12">
     <div className="clo_ban">
    <img src={window.location.origin + '/clo.gif'} alt="fgedg" className="clo_gif"/>

     </div>
     <div class="card-group row women">
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/img_card1.png'} alt="" className="flipcard"/>
    <NavLink to="./women"><div class="card-body row">
     <div className="col-12 compny_name">H & M</div> 
     <div className="col-12 pro_name">Red Dress party wear</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,599 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 1,999 </s></span></div> 
     <div className="col-12 offer_price">20% Off</div>
      
    </div></NavLink>
    
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/img_card2.png'} alt="" className="flipcard"/>
    <div class="card-body row">
     <div className="col-12 compny_name">FabIndia</div> 
     <div className="col-12 pro_name">Kurta and Palazzo Set Rayon </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,790 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 2,200 </s></span></div> 
     <div className="col-12 offer_price">10% Off</div>
      
    </div>
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/img_card3.png'} alt="" className="flipcard"/>
    <div class="card-body row">
     <div className="col-12 compny_name">Manyvar</div> 
     <div className="col-12 pro_name">Lengha Choli For Women</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 25,999 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 30,000 </s></span></div> 
     <div className="col-12 offer_price">25% Off</div>
      
    </div>
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/img_card4.png'} alt="" className="flipcard"/>
    <div class="card-body row">
     <div className="col-12 compny_name">Pantaloons</div> 
     <div className="col-12 pro_name">Weastern Wear For Women</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 3599 </span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div>
  </div>
  
</div>
<div className="women_sale_ban row">
<div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">   <img src={window.location.origin + '/tryy.gif'} className="wom_ban"/></div>
<div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">   <img src={window.location.origin + '/tryy2.gif'}  className="wom_ban"/></div>
</div>
<div class="card-group row men">
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/img_card5.png'} alt="" className="flipcard"/>
    <div class="card-body row">
       <div className="col-12 compny_name">Aellen Solly</div> 
     <div className="col-12 pro_name">Brown Jacket With Pent</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 3,299 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 3,499</s></span></div> 
     <div className="col-12 offer_price">5% Off</div>
      
    </div>
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/img_card6.png'} alt="" className="flipcard"/>
    <div class="card-body row">
     <div className="col-12 compny_name">Trends</div> 
     <div className="col-12 pro_name">Men Shorts With Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />2,599 </span></div> 

      
    </div>
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/img_card7.png'} alt="" className="flipcard"/>
    <div class="card-body row">
     <div className="col-12 compny_name">Libaas</div> 
     <div className="col-12 pro_name">Mens IndoWestern Wear</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />6,599 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 7,999 </s></span></div> 
     <div className="col-12 offer_price">30% Off</div>
      
    </div>
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/img_card8.png'} alt="" className="flipcard"/>
    <div class="card-body row">
     <div className="col-12 compny_name">Diwan Saheb</div> 
     <div className="col-12 pro_name">Mens Grooming Wear</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 45,000 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 49,999 </s></span></div> 
     <div className="col-12 offer_price">10% Off</div>    
    </div>
  </div>
  
</div>
<div className="women_sale_ban row">
<div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">   <img src={window.location.origin + '/tryy3.gif'} className="wom_ban"/></div>
<div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">   <img src={window.location.origin + '/tryy4.gif'}  className="wom_ban"/></div>
</div>
<div class="card-group row kids">
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/img_card9.png'} alt="" className="flipcard"/>
    <div class="card-body row">
     <div className="col-12 compny_name">FirstCry</div> 
     <div className="col-12 pro_name">Girls Shorts With Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,599 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 1,999 </s></span></div> 
     <div className="col-12 offer_price">20% Off</div>
      
    </div>
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/img_card10.png'} alt="" className="flipcard"/>
    <div class="card-body row">
     <div className="col-12 compny_name">Denim</div> 
     <div className="col-12 pro_name">Boys Winter Wear</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />1600<s><Icon icon="fa6-solid:indian-rupee-sign" /> 2,200 </s></span></div> 
     <div className="col-12 offer_price">10% Off</div>
      
    </div>
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/img_card11.png'} alt="" className="flipcard"/>
    <div class="card-body row">
     <div className="col-12 compny_name">Sukanya</div> 
     <div className="col-12 pro_name">Lengha  For Girls</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 2,599 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 3,000 </s></span></div> 
     <div className="col-12 offer_price">25% Off</div>
      
    </div>
  </div>
  <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/img_card12.png'} alt="" className="flipcard"/>
    <div class="card-body row">
     <div className="col-12 compny_name">FabIndia</div> 
     <div className="col-12 pro_name">Kurta for Boys</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 3599 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 4,000 </s></span></div> 
     <div className="col-12 offer_price">20% Off</div>
      
    </div>
  </div>
  
</div>
<div className="kids_sale_ban row">
<div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">  <img src={window.location.origin + '/tryy5.gif'} className="wom_ban "/></div>
<div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">  <img src={window.location.origin + '/tryy6.gif'}  className="wom_ban "/></div>
</div>

</div>
     
   
</div>



        <Footer/>    
            
            </>
        )
    }
} 
export default Clothings;