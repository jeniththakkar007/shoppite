import React from "react";
import { Card, Form } from "react-bootstrap";
import { Icon } from '@iconify/react';
import './Add.css'
import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/products.service";
import Product from "./Product";
import ReactFormValidation from "react-form-input-validation";

class AddProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {
        category_id: "",
        product_type_name: "",
        product_type_description: "",
        product_code: ""
      },
      errors: {}
    };
    this.form = new ReactFormValidation(this, { locale: "en" });
    this.form.useRules({
      category_id: "required",
      product_type_name: "required",
      product_type_description: "required",
      product_code: "required"
    });

    this.form.onformsubmit = (fields) => {
      console.log(fields);
      var data = new Object();
      data.category_id = document.getElementById('ddl_category').value;
      data.product_type_name = document.getElementById('product_name').value;
      data.product_type_description = document.getElementById('product_description').value;
      data.product_code = document.getElementById('product_code').value;
      // createProduct(data).then( 
      //   navigate('/product')
      // )
      createProduct(data).then(window.location = "http://localhost:3000/product/");

    }

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


            <div className="container-fuild">
              <Form className="myForm"
                noValidate
                autoComplete="off"
                onSubmit={this.form.handleSubmit} >
                {/* category-name  */}
                <div className="row ">
                  <div className="col-md-3 product-data">
                    <label>
                      Select Category
                    </label>
                  </div>
                  <div className="col-md-9">
                    <Form.Select name="category_id"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.category_id}
                      data-attribute-name="Category Name"
                      data-async
                      className="select-category" id="ddl_category">
                      <option value="0"> Select Category</option>
                      <option value="1">Home Decore</option>
                      <option value="2">Electronic</option>
                      <option value="3">Grocery</option>
                      <option value="4">Appilances</option>
                      <option value="5">Cloth</option>
                      <option value="6">Beauty & Toys</option>
                      <option value="7">Accesories & Footwear</option>
                    </Form.Select>
                    <label className="error">
                      {this.state.errors.category_id
                        ? this.state.errors.category_id
                        : ""}
                    </label>
                  </div>
                </div>
                {/* product-name  */}
                <div className="row product-info">
                  <div className="col-md-3 product-data">
                    <Form.Label>Product Name <Icon icon="line-md:question-circle-twotone" color="black" />    </Form.Label>
                  </div>
                  <div className="col-md-9">
                    <Form.Control name="product_type_name"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.product_type_name}
                      data-attribute-name="Product Name"
                      data-async type="text" placeholder="Product Name"
                      id="product_name" className="Product-name" />
                    <label className="error">
                      {this.state.errors.product_type_name
                        ? this.state.errors.product_type_name
                        : ""}
                    </label>
                  </div>
                </div>
                {/* product-description  */}
                <div className="row product-info">
                  <div className="col-md-3 product-data" >
                    <Form.Label>Product Description  <Icon icon="line-md:question-circle-twotone" color="black" />  </Form.Label>
                  </div>
                  <div className="col-md-9">
                    <Form.Control name="product_type_description"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.product_type_description}
                      data-attribute-name="Product Description"
                      data-async
                      type="text" placeholder="Product Description"
                      id="product_description" className="Product-name" />
                    <label className="error">
                      {this.state.errors.product_type_description
                        ? this.state.errors.product_type_description
                        : ""}
                    </label>
                  </div>
                </div>
                {/* product-code  */}
                <div className="row product-info">
                  <div className="col-md-3 product-data">
                    <Form.Label>Product Code    <Icon icon="line-md:question-circle-twotone" color="black" /> </Form.Label>
                  </div>
                  <div className="col-md-9">
                    <Form.Control name="product_code"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.product_code}
                      data-attribute-name="Product Code"
                      data-async
                      type="text" placeholder="Product Code" 
                      id="product_code" className="Product-name" />
                    <label className="error">
                      {this.state.errors.product_code
                        ? this.state.errors.product_code
                        : ""}
                    </label>
                  </div>
                  </div>
                  {/* save-btn  */}
                  <div className="row">
                    <div className="col-12">
                    <button type="submit" className="btn btn-primary search-button" ><Icon icon="fluent:save-16-regular" /> Save</button>
                  </div>
                </div>

              </Form>
            </div>
          </Card.Body>

        </Card>

      </>
    );
  }
}
export default AddProduct;