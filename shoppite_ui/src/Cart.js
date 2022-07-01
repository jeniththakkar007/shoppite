import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './Cart.css';
import { Icon } from '@iconify/react';
import Footer from "./Footer";
import * as Endpoint from './End_point';

const Cart=()=>{
  
  const [data ,setData]=useState([]);
  const [loading ,setLoading]=useState(undefined);
  const [completed ,setCompleteds]=useState(undefined);
  const [value, setValue] = React.useState(1);


  const [cartList, setcartList]= useState([]);
  const [userinfoData, setuserinfoData]= useState([]);
  
  useEffect(() =>{
      
      fetchcartList();
      fetchuserinfo();
      
    },[userinfoData.length]);
    const fetchcartList = async() => {
      await fetch(Endpoint.CART+"/"+localStorage.getItem('org_id') +"/"+ localStorage.getItem('id'))
      .then(pd => pd.json())
      .then((cart_1) => setcartList(cart_1));  
  }

  async function fetchuserinfo() {
    try{
    const response = await fetch(Endpoint.USERINFO+"/"+localStorage.getItem('org_id') +"/"+ localStorage.getItem('id'));
    const json = await response.json();
    setuserinfoData(json);
    setuser(json);
    }
    catch(err) {
      throw err;
      console.log(err);
    }
  }
  // const fetchuserinfo = async() =>{
  //   await fetch(Endpoint.USERINFO+"/"+localStorage.getItem('org_id') +"/"+ localStorage.getItem('id'))
  //   // .then(ui => ui.json())
  //   // .then((userInfo) => setuserinfoData(userInfo))
  //   // .then(ui=>setuser(ui));
  // }
  
  function setuser(ui)
  { 
    console.log(ui[0]);
    if(document.getElementById('pinData')){
    document.getElementById('pinData').value=ui[0].pincode;
    }
    // document.getElementById('addressData').setAttribute('value',ui[0].address_1);
  }
  const fetchElseCartList = async(pass,addprice)=>{
    // price_count(addprice,0,1);
    grandtotal(cartList);
    console.log(pass)
    await fetch(Endpoint.DELETECARTLIST+"/"+localStorage.getItem('org_id')+"/"+localStorage.getItem('id')+"/"+pass)
    .then(dwl => dwl.json())
    .then((dwish) => setcartList(dwish));
  }
  const fetchCartUpdateQuantity = async(item_id,setQuantity)=>{
    await fetch(Endpoint.UPDATECARTQUANTITY+"/"+localStorage.getItem('org_id')+"/"+localStorage.getItem('id')+"/"+item_id+"/"+setQuantity+"/")
    .then(uwl => uwl.json())
    .then((uwish) => setcartList(uwish));
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

var total_price =0;
var tp=0
const increment=(params,addprice,divPrice,item_id)=> {
  var datacount = 0;
  var incCount = document.getElementById(params);
  console.log(incCount);
  datacount = parseInt(document.getElementById(params).value==""?0:document.getElementById(params).value);
 datacount = datacount + 1;
// document.getElementById(params).value= datacount;
 
 if(datacount>=1){
  var setQuantity= document.getElementById(params).value = datacount;
  
  tp= document.getElementById(divPrice).innerHTML = addprice*datacount;
  // document.getElementById("sum_of_price").innerHTML =tp+total_price;
  // price_count(addprice,1,datacount);
  fetchCartUpdateQuantity(item_id,setQuantity);
  grandtotal(cartList);
 }
 else
 {
  document.getElementById(params).value = 1;
  tp= document.getElementById(divPrice).innerHTML =addprice;
  // document.getElementById("sum_of_price").innerHTML =tp+total_price;
  // price_count(addprice,1,datacount);
  // fetchCartUpdateQuantity(item_id,setQuantity);
  // grandtotal(cartList);
 }
}
const price_count=(tp,x,dt)=>{
  if(x==1 && dt>=1){
  total_price+=tp;
  }
  else if(x==0 && dt>=1)
  {
    total_price-=tp;
  }
  else
  {
    console.log("error in totalprice");
  }
  document.getElementById("sum_of_price").innerHTML =total_price;
}
const grandtotal=(items)=>{
var itemPrice = 0;
for (let index = 0; index < items.length; index++) {
  let element = (items[index].prod_quantity*items[index].cproduct_price);
  itemPrice = itemPrice+element
}
return itemPrice;
}
//creation of decrement function
const decrement=(params,addprice,divPrice,item_id)=> {
  var datacount = 0;
  var decCount = document.getElementById(params);
  console.log(decCount);
  datacount = parseInt(document.getElementById(params).value==""?0:document.getElementById(params).value);
 datacount = datacount - 1;
//  var tp=0;
 if(datacount>=1)
 {
  var setQuantity=  document.getElementById(params).value = datacount;
 tp= document.getElementById(divPrice).innerHTML = addprice*datacount;
//  document.getElementById("sum_of_price").innerHTML =tp+total_price;
// price_count(addprice,0,datacount);
fetchCartUpdateQuantity(item_id,setQuantity);
grandtotal(cartList);
 }
 else
 {
  document.getElementById(params).value = 1;
  tp= document.getElementById(divPrice).innerHTML = addprice;
  // document.getElementById("sum_of_price").innerHTML =tp+total_price;
  // price_count(addprice,0,datacount);
  // fetchCartUpdateQuantity(item_id,setQuantity);
  // grandtotal(cartList);
 }
}
console.log(userinfoData);

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
                        <button class="btn btn-default bootstrap-touchspin-down" type="button" onClick={()=>decrement("cart_"+cart_1.id,cart_1.cproduct_price,"sum_price_"+cart_1.id,cart_1.id)}>-</button>
                        </span>
                        <span class="input-group-addon bootstrap-touchspin-prefix" style={{"display": "none"}}>
                          </span>
                          <input type="text" name="" value={cart_1.prod_quantity} class="input-qty form-control text-center"  id={"cart_"+cart_1.id} style={{"display": "block"}}/>
                          <span class="input-group-addon bootstrap-touchspin-postfix" style={{"display": "none"}}>
                            </span>
                            <span class="input-group-btn">
                              <button class="btn btn-default bootstrap-touchspin-up" type="button" onClick={()=>increment("cart_"+cart_1.id,cart_1.cproduct_price,"sum_price_"+cart_1.id,cart_1.id)}>+</button>
                              </span>
                              </div>
          
                    
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                     <span><Icon icon="mdi:currency-rupee"/></span><span class="mb-0" id={"sum_price_"+cart_1.id}>{cart_1.prod_quantity*cart_1.cproduct_price}</span>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 dustbin"><button className="btn btn-outline-danger" onClick={()=>{fetchElseCartList(cart_1.id,Number(document.getElementById("sum_price_"+cart_1.id).innerText))}}><Icon icon="fluent:delete-20-filled" /></button>
                    
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
                    <h5 id="sum_of_price"><Icon icon="mdi:currency-rupee" />{grandtotal(cartList)}</h5>
                  </div>
                  <h6 class="text-uppercase mb-2">Country</h6>

<div class="mb-3">
<div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected disabled>India</option>
    
  </select>
  <label for="floatingSelect">Country</label>
</div>
  </div>
  <h6 class="text-uppercase mb-2">State</h6>

<div class="mb-3">
<div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected disabled>Gujarat</option>
    
  </select>
  <label for="floatingSelect">State</label>
</div>
  </div>
  <h6 class="text-uppercase mb-2">City</h6>

<div class="mb-3">
<div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected disabled>Ahmdabad</option>
    
  </select>
  <label for="floatingSelect">City</label>
</div>
  </div>
                  

                  <h6 class="text-uppercase mb-2">Address 1</h6>

                  <div class="mb-3">
                  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="addressData" style={{"height": "100px"}}></textarea>
  <label for="floatingTextarea2">Building Number/Society Name</label>
</div>
                  </div>
                  <h6 class="text-uppercase mb-2">Address 2</h6>

                  <div class="mb-3">
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{"height": "100px"}}>{userinfoData[0].address_2}</textarea>
                    <label for="floatingTextarea2">Near Landmark</label>
                  </div>
                    
                  </div>
                  <h6 class="text-uppercase mb-2">Pincode</h6>

                  <div class="mb-3">
                  <div class="form-floating">
  <input class="form-control" type="text" id="pinData" name="floatingTextarea2"/>
  <label for="floatingTextarea2">Enter Pincode</label>
</div>
                  </div>

<h6 class="text-uppercase mb-2">Order Method</h6>

<div class="mb-3">
<div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>COD (Cash On Delivey)</option>
    <option value="1">Online Payment</option>
  
  </select>
  <label for="floatingSelect">Order Method</label>
</div>
</div>
                  <hr class="my-4"/>

                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Total price</h5>
                    <h5><Icon icon="mdi:currency-rupee" />{grandtotal(cartList)}</h5>
                  </div>

                  <NavLink to="../"><button type="button" class="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">CHECK OUT</button></NavLink>
                  {/* <NavLink to="../payment"><button type="button" class="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">Check Out</button></NavLink> */}

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
  {/* <Footer/> */}
</div>
</>
               
               )
           }
            
            
           </>
       )
   }
   
export default Cart;