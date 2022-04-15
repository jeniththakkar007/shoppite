import React, { useEffect } from "react";
import { Card, Form } from "react-bootstrap";
import { Icon } from '@iconify/react';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getSub_Product, updateSub_Product } from "../services/sub_product.service";


 export const EditSubproduct=()=>{
  const params = useParams();
  const navigate = useNavigate();
  function Save(){ 
      var sub_data = new Object();
      sub_data.sub_product_name=document.getElementById('subname-id').value;
      sub_data.sub_product_description=document.getElementById('subdes-id').value;
      sub_data.sub_product_price=document.getElementById('subpr-id').value;
      sub_data.sub_product_discount=document.getElementById('subdis-id').value;
      sub_data.sub_product_quantity=document.getElementById('subqn-id').value;
      sub_data.is_available=document.getElementById('avil').value;
      console.log(params.id);
      updateSub_Product(params.id,sub_data).then(
        navigate('/subproduct')
      )
  }

  useEffect(()=> {
    getSub_Product(params.id)
    .then(res => {
        console.log(res.data)
        document.getElementById("subname-id").setAttribute("value",res.data.sub_product_name);
        document.getElementById("subdes-id").setAttribute("value",res.data.sub_product_description);
        document.getElementById("subdis-id").setAttribute("value",res.data.sub_product_discount);
        document.getElementById("avil").setAttribute("value",res.data.is_available);
        document.getElementById("subqn-id").setAttribute("value",res.data.sub_product_quantity);
        document.getElementById("subpr-id").setAttribute("value",res.data.sub_product_price);
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
       <span ><b className="product"> Edit  Field</b></span> 
    
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
{/* row end */}
<Form >

<div className="row product-info">
  <div className="col-md-3 product-data">
  <Form.Label> Sub Product Name <Icon icon="line-md:question-circle-twotone"  color="black"/>    </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder=" Sub Product Name"id="subname-id" className="Product-name" />
  </div>
  </div>
  <div className="row product-info">
  <div className="col-md-3 product-data">
  <Form.Label> Sub Product Description <Icon icon="line-md:question-circle-twotone"  color="black"/>    </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder=" Sub Product Description"id="subdes-id" className="Product-name" />
  </div>
  </div>
  <div className="row product-info">
  <div className="col-md-3 product-data">
  <Form.Label> Sub Product Price <Icon icon="line-md:question-circle-twotone"  color="black"/>    </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder=" Sub Product Price" id="subpr-id" className="Product-name" />
  </div>
  </div>
  <div className="row product-info">
  <div className="col-md-3 product-data">
  <Form.Label> Sub Product Discount <Icon icon="line-md:question-circle-twotone"  color="black"/>    </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder=" Sub Product Discount" id="subdis-id" className="Product-name" />
  </div>
  </div>
  <div className="row product-info">
  <div className="col-md-3 product-data" >
  <Form.Label> Sub Product Quantity  <Icon icon="line-md:question-circle-twotone"  color="black"/>  </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder=" Sub Product Quantity" id="subqn-id" className="Product-name" />
  </div>
</div>
<div className="row product-info">
<div className="col-md-3 product-data">
  <Form.Label>IS Available <Icon icon="line-md:question-circle-twotone"  color="black"/> </Form.Label>
  </div>
  <div className="col-md-9">
  <Form.Control type="text" placeholder="0 or 1" className="Product-name"  id="avil"/>
  </div>
  
<div className="row">
          <button type="button" class="btn btn-primary search-button" onClick={Save}><Icon icon="fluent:save-16-regular"/> Save</button>
           </div>
</div>
</Form>
            </div>
  </Card.Body>
  
</Card>

        </>
    )
}