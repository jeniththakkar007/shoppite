import React from "react";
import { Card, Form } from "react-bootstrap";
import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";
// import DropboxChooser from 'react-dropbox-chooser';


 export const AddSubproduct=()=>{
    // Save(){ 

    // }
         
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
<div className="row ">
       <div className="col-md-3 product-data">
<label>
Select Product Type
</label>
</div>
<div className="col-md-9">
  <Form.Select className="select-category" >
  <option> Select Product Type</option>
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
  <Form.Label> Sub Product Name <Icon icon="line-md:question-circle-twotone"  color="black"/>    </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder=" Sub Product Name" className="Product-name" />
  </div>
  </div>
  <div className="row product-info">
  <div className="col-md-3 product-data">
  <Form.Label> Sub Product Description <Icon icon="line-md:question-circle-twotone"  color="black"/>    </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder=" Sub Product Description" className="Product-name" />
  </div>
  </div>
  <div className="row product-info">
  <div className="col-md-3 product-data">
  <Form.Label> Sub Product Price <Icon icon="line-md:question-circle-twotone"  color="black"/>    </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder=" Sub Product Price" className="Product-name" />
  </div>
  </div>
  <div className="row product-info">
  <div className="col-md-3 product-data">
  <Form.Label> Sub Product Discount <Icon icon="line-md:question-circle-twotone"  color="black"/>    </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder=" Sub Product Discount" className="Product-name" />
  </div>
  </div>
  <div className="row product-info">
  <div className="col-md-3 product-data" >
  <Form.Label> Sub Product Quantity  <Icon icon="line-md:question-circle-twotone"  color="black"/>  </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder=" Sub Product Quantity" className="Product-name" />
  </div>
</div>
<div className="row product-info">
<div className="col-md-3 product-data">
  <Form.Label>IS Available <Icon icon="line-md:question-circle-twotone"  color="black"/> </Form.Label>
  </div>
  <div className="col-md-9  select-pro">
  <Form.Control type="text" placeholder="true or false" className="Product-name" />
  </div>
  <div class="col-md-3 product-data">
  <label for="formFileMultiple" class="form-label">Choose Photos</label>
  </div>
  <div className="col-md-9">
  <input class="form-control" type="file" id="formFileMultiple" multiple/>
</div>
  {/* <div className="col-md-3 product-data" >

<label for="img" className="img-select">Select images</label>
</div>
<div className="col-md-9 required">
<input type="file" id="files" name="files" multiple="true"/>
  {/* <input type="submit"/> */}

  {/* </div>  */}
  
  <div className="row">
            
            <NavLink to="../subproduct"><button type="button" class="btn btn-primary search-button"><Icon icon="fluent:save-16-regular"/> Save</button></NavLink>
           </div>
   


</div>

            </Form>
            </div>
  </Card.Body>
  
</Card>

        </>
    )
}