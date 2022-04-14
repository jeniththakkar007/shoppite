import React, {useEffect, useState} from "react";
import { Card, Form } from "react-bootstrap";
import { Icon } from '@iconify/react';
import { NavLink,useParams } from "react-router-dom";
import { getProduct } from "../services/products.service";

 export const Edit=()=>{

  const params = useParams();
  
      useEffect(()=> {
          getProduct(params.id)
          .then(res => {
              // console.log(res.data)
              document.getElementById("name-id").setAttribute("value",res.data.product_type_name);
              document.getElementById("description-id").setAttribute("value",res.data.product_type_description);
              document.getElementById("code-id").setAttribute("value",res.data.product_code);
              // document.getElementById("select-id").setAttribute("value",res.data.category_name);
              var optiondata= document.getElementsByClassName("option-id");
              let element = document.getElementById('select_id');
              element.value = res.data.category_value;
          })
          .catch(err =>{
              console.log(err.messeage)
          })
      }, [params.id])
 
     
    return(
        <>
          <div >
        <div className="head">
       <span ><b className="product">Edit Product</b></span> 
    
       </div>
       </div>
              
              <Card style={{ width: '95%' }}>
  <Card.Body>
  <Card.Title> <Icon icon="dashicons:edit-page"  color="black"/>Edit Field</Card.Title>
  
    
   <div className="container-fuild">
     <div className="row ">
       <div className="col-md-3 product-data">
         
<label>
    Select Category
</label>
</div>
<div className="col-md-9"> 
  <Form.Select className="select-category" id="select_id" >
  <option> Select Category</option>
  <option id="option-1" value="1">Home Decore</option>
  <option id="option-2" value="2">Electronic</option>
  <option id="option-3" value="3">Grocery</option>
  <option id="option-4" value="4">Appilances</option>
  <option id="option-5" value="5">Cloth</option>
  <option id="option-6" value="6">Beauty & Toys</option>
  <option id="option-7" value="7">Accesories & Footwear</option>
</Form.Select></div>
</div>
{/* row end */}<Form >

<div className="row product-info">
  <div className="col-md-3 product-data">
  <Form.Label>Product Name <Icon icon="line-md:question-circle-twotone"  color="black"/>    </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder="Product Name" id="name-id" className="Product-name"  />
  </div>
  </div>
  <div className="row product-info">
  <div className="col-md-3 product-data">
  <Form.Label >Product Description   <Icon icon="line-md:question-circle-twotone"  color="black" />  </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text"  placeholder="Product Description" id="description-id"   className="Product-name"   />
  </div>
</div>
<div className="row product-info">
<div className="col-md-3 product-data" >
  <Form.Label>Product Code    <Icon icon="line-md:question-circle-twotone"  color="black"/> </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder="Product Code" className="Product-name" id="code-id" />
  </div><div className="row">
            
            <NavLink to="../product"><button type="button" class="btn btn-primary search-button"><Icon icon="fluent:save-16-regular"/> Save</button></NavLink>
           </div>


</div>

            </Form>
            </div>
          
  </Card.Body>
  
</Card>

        </>
    )
    }