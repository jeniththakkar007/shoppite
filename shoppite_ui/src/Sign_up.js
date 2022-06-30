import React from "react";
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import { NavLink, useNavigate } from "react-router-dom";
import ReactFormValidation from "react-form-input-validation";
import * as Endpoint from "./End_point";
import useForm from "./useForm";
import validate from './LoginFormValidationRules';

export const Sign_up =()=>{
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);
  function login() {
    console.log('No errors, submit callback called!');
    // myAlertTop();
    PostUserSignup();
  }
  const navigate = useNavigate();

// export  class Sign_up extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       fields: {
//         customer_name: "",
//         email_address: "",
//         password :"",
//         checkbox:"",
//         confirm_password:""
//       },
//       errors: {}
//     };
//     this.form = new ReactFormValidation(this, { locale: "en" });
//     this.form.useRules({
//       customer_name: "required|username_available",
//       email_address: "required|email",
//      password:"required",
//      checkbox:"required",
//      confirm_password:"required"
//     });

//     this.form.onformsubmit = (fields) => {
//       console.log(fields);
//     }

//     ReactFormValidation.registerAsync('username_available', function(username, attribute, req, passes) {
//       setTimeout(() => {
//         if (username === "foo")
//           passes(false, 'Username has already been taken.'); // if username is not available
//         else
//           passes();
//       }, 1000);
//     });
     
//   }

