import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './Cart.css';
import { Icon } from '@iconify/react';
import Footer from "./Footer";
import * as Endpoint from './End_point';
import InputNumber from 'rc-input-number';
const Cart=()=>{
  const [data ,setData]=useState([]);
  const [loading ,setLoading]=useState(undefined);
  const [completed ,setCompleteds]=useState(undefined);
  const [value, setValue] = React.useState(1);

var total_price=0;
  const [cartList, setcartList]= useState([]);
  useEffect(() =>{
      
      fetchcartList();
      
    },[1,1]);
    const fetchcartList = async() => {
      await fetch(Endpoint.CART+"/1" + "/1")
      .then(pd => pd.json())
      .then((cart_1) => setcartList(cart_1));  
  }
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
console.log(cartList);
// cartList.map((cart_1)=>)


const increment=(params)=> {
  var datacount = 0;
  var incCount = document.getElementById(params);
  console.log(incCount);
  datacount = parseInt(document.getElementById(params).value==""?0:document.getElementById(params).value);
 datacount = datacount + 1;
 document.getElementById(params).value= datacount;
}

//creation of decrement function
const decrement=(params)=> {
  var datacount = 0;
  var decCount = document.getElementById(params);
  console.log(decCount);
  datacount = parseInt(document.getElementById(params).value==""?0:document.getElementById(params).value);
 datacount = datacount - 1;
 document.getElementById(params).value = datacount;
}


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

  <section class="h-100 h-custom" style={{backgroundColor : "aliceblue"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style={{borderRadius: "15px"}}>
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-8">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                    <h6 class="mb-0 text-muted">{cartList.length} items</h6>
                  </div>
                  <hr class="my-4"/>
                {cartList.map((cart_1)=>(  
                  <>
                    <div class="row mb-4 d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={cart_1.cproduct_image}
                        class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <h6 class="text-black mb-0">{cart_1.cproduct_name}</h6>
                    </div>
                    <div class="input-group bootstrap-touchspin">
                      <span class="input-group-btn">
                        <button class="btn btn-default bootstrap-touchspin-down" type="button" onClick={()=>decrement("cart_"+cart_1.id)}>-</button>
                        </span>
                        <span class="input-group-addon bootstrap-touchspin-prefix" style={{"display": "none"}}>
                          </span>
                          <input type="text" name="" value={cart_1.prod_quantity} class="input-qty form-control text-center"  id={"cart_"+cart_1.id} style={{"display": "block"}}/>
                          <span class="input-group-addon bootstrap-touchspin-postfix" style={{"display": "none"}}>
                            </span>
                            <span class="input-group-btn">
                              <button class="btn btn-default bootstrap-touchspin-up" type="button" onClick={()=>increment("cart_"+cart_1.id)}>+</button>
                              </span>
                              </div>
          
                    
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 class="mb-0 sum_price"><Icon icon="mdi:currency-rupee" />{cart_1.cproduct_price}</h6>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 dustbin">
                    <Icon icon="fluent:delete-20-filled" />
                    </div>
                  </div>
                  
                  <hr class="my-4"/>
                  </>
                  ))}

              

                  

                
                </div>
              </div>
              <div class="col-lg-4 bg-grey">
                <div class="p-5">
                  <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr class="my-4"/>

                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="text-uppercase">items {cartList.length}</h5>
                    <h5><Icon icon="mdi:currency-rupee" />132</h5>
                  </div>

                  

                  <h5 class="text-uppercase mb-3">Give code</h5>

                  <div class="mb-5">
                    <div class="form-outline">
                      <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Examplea2">Enter your code</label>
                    </div>
                  </div>

                  <hr class="my-4"/>

                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Total price</h5>
                    <h5><Icon icon="mdi:currency-rupee" />137.00</h5>
                  </div>

                  <NavLink to="../"><button type="button" class="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">CHECK OUT</button></NavLink>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <Footer/> */}
</section>
{/* <Footer/> */}
<div className="cart_footer">
  <Footer/>
</div>
</>
               
               )
           }
            
            
           </>
       )
   }
   
export default Cart;