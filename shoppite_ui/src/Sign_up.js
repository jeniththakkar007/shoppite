import React from "react";
import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";
import ReactFormValidation from "react-form-input-validation";

export  class Sign_up extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        customer_name: "",
        email_address: "",
        password :"",
        checkbox:"",
        confirm_password:""
      },
      errors: {}
    };
    this.form = new ReactFormValidation(this, { locale: "en" });
    this.form.useRules({
      customer_name: "required|username_available",
      email_address: "required|email",
     password:"required",
     checkbox:"required",
     confirm_password:"required"
    });

    this.form.onformsubmit = (fields) => {
      console.log(fields);
    }

    ReactFormValidation.registerAsync('username_available', function(username, attribute, req, passes) {
      setTimeout(() => {
        if (username === "foo")
          passes(false, 'Username has already been taken.'); // if username is not available
        else
          passes();
      }, 1000);
    });
     
  }

  render(){
    return(
        <>
        <section class="vh-100" >
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11 ">
        <div class="card text-black" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4"
                className="myForm"
                noValidate
                autoComplete="off"
                onSubmit={this.form.handleSubmit}>

                  <div class="d-flex flex-row align-items-center mb-4">
                  <Icon icon="fa:user"  fontSize={30} style={{"marginBottom":"10%"}}/>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example1c">Your Name</label>

                      <input
                  type="text"
                  name="customer_name"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.customer_name}
                  // To override the attribute name
                  data-attribute-name="Customer Name"
                  data-async
                />
                 <label className="error">
                {this.state.errors.customer_name
                  ? this.state.errors.customer_name
                  : ""}
              </label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                  <Icon icon="dashicons:email-alt"  fontSize={30} style={{"marginBottom":"10%"}} />
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example3c">Your Email</label>

                      <input
                  type="email"
                  name="email_address"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email_address}
                />
            
              <label className="error">
                {this.state.errors.email_address
                  ? this.state.errors.email_address
                  : ""}
              </label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                  <Icon icon="bxs:lock"   fontSize={30} style={{"marginBottom":"10%"}} color="black"/>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example3c">Your Password</label>

                      <input
                  type="password"
                  name="password"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.password}
                  className="border_cls"

                />
            
              <label className="error">
                {this.state.errors.password
                  ? this.state.errors.password
                  : ""}
              </label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                  <Icon icon="bxs:lock"   fontSize={30} style={{"marginBottom":"10%"}} color="black"/>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example3c">Confirm Password</label>

                      <input
                  type="password"
                  name="confirm_password"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.confirm_password}
                  className="border_cls"

                />
            
              <label className="error">
                {this.state.errors.confirm_password
                  ? this.state.errors.confirm_password
                  : ""}
              </label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4 col-12 ">
                  <input
                    type="checkbox"
                    name="checkbox"
                    onChange={this.form.handleChangeEvent}
                    value="checkbox"
                    className="border_cls"
                  />
                    <div class="form-outline flex-fill mb-0 col-12 ">
                    <label class="form-check-label col-12" for="form2Example3">
                      I agree all statements in <a href="#!" className="terms" style={{"color" :"#015bf6"}}>Terms of service</a>
                    </label>
                    </div>
                  </div>
<div className="d-flex flex-row align-items-center mb-4">
<input type="submit" 
class="btn btn-outline-dark"
value="Submit" />
</div>
               
                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
              <img src={window.location.origin + '/sign_up_page1.png'} 
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}
}