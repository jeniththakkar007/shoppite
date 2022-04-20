import React from "react";
import { Card, Form } from "react-bootstrap";
import { Icon } from '@iconify/react';
import { NavLink, useNavigate } from "react-router-dom";

import { createSub_Product } from "../services/sub_product.service";


 export const AddSubproduct=()=>{
  const navigate = useNavigate();
  function Save_sub(){
    var sub_data = new Object();
      
      sub_data.product_id=document.getElementById('prodect-select').value;
      sub_data.category_id=document.getElementById('category-select').value;
      sub_data.sub_product_name=document.getElementById('subname-id').value;
      sub_data.sub_product_description=document.getElementById('subdes-id').value;
      sub_data.sub_product_price=document.getElementById('subpr-id').value;
      sub_data.sub_product_discount=document.getElementById('subdis-id').value;
      sub_data.sub_product_quantity=document.getElementById('subqn-id').value;
      sub_data.is_available=document.getElementById('avil').value;
      
      createSub_Product(sub_data).then(
        navigate('/subproduct')
      )
      }
    
         
    return(
        <>
          <div >
        <div className="head">
       <span ><b className="product"> Add  Sub Products</b></span> 
    
       </div>
       </div>
              
              <Card style={{ width: '95%' }}>
  <Card.Body>
  <Card.Title> <Icon icon="mdi:information-variant" color="black"/> Sub Product info</Card.Title>
  
    
   <div className="container-fuild">
     <div className="row ">
       <div className="col-md-3 product-data">
<label>
    Select Category
</label>
</div>
<div className="col-md-9">
  <Form.Select className="select-category" id="category-select" >
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
<div className="row ">
       <div className="col-md-3 product-data">
<label>
Select Product Type
</label>
</div>
<div className="col-md-9">
  <Form.Select className="select-category" id="prodect-select" >
  <option> Select Product Type</option>
   <option value="1">Wall Decore & Painting</option>
   <option value="2">Lighting</option>
   <option value="3">Laptop</option>
   <option value="4">Mobile</option>
   <option value="5">Dairy Products</option>
   <option value="6">HouseHold Products</option>
   <option value="7">Sancks & Bevereges</option>
   <option value="8">Seasonal Appliances</option>
</Form.Select></div>
</div>
{/* row end */}<Form >

<div className="row product-info">
  <div className="col-md-3 product-data">
  <Form.Label> Sub Product Name <Icon icon="line-md:question-circle-twotone"  color="black"/>    </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder=" Sub Product Name" id="subname-id"className="Product-name" />
  </div>
  </div>
  <div className="row product-info">
  <div className="col-md-3 product-data">
  <Form.Label> Sub Product Description <Icon icon="line-md:question-circle-twotone"  color="black"/>    </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder=" Sub Product Description" id="subdes-id" className="Product-name" />
  </div>
  </div>
  <div className="row product-info">
  <div className="col-md-3 product-data">
  <Form.Label> Sub Product Price <Icon icon="line-md:question-circle-twotone"  color="black"/>    </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder=" Sub Product Price"  id="subpr-id"className="Product-name" />
  </div>
  </div>
  <div className="row product-info">
  <div className="col-md-3 product-data">
  <Form.Label> Sub Product Discount <Icon icon="line-md:question-circle-twotone"  color="black"/>    </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder=" Sub Product Discount"  id="subdis-id"  className="Product-name" />
  </div>
  </div>
  <div className="row product-info">
  <div className="col-md-3 product-data" >
  <Form.Label> Sub Product Quantity  <Icon icon="line-md:question-circle-twotone"  color="black"/>  </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder=" Sub Product Quantity"id="subqn-id" className="Product-name" />
  </div>
</div>
<div className="row product-info">
<div className="col-md-3 product-data">
  <Form.Label>IS Available <Icon icon="line-md:question-circle-twotone"  color="black"/> </Form.Label>
  </div>
  <div className="col-md-9  select-pro">
  <Form.Control type="text" placeholder="true or false" id="avil" className="Product-name" />
  </div>
  <div class="col-md-3 product-data">
  <label for="formFileMultiple" class="form-label">Choose Photos</label>
  </div>
  <div className="col-md-9">
  <input class="form-control" type="file" id="formFileMultiple" multiple/>
</div>

  <div className="row">
            
            <button type="button" class="btn btn-primary search-button" onClick={Save_sub}><Icon icon="fluent:save-16-regular"/> Save</button>
           </div>
</div>
            </Form>
            </div>
  </Card.Body>
  
</Card>

        </>
    )
}