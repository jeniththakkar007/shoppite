import React from "react";
import { Card, Form } from "react-bootstrap";
import { Icon } from '@iconify/react';
import './Add.css'
import { NavLink } from "react-router-dom";


 export const Add=()=>{
   
         
    return(
        <>
          <div >
        <div className="head">
       <span ><b className="product"> Add Products</b></span> 
    
       </div>
       </div>
              
              <Card style={{ width: '95%' }}>
  <Card.Body>
  <Card.Title> <Icon icon="mdi:information-variant" color="black"/>  Product info</Card.Title>
  
    
   <div className="container-fuild">
     <div className="row ">
       <div className="col-md-3 product-data">
<label>
    Select Category
</label>
</div>
<div className="col-md-9">
  <Form.Select className="select-category" >
  <option> Select Category</option>
  <option value="1">Home Decore</option>
  <option value="2">Electronic</option>
  <option value="3">Grocery</option>
  <option value="4">Appilances</option>
  <option value="5">Cloth</option>
  <option value="6">Beauty & Toys</option>
  <option value="7">Accesories & Footwear</option>
</Form.Select></div>
</div>
{/* row end */}<Form >

<div className="row product-info">
  <div className="col-md-3 product-data">
  <Form.Label>Product Name <Icon icon="line-md:question-circle-twotone"  color="black"/>    </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder="Product Name" className="Product-name" />
  </div>
  </div>
  <div className="row product-info">
  <div className="col-md-3 product-data" >
  <Form.Label>Product Description  <Icon icon="line-md:question-circle-twotone"  color="black"/>  </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder="Product Description" className="Product-name" />
  </div>
</div>
<div className="row product-info">
<div className="col-md-3 product-data">
  <Form.Label>Product Code    <Icon icon="line-md:question-circle-twotone"  color="black"/> </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder="Product Code" className="Product-name" />
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