import React from "react";
import { Card, Form } from "react-bootstrap";
import { Icon } from '@iconify/react';
import './Add.css'
import {useNavigate}  from "react-router-dom";
import { createProduct } from "../services/products.service";
import Product from "./Product";


 export const AddProduct=()=>{
  const navigate = useNavigate();
    function Save(){
        var data = new Object();
        data.category_id =  document.getElementById('ddl_category').value;
        data.product_type_name =  document.getElementById('product_name').value;
        data.product_type_description =  document.getElementById('product_description').value;
        data.product_code =  document.getElementById('product_code').value;
        createProduct(data).then( 
          navigate('/product')
        )
    }
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
  <Form.Select className="select-category" id ="ddl_category">
  <option value="0"> Select Category</option>
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
  <Form.Label>Product Name    </Form.Label>
  
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder="Product Name" id="product_name" className="Product-name" />
  </div>
  </div>
  <div className="row product-info">
  <div className="col-md-3 product-data" >
  <Form.Label>Product Description  <Icon icon="line-md:question-circle-twotone"  color="black"/>  </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder="Product Description"  id="product_description" className="Product-name" />
  </div>
</div>
<div className="row product-info">
<div className="col-md-3 product-data">
  <Form.Label>Product Code    <Icon icon="line-md:question-circle-twotone"  color="black"/> </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder="Product Code" id="product_code" className="Product-name" />
  </div><div className="row">
            
            <button type="button" className="btn btn-primary search-button" onClick={Save}><Icon icon="fluent:save-16-regular"/> Save</button>
           </div>


</div>

            </Form>
            </div>
  </Card.Body>
  
</Card>

        </>
    )
}