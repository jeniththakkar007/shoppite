import React, { useState } from "react";
// import { useHistory  } from "react-router-dom";
import { Icon } from '@iconify/react';
import { NavLink, useNavigate   } from "react-router-dom";
import ReactFormValidation from "react-form-input-validation";
import './Login.css';
import * as Endpoint from "./End_point";
import useForm from "./useForm";
import validate from './LoginFormValidationRules';

// import { useHistory } from 'react-router-dom'
export const Login =() =>{
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);
  function login() {
    console.log('No errors, submit callback called!');
  }
// export class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     fields: {
  //       email_address: "",
  //       password: ""

  //     },
  //     errors: {}
  //   };
  //   this.form = new ReactFormValidation(this, { locale: "en" });
  //   this.form.useRules({
  //     email_address: "required|email",
  //     password: "required"

  //   });

  //   this.form.onformsubmit = (fields) => {
  //     console.log(fields);
  //     alert(JSON.stringify(fields))
  //   }

  //   ReactFormValidation.registerAsync('username_available', function (username, attribute, req, passes) {
  //     setTimeout(() => {
  //       if (username === "foo")
  //         passes(false, 'Username has already been taken.'); // if username is not available
  //       else
  //         passes();
  //     }, 1000);
  //   });

  // };
  // render() {
    // const [userData, setuserData] = useState([]);
    const navigate = useNavigate();
    const PostUserLogin = () => {
            
      (async () => {
          // POST request using fetch with async/await
          const requestULOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  "org_id": 1,
                  "email": document.getElementById('email_login').value,
                  "password": document.getElementById('password_login').value
              }
                )
          };
          const responseUL = await fetch(Endpoint.USERLOGINDATA, requestULOptions);
          console.log(responseUL.status);
          if(responseUL.status==200)
          {
            const dataU = await responseUL.json();
            console.log('test');
            setLocalData(dataU);
            myAlertTop();
            navigate('/');
          }
          else
          {

          }
          
      })();
    }
    // console.log(userData);
    function setLocalData(userData){
      localStorage.setItem('id',userData.id);
      localStorage.setItem('token', userData.jwt_token);
      localStorage.setItem('org_id', userData.org_id);
    }
    function myAlertTop() {
      document.getElementById('showData').style.display="block";
      console.log("inside of alertbox")
      setTimeout(function () {
        document.getElementById('showData').style.display="none";
      }, 3500);
    }
    return (
      <>
        <section class="vh-100" >
          <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-md-9 col-lg-6 col-xl-5">
                <img src={window.location.origin + '/login_web.png'}
                  class="img-fluid" alt="Sample image" />
              </div>
              <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form className="myForm" onSubmit={handleSubmit}
                  // noValidate
                  // autoComplete="off"
                  // onSubmit={this.form.handleSubmit}
                  >
                  <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                    <span className="signinwith_logo" style={{ "margin": "1%" }}>
                      <Icon icon="logos:facebook" />
                    </span>

                    <span className="signinwith_logo" style={{ "margin": "1%" }}>
                      <Icon icon="logos:twitter" />
                    </span>

                    <span className="signinwith_logo" style={{ "margin": "1%" }}>
                      <Icon icon="logos:linkedin" />

                    </span>
                  </div>

                  <div class="divider d-flex align-items-center my-4">
                    <p class="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">Email address</label>
                    <input
                      id="email_login"
                      // className="email_cls"
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

                  <div class="form-outline mb-3">
                    <label class="form-label" for="form3Example4">Password</label>

                    <input
                      id="password_login"
                      // className="email_cls border_cls"
                      // type="password"
                      // name="password"
                      className={`input ${errors.password && 'is-danger'} email_cls border_cls`} type="password" name="password" onChange={handleChange} value={values.password || ''} required
                      // onBlur={this.form.handleBlurEvent}
                      // onChange={this.form.handleChangeEvent}
                      // value={this.state.fields.password}
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

                  <div class="d-flex justify-content-between align-items-center">
                    <div class="form-check mb-0">
                      <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                      <label class="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <NavLink to="./forget_password" class="text-body">Forgot password?</NavLink>
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit"
                      class="btn btn-outline-dark" value="/" onClick={PostUserLogin}
                      >Login</button>
                  </div>
                </form>
                <div class="text-center text-lg-start mt-4 pt-2">
                  {/* <button type="button" class="btn btn-outline-dark  submit_btn"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}   >Login </button> */}
                  <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink to="../signup"
                    class="link-danger">Register</NavLink></p>
                </div>


              </div>
            </div>
          </div>
          <div class="myAlert-top alert alert-success" id="showData" style={{"display":"none"}}>
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Success!</strong> Indicates a successful or positive action.
              </div>
          <div
            class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <div class="text-white mb-3 mb-md-0">
              Copyright © 2020. All rights reserved.
            </div>

            <div>
              <a href="#!" class="text-white me-4">
                <Icon icon="logos:facebook" />
              </a>
              <a href="#!" class="text-white me-4">
                <Icon icon="logos:twitter" />
              </a>
              <a href="#!" class="text-white me-4">
                <Icon icon="logos:google" />
              </a>
              <a href="#!" class="text-white">
                <Icon icon="logos:linkedin" />

              </a>
            </div>
          </div>
        </section>
      </>
    )
  }


