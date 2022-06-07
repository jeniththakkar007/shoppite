import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import Filterscheck from '../Mobile/Filtercheck';
import './Women.css';
import Footer from "../Footer";
import { NavLink } from "react-router-dom";

console.log("women");

 export const Women=()=>{
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
      <Filterscheck/>
 <div className=" col-md-9 col-xl-9 col-lg-9 col-sm-12 col-xs-12 col-12">

      
     <div class="card-group row ">
<div className="row women_page">
      <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/women1.png'} alt="" />
  <NavLink to="./discript">  <div class="card-body row body_for_women">
     <div className="col-12 compny_name">Biba</div> 
     <div className="col-12 pro_name">Light Green Kurti </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />4,500 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 5,400 </s></span></div> 
     <div className="col-12 offer_price">20% Off</div>
      
    </div></NavLink>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6">
    <img src={window.location.origin + '/women2.png'} alt=""/>
    <div class="card-body row">
     <div className="col-12 compny_name">FabIndia</div> 
     <div className="col-12 pro_name">Women printed  Purple Kurti </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,990 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 2,200 </s></span></div> 
     <div className="col-12 offer_price">10% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6">
    <img src={window.location.origin + '/women3.png'} alt=""/>
    <div class="card-body row">
     <div className="col-12 compny_name">FabIndia</div> 
     <div className="col-12 pro_name"> Kurti plazo with Duppta</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 2,599 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 3,000 </s></span></div> 
     <div className="col-12 offer_price">25% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6">
    <img src={window.location.origin + '/women4.png'} alt=""/>
    <div class="card-body row">
     <div className="col-12 compny_name">Pantaloons</div> 
     <div className="col-12 pro_name">Weastern Wear For Women</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 3599 </span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div>
  </div>
  </div>
  
  <div className="row women_page">
      <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/women5.png'} alt="" />
    <div class="card-body row body_for_women">
     <div className="col-12 compny_name">H & M</div> 
     <div className="col-12 pro_name">Red Dress party wear</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,599 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 1,999 </s></span></div> 
     <div className="col-12 offer_price">20% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6">
    <img src={window.location.origin + '/women6.png'} alt=""/>
    <div class="card-body row">
     <div className="col-12 compny_name">FabIndia</div> 
     <div className="col-12 pro_name">Kurta & Palazzo  Rayon </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,790 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 2,200 </s></span></div> 
     <div className="col-12 offer_price">10% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6">
    <img src={window.location.origin + '/women7.png'} alt=""/>
    <div class="card-body row">
     <div className="col-12 compny_name">Manyvar</div> 
     <div className="col-12 pro_name">Lengha Choli </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 25,999 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 30,000 </s></span></div> 
     <div className="col-12 offer_price">25% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6">
    <img src={window.location.origin + '/women8.png'} alt=""/>
    <div class="card-body row">
     <div className="col-12 compny_name">Pantaloons</div> 
     <div className="col-12 pro_name">Weastern Wear </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 3599 </span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div>
  </div>
  </div>
  <div className="row women_page">
      <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/women16.png'} alt="" />
    <div class="card-body row body_for_women">
     <div className="col-12 compny_name">H & M</div> 
     <div className="col-12 pro_name">Red Dress party wear</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,599 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 1,999 </s></span></div> 
     <div className="col-12 offer_price">20% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6">
    <img src={window.location.origin + '/women15.png'} alt=""/>
    <div class="card-body row">
     <div className="col-12 compny_name">FabIndia</div> 
     <div className="col-12 pro_name">Kurta & Palazzo  Rayon </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,790 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 2,200 </s></span></div> 
     <div className="col-12 offer_price">10% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6">
    <img src={window.location.origin + '/women14.png'} alt=""/>
    <div class="card-body row">
     <div className="col-12 compny_name">Manyvar</div> 
     <div className="col-12 pro_name">Lengha Choli </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 25,999 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 30,000 </s></span></div> 
     <div className="col-12 offer_price">25% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6">
    <img src={window.location.origin + '/women13.png'} alt=""/>
    <div class="card-body row">
     <div className="col-12 compny_name">Pantaloons</div> 
     <div className="col-12 pro_name">Weastern Wear</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 3599 </span></div> 
     {/* <div className="col-12 offer_price">20% Off</div> */}
      
    </div>
  </div>
  </div>
  <div className="row women_page">
      <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 ">
    <img src={window.location.origin + '/women12.png'} alt="" />
    <div class="card-body row body_for_women">
     <div className="col-12 compny_name">H & M</div> 
     <div className="col-12 pro_name">Red Dress party wear</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,599 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 1,999 </s></span></div> 
     <div className="col-12 offer_price">20% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6">
    <img src={window.location.origin + '/women11.png'} alt=""/>
    <div class="card-body row">
     <div className="col-12 compny_name">FabIndia</div> 
     <div className="col-12 pro_name">Kurta & Palazzo  Rayon </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,790 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 2,200 </s></span></div> 
     <div className="col-12 offer_price">10% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6">
    <img src={window.location.origin + '/women10.png'} alt=""/>
    <div class="card-body row">
     <div className="col-12 compny_name">Manyvar</div> 
     <div className="col-12 pro_name">Lengha Choli </div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 25,999 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 30,000 </s></span></div> 
     <div className="col-12 offer_price">25% Off</div>
      
    </div>
  </div>
  <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6">
    <img src={window.location.origin + '/women9.png'} alt=""/>
    <div class="card-body row">
     <div className="col-12 compny_name">Pantaloons</div> 
     <div className="col-12 pro_name">Weastern Wear</div>
     <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 3599 </span></div> 
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
   