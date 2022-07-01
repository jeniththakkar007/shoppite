import React , { useEffect, useState }  from "react";
import { NavLink } from "react-router-dom";
import Filtercheck from "../Mobile/Filtercheck";
import { Icon } from '@iconify/react';
import Footer from "../Footer";
import { Loder } from "../Loder";

export const Offer_month = () => {
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
                <img src={window.location.origin + '/offer_month.png'} alt="shopite_best_seller" className="best_seller_ban" style={{ "width": "100%" }} />
            </div>
            <div className="row best_row">
      <Filtercheck/>
 <div className=" col-md-9 col-xl-9 col-lg-9 col-sm-12 col-xs-12 col-12 laptops">

      
     <div class="card-group row ">
<div className="row women_page">
      <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps ">
    <img src={window.location.origin + '/month_1.png'} alt="" />
  <NavLink to="./discript_lap"><div class="card-body row body_for_women link_css">
     <div className="col-12 compny_name">Sony</div> 
     <div className="col-12 pro_name">Camera</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />40,996</span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div></NavLink>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/month_2.png'} alt=""/>
    <NavLink to="./discript_lap"><div class="card-body row link_css">
     <div className="col-12 compny_name">Sony</div> 
     <div className="col-12 pro_name">Camera</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />58,656</span></div> 
     {/* <div className="col-12 offer_price">10% Off</div> */}
      
    </div></NavLink>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/month_3.png'} alt=""/>
    <NavLink to="./discript_lap"><div class="card-body row link_css">
     <div className="col-12 compny_name">Sony</div> 
     <div className="col-12 pro_name">Camera</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 93,121</span></div> 
     {/* <div className="col-12 offer_price">25% Off</div> */}
      
    </div></NavLink>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/month_4.png'} alt=""/>
    <NavLink to="./discript_lap"><div class="card-body row link_css">
     <div className="col-12 compny_name">Sony</div> 
     <div className="col-12 pro_name">Camera</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 78,235 </span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div></NavLink>
  </div>
  
  </div>
  

 

    </div>
    <div class="card-group row ">
<div className="row women_page">
      <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps ">
    <img src={window.location.origin + '/month_5.png'} alt="" />
  <NavLink to="./discript_lap"><div class="card-body row body_for_women link_css">
     <div className="col-12 compny_name">SHAIN</div> 
     <div className="col-12 pro_name">White Lining Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />499</span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div></NavLink>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/month_6.png'} alt=""/>
    <NavLink to="./discript_lap"><div class="card-body row link_css">
     <div className="col-12 compny_name">SHAIN</div> 
     <div className="col-12 pro_name">Boys Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />499</span></div> 
     {/* <div className="col-12 offer_price">10% Off</div> */}
      
    </div></NavLink>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/month_7.png'} alt=""/>
    <NavLink to="./discript_lap"><div class="card-body row link_css">
     <div className="col-12 compny_name">DLINGGER</div> 
     <div className="col-12 pro_name">Blue Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 499</span></div> 
     {/* <div className="col-12 offer_price">25% Off</div> */}
      
    </div></NavLink>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/month_8.png'} alt=""/>
    <NavLink to="./discript_lap"><div class="card-body row link_css">
     <div className="col-12 compny_name">DLINGGER</div> 
     <div className="col-12 pro_name">Green Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 499 </span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div></NavLink>
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
    <NavLink to="./discript_acc"><div class="card-body row link_css">
     <div className="col-12 compny_name">SHAIN</div> 
     <div className="col-12 pro_name">Boys Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />499</span></div> 
     {/* <div className="col-12 offer_price">10% Off</div> */}
      
    </div></NavLink>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/seller_111.png'} alt=""/>
    <NavLink to="./discript_acc"><div class="card-body row link_css">
     <div className="col-12 compny_name">DLINGGER</div> 
     <div className="col-12 pro_name">Blue Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 499</span></div> 
     {/* <div className="col-12 offer_price">25% Off</div> */}
      
    </div></NavLink>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
    <img src={window.location.origin + '/seller_112.png'} alt=""/>
    <NavLink to="./discript_acc"><div class="card-body row link_css">
     <div className="col-12 compny_name">DLINGGER</div> 
     <div className="col-12 pro_name">Green Tshirt</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 499 </span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div></NavLink>
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