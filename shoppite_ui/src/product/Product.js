import React, { useEffect, useState,useRef } from "react";
import { Icon } from '@iconify/react';
import Filterscheck from '../Mobile/Filtercheck';
import './Product.css';
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import {useLocation} from 'react-router-dom'
import * as Endpoint from "../End_point";


 export const Products=(props)=>{
  const [data ,setData]=useState([]);
  const [loading ,setLoading]=useState(undefined);
  const [completed ,setCompleteds]=useState(undefined);

  let location = useLocation();
  
  let endpoint  = Endpoint.PRODUCTLIST.replace("{0}",location.state.category_id);
  endpoint = endpoint.replace("{1}",location.state.sub_ctg_id);
  console.log(Endpoint.PRODUCTLIST+"/"+location.state.category_id+"/"+location.state.sub_ctg_id)
  const [productsList ,setproductsList]= useState([]);
  const [Bind, setBind] = useState(false);
  const mounted = useRef();

  useEffect(() =>{
      fetchProductsList();    
  },[location.state.category_id,location.state.sub_ctg_id]);
  const fetchProductsList = async() => {
    await fetch(Endpoint.PRODUCTLIST+"/"+location.state.category_id+"/"+location.state.sub_ctg_id)
    .then(pl => pl.json())
    .then((productsL) => setproductsList(productsL));  
}
  useEffect(()=>{
   setTimeout(()=>{
       
   fetch(Endpoint.PRODUCTLIST+"/"+location.state.category_id+"/"+location.state.sub_ctg_id)
   .then((response) => response.json())
   .then((json) =>{ 
   
   setData(json);
   setLoading(true);

   setTimeout(() => {
       setCompleteds(true)
       
   }, 1000);
  });
},2000);
  },[]);
    console.log(productsList)
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
      {/* <Filterscheck/> */}
 <div className=" col-md-12 col-xl-12 col-lg-12 col-sm-12 col-xs-12 col-12">

      
     <div class="card-group row ">
<div className="row women_page">
  {productsList.map((productsL)=>(
  <div class="card  col-md-2 col-xl-2 col-lg-2  col-sm-6 col-xs-6 col-6 ">
  <img src={window.location.origin +'/'+ productsL.product_image} alt="" />
<NavLink to={{
                    pathname:'/products/discript',
                 }}
                 state={{category_id: productsL.category_id,sub_ctg_id: productsL.sub_ctg_id,id: productsL.id }}>  <div class="card-body row body_for_women">
   <div className="col-12 compny_name">{productsL.company_name}</div> 
   <div className="col-12 pro_name">{productsL.product_name} </div>
   <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />{productsL.product_price}<s><Icon icon="fa6-solid:indian-rupee-sign" /> 5,400 </s></span></div> 
   <div className="col-12 offer_price">20% Off</div>
    
  </div></NavLink>
</div>
))}
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
   