//   render(){

  const PostUserSignup = () => {
            
    (async () => {
        // POST request using fetch with async/await
        const requestUOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "id": 0,
                "org_id": 1,
                "user_name": document.getElementById('userName').value,
                "f_name": null,
                "l_name": null,
                "email": document.getElementById('eMail').value,
                "password": document.getElementById('pAssworD').value,
                "phone_number": null,
                "address_1": null,
                "address_2": null,
                "area": null,
                "city": 0,
                "state": 0,
                "country": 0,
                "pincode": 0,
                "is_active": true
            }
              )
        };
        const responseU = await fetch(Endpoint.USERSIGNUPDATA, requestUOptions);
        const dataU = await responseU.json();
        myAlertTop();
        
    })();
  }
  function myAlertTop() {
    document.getElementById('showData').style.display="block";
    console.log("inside of alertbox")
    setTimeout(function () {
      document.getElementById('showData').style.display="none";
      navigate('/login');

    }, 3500);
  }
 
    return(
        <>
        <section class="vh-100" >
  <div class="container h-100">
    <div class="row d-flex justify-content-center  h-100">
      <div class="col-lg-12 col-xl-11 ">
        <div class="card text-black" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4"
                className="myForm"
                // noValidate
                // autoComplete="off"
                // onSubmit={this.form.handleSubmit}
                onSubmit={handleSubmit}
                >

                  <div class="d-flex flex-row  mb-4">
                  <Icon icon="fa:user"  fontSize={30} style={{"marginBottom":"10%"}}/>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example1c">&nbsp;Your Name</label>

                      <input
                      id="userName"
                  // type="text"
                  // name="customer_name"
                  autoComplete="off" className={`input ${errors.nameUser && 'is-danger'} email_cls`} type="text" name="nameUser" onChange={handleChange} value={values.nameUser || ''} required
                  // onBlur={this.form.handleBlurEvent}
                  // onChange={this.form.handleChangeEvent}
                  // value={this.state.fields.customer_name}
                  // To override the attribute name
                  data-attribute-name="Customer Name"
                  data-async
                />
                {errors.nameUser && (
                    <p className="help is-danger">{errors.nameUser}</p>
                  )}
                 {/* <label className="error"> */}
                {/* {this.state.errors.customer_name
                  ? this.state.errors.customer_name
                  : ""} */}
              {/* </label> */}
                    </div>
                  </div>

                  <div class="d-flex flex-row  mb-4">
                  <Icon icon="dashicons:email-alt"  fontSize={30} style={{"marginBottom":"10%"}} />
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example3c">&nbsp;Your Email</label>

                      <input
                      id="eMail"
                  // type="email"
                  // name="email_address"
                  autoComplete="off" className={`input ${errors.email && 'is-danger'} email_cls`} type="email" name="email" onChange={handleChange} value={values.email || ''} required
                  // onBlur={this.form.handleBlurEvent}
                  // onChange={this.form.handleChangeEvent}
                  // value={this.state.fields.email_address}
                />
                {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
              {/* <label className="error"> */}
                {/* {this.state.errors.email_address
                  ? this.state.errors.email_address
                  : ""} */}
              {/* </label> */}
                    </div>
                  </div>

                  <div class="d-flex flex-row  mb-4">
                  <Icon icon="bxs:lock"   fontSize={30} style={{"marginBottom":"10%"}} color="black"/>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example3c">&nbsp;Your Password</label>

                      <input
                      id="pAssworD"
                  // type="password"
                  // name="password"
                  className={`input ${errors.password && 'is-danger'} email_cls border_cls`} type="password" name="password" onChange={handleChange} value={values.password || ''} required
                  // onBlur={this.form.handleBlurEvent}
                  // onChange={this.form.handleChangeEvent}
                  // value={this.state.fields.password}
                  // className="border_cls"

                />
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              {/* <label className="error"> */}
                {/* {this.state.errors.password
                  ? this.state.errors.password
                  : ""} */}
              {/* </label> */}
                    </div>
                  </div>
                  <div class="d-flex flex-row  mb-4">
                  <Icon icon="bxs:lock"   fontSize={30} style={{"marginBottom":"10%"}} color="black"/>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example3c">&nbsp;Confirm Password</label>

                      <input
                  // type="password"
                  // name="confirm_password"
                  className={`input ${errors.passwordC && 'is-danger'} email_cls border_cls`} type="password" name="passwordC" onChange={handleChange} value={values.passwordC || ''} required
                  // className={`input ${errors.passwordC && 'is-danger'} email_cls border_cls`} type="password" name="password" onChange={handleChange} value={values.passwordC || ''} required
                  // onBlur={this.form.handleBlurEvent}
                  // onChange={this.form.handleChangeEvent}
                  // value={this.state.fields.confirm_password}
                  // className="border_cls"

                />
                {errors.passwordC && (
                  <p className="help is-danger">{errors.passwordC}</p>
                )}
              {/* <label className="error"> */}
                {/* {this.state.errors.confirm_password
                  ? this.state.errors.confirm_password
                  : ""} */}
              {/* </label> */}
                    </div>
                  </div>
                  <div class="d-flex flex-row  mb-4 col-12 ">
                  <input
                    // type="checkbox"
                    // name="checkbox"
                    className={`input ${errors.boxCheck && 'is-danger'} border_cls`} type="checkbox" name="boxCheck" onChange={handleChange} checked={values.boxCheck || ''} required
                    // onChange={this.form.handleChangeEvent}
                    // value="checkbox"
                    // className="border_cls"
                  />
                    <div class="form-outline flex-fill mb-0 col-12 ">
                    <label class="form-check-label col-12" for="form2Example3">
                    &nbsp; I agree all statements in <a href="#!" className="terms" style={{"color" :"#015bf6"}}>Terms of service</a>
                    </label>
                    {errors.passwordC && (
                  <p className="help is-danger">{errors.passwordC}</p>
                )}
                    </div>
                  </div>
                    <div className="d-flex flex-row  mb-4">
                    <button  type="submit"
                    class="btn btn-outline-dark"
                    //  onClick={PostUserSignup}
                      >Submit</button>
                    </div>
               
                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex  order-1 order-lg-2">
              <img src={window.location.origin + '/sign_up_page1.png'} 
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
           
              <div class="myAlert-top alert alert-success" id="showData" style={{"display":"none"}}>
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Success!</strong> Indicates a successful or positive action.
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
