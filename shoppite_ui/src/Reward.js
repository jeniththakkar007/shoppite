import React from "react";
import { Card } from "react-bootstrap";
import Footer from "./Footer";
import './Reward.css';
  export const Reward =()=>{
     return(
         <>
         <div className="row">
             <div className="col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 col-12 shop_bank_ban" style={{"marginBottom":"1%"}}>
                 <img src={window.location.origin + '/final_bank_ban.gif'}  style={{"width":"98%" , "margin":"auto"}}/>
             </div>
             <div  className="coins_cards" style={{"marginBottom":"1%","width":"98%" , "margin":"auto"}}>    
             <Card class="card coins_history col-md-3 col-xl-3 col-lg-3 col-sm-6 col-xs-6 col-6">
  <Card.Img variant="top" class="card_img_coins" src={window.location.origin + '/coin_1.png'} />
 
</Card>  
<Card class="card coins_history col-md-3 col-xl-3 col-lg-3 col-sm-6 col-xs-6 col-6">
  <Card.Img variant="top" class="card_img_coins" src={window.location.origin + '/coin_2.png'} />
 
</Card>  

<Card class="card coins_history col-md-3 col-xl-3 col-lg-3 col-sm-6 col-xs-6 col-6">
  <Card.Img variant="top" class="card_img_coins"  src={window.location.origin + '/coin_3.png'} />
 
</Card>


<Card class="card coins_history col-md-3 col-xl-3 col-lg-3 col-sm-6 col-xs-6 col-6">
  <Card.Img variant="top" class="card_img_coins" src={window.location.origin + '/coin_4.png'}  />
 
</Card>
                     

</div>
<div className="col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 col-12 shop_bank_ban" style={{"marginBottom":"1%"}}>
<img src={window.location.origin + '/extra_discount.gif'}  style={{"width":"90%" , "margin":"auto"}}/>
</div>
<div className="col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 col-12 shop_bank_ban" style={{"marginBottom":"1%"}}>
<img src={window.location.origin + '/trendy1.gif'}  style={{"width":"90%" , "margin":"auto"}}/>
</div>
<div className="col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 col-12 " style={{"marginBottom":"2%" }}>
<img src={window.location.origin + '/membership1.png'} className="member" style={{"width":"50%" , "margin":"auto" ,"display":"flex"}}/>
</div>
<div className="col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 col-12 " style={{"marginBottom":"2%" }}>
<img src={window.location.origin + '/benefit.png'} className="member" style={{"width":"80%" , "margin":"auto" ,"display":"flex"}}/>
</div>
         </div>
         <Footer/>
         
         </>
     )
 }