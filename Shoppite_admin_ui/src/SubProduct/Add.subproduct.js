import React from "react";
import { Card, Form } from "react-bootstrap";
import { Icon } from '@iconify/react';
import { NavLink, useNavigate } from "react-router-dom";
import ReactFormValidation from "react-form-input-validation";
import { createSub_Product } from "../services/sub_product.service";

class AddSubproduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {
        product_id: "",
        category_id: "",
        sub_product_name: "",
        sub_product_description: "",
        sub_product_price: "",
        sub_product_discount: "",
        sub_product_quantity: "",
        is_available: ""

      },
      errors: {}
    };
    this.form = new ReactFormValidation(this, { locale: "en" });
    this.form.useRules({
      product_id: "required",
      category_id: "required",
      sub_product_name: "required",
      sub_product_description: "required",
      sub_product_price: "required",
      sub_product_discount: "required",
      sub_product_quantity: "required",
      is_available: "required"
    });

    this.form.onformsubmit = (fields) => {
      console.log(fields);
      var sub_data = new Object();

      sub_data.product_id = document.getElementById('prodect-select').value;
      sub_data.category_id = document.getElementById('category-select').value;
      sub_data.sub_product_name = document.getElementById('subname-id').value;
      sub_data.sub_product_description = document.getElementById('subdes-id').value;
      sub_data.sub_product_price = document.getElementById('subpr-id').value;
      sub_data.sub_product_discount = document.getElementById('subdis-id').value;
      sub_data.sub_product_quantity = document.getElementById('subqn-id').value;
      sub_data.is_available = document.getElementById('avil').value;
      createSub_Product(sub_data).then(window.location = "http://localhost:3000/subproduct/");

    }

    ReactFormValidation.registerAsync('username_available', function (username, attribute, req, passes) {
      setTimeout(() => {
        if (username === "foo")
          passes(false, 'Username has already been taken.'); // if username is not available
        else
          passes();
      }, 1000);
    });
    /* let messages = ReactFormValidation.getMessages('en');
    messages.required = 'Whoops, :attribute field is required.';
    ReactFormValidation.setMessages('en', messages);
    ReactFormValidation.useLang('en') */
  }
  // const navigate = useNavigate();
  //  Save_sub() {
  //   var sub_data = new Object();

  //   sub_data.product_id = document.getElementById('prodect-select').value;
  //   sub_data.category_id = document.getElementById('category-select').value;
  //   sub_data.sub_product_name = document.getElementById('subname-id').value;
  //   sub_data.sub_product_description = document.getElementById('subdes-id').value;
  //   sub_data.sub_product_price = document.getElementById('subpr-id').value;
  //   sub_data.sub_product_discount = document.getElementById('subdis-id').value;
  //   sub_data.sub_product_quantity = document.getElementById('subqn-id').value;
  //   sub_data.is_available = document.getElementById('avil').value;

  //   // createSub_Product(sub_data).then(
  //   //   navigate('/subproduct')
  //   // )
  //   createSub_Product(sub_data).then(window.location = "http://localhost:3000/subproduct/");
  // }

  render() {
    return (
      <>
      <div>
        <div>
          <div className="head">
            <span ><b className="product"> Add  Sub Products</b></span>

          </div>
        </div>

        <Card style={{ width: '95%' }}>
          <Card.Body>
            <Card.Title> <Icon icon="mdi:information-variant" color="black" /> Sub Product info</Card.Title>


            <div className="container-fuild">
              <Form className="myForm"
                noValidate
                autoComplete="off"
                onSubmit={this.form.handleSubmit}>
                {/* select-category  */}
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
                      data-async className="select-category" id="category-select" >
                      <option> Select Category</option>
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
                {/* select-product  */}
                <div className="row ">
                  <div className="col-md-3 product-data">
                    <label>
                      Select Product Type
                    </label>
                  </div>
                  <div className="col-md-9">
                    <Form.Select name="product_id"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.product_id}
                      data-attribute-name="Product Name"
                      data-async className="select-category" id="prodect-select" >
                      <option> Select Product Type</option>
                      <option value="1">Wall Decore & Painting</option>
                      <option value="2">Lighting</option>
                      <option value="3">Laptop</option>
                      <option value="4">Mobile</option>
                      <option value="5">Dairy Products</option>
                      <option value="6">HouseHold Products</option>
                      <option value="7">Sancks & Bevereges</option>
                      <option value="8">Seasonal Appliances</option>
                    </Form.Select>
                    <label className="error">
                      {this.state.errors.product_id
                        ? this.state.errors.product_id
                        : ""}
                    </label>
                  </div>
                </div>
                {/* sub-product-name */}
                <div className="row product-info">
                  <div className="col-md-3 product-data">
                    <Form.Label> Sub Product Name <Icon icon="line-md:question-circle-twotone" color="black" /> </Form.Label>
                  </div>
                  <div className="col-md-9">
                    <Form.Control name="sub_product_name"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.sub_product_name}
                      data-attribute-name="Sub-Product Name"
                      data-async type="text" placeholder=" Sub Product Name" id="subname-id" className="Product-name" />
                    <label className="error">
                      {this.state.errors.sub_product_name
                        ? this.state.errors.sub_product_name
                        : ""}
                    </label>
                  </div>
                </div>
                {/* sub-product-description */}
                <div className="row product-info">
                  <div className="col-md-3 product-data">
                    <Form.Label> Sub Product Description <Icon icon="line-md:question-circle-twotone" color="black" /></Form.Label>
                  </div>
                  <div className="col-md-9">
                    <Form.Control name="sub_product_description"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.sub_product_description}
                      data-attribute-name="Sub-Product description"
                      data-async type="text" placeholder=" Sub Product Description" id="subdes-id" className="Product-name" />
                    <label className="error">
                      {this.state.errors.sub_product_description
                        ? this.state.errors.sub_product_description
                        : ""}
                    </label>
                  </div>
                </div>
                {/* sub-product price  */}
                <div className="row product-info">
                  <div className="col-md-3 product-data">
                    <Form.Label> Sub Product Price <Icon icon="line-md:question-circle-twotone" color="black" />    </Form.Label>
                  </div>
                  <div className="col-md-9">
                    <Form.Control name="sub_product_price"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.sub_product_price}
                      data-attribute-name="Sub-Product price"
                      data-async type="text" placeholder=" Sub Product Price" id="subpr-id" className="Product-name" />
                    <label className="error">
                      {this.state.errors.sub_product_price
                        ? this.state.errors.sub_product_price
                        : ""}
                    </label>
                  </div>
                </div>
                {/* sub-product discount  */}
                <div className="row product-info">
                  <div className="col-md-3 product-data">
                    <Form.Label> Sub Product Discount <Icon icon="line-md:question-circle-twotone" color="black" />    </Form.Label>
                  </div>
                  <div className="col-md-9">
                    <Form.Control name="sub_product_discount"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.sub_product_discount}
                      data-attribute-name="Sub-Product discount"
                      data-async type="text" placeholder=" Sub Product Discount" id="subdis-id" className="Product-name" />
                    <label className="error">
                      {this.state.errors.sub_product_discount
                        ? this.state.errors.sub_product_discount
                        : ""}
                    </label>
                  </div>
                </div>
                {/* sub-product quantity  */}
                <div className="row product-info">
                  <div className="col-md-3 product-data" >
                    <Form.Label> Sub Product Quantity  <Icon icon="line-md:question-circle-twotone" color="black" />  </Form.Label>
                  </div>
                  <div className="col-md-9">
                    <Form.Control name="sub_product_quantity"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.sub_product_quantity}
                      data-attribute-name="Sub-Product quantity"
                      data-async type="text" placeholder=" Sub Product Quantity" id="subqn-id" className="Product-name" />
                    <label className="error">
                      {this.state.errors.sub_product_quantity
                        ? this.state.errors.sub_product_quantity
                        : ""}
                    </label>
                  </div>
                </div>
                {/* is-available  */}
                <div className="row product-info">
                  <div className="col-md-3 product-data">
                    <Form.Label>IS Available <Icon icon="line-md:question-circle-twotone" color="black" /> </Form.Label>
                  </div>
                  <div className="col-md-9  select-pro">
                    <Form.Control name="is_available"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.is_available}
                      data-attribute-name="is available"
                      data-async type="text" placeholder="true or false" id="avil" className="Product-name" />
                    <label className="error">
                      {this.state.errors.is_available
                        ? this.state.errors.is_available
                        : ""}
                    </label>
                  </div>
                </div>
                  {/* photos*/}
                <div className="row product-info">
                  <div class="col-md-3 product-data">
                    <label for="formFileMultiple" class="form-label">Choose Photos</label>
                  </div>
                  <div className="col-md-9">
                    <input class="form-control" type="file" id="formFileMultiple" multiple />
                  </div>
                </div>

                <div className="row">
                  <button type="submit" class="btn btn-primary search-button"><Icon icon="fluent:save-16-regular" /> Save</button>
                </div>
          </Form>
        </div>
      </Card.Body>

      </Card >
      </div>
    </>
  );
  }
}

export default AddSubproduct;