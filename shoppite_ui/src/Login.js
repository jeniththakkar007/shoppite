import React from "react";
import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import * as Endpoint from "./End_point";
import  Redirect from "react-router";
import './Login.css';
export const Login=()=>(
  <Formik
    initialValues={{ user_name: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
  {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
  const postlogin = () => {
    var userName = document.getElementById('form3Example3').value;
    var passWord = document.getElementById('form3Example4').value;
    (async () => {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               "UserName":userName,
               "Password":passWord
              }
              )
        };
        const response = await fetch(Endpoint.LOGIN, requestOptions);
        const data = await response.json();
        
    })();
  }


    return(
        
      
        <section class="vh-100" >
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
      <img src={window.location.origin + '/login_web.png'} 
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={handleSubmit}>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            <span className="signinwith_logo" style={{"margin":"1%"}}>
            <Icon icon="logos:facebook" />
            </span>

            <span className="signinwith_logo" style={{"margin":"1%"}}>
            <Icon icon="logos:twitter" />
            </span>

            <span className="signinwith_logo" style={{"margin":"1%"}}>
            <Icon icon="logos:linkedin" />
            
            </span>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3">Email address</label>
            <input type="email" 
            name="email"
            placeholder="Enter a valid email address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error form-control form-control-lg"} id="form3Example3" class="form-control form-control-lg"
               />
                {errors.email && touched.email && (
            <div className="input-feedback  ">{errors.email}</div>
          )}
          </div>

          <div class="form-outline mb-3">
            <label class="form-label" for="form3Example4">Password</label>

            <input type="password" 
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error form-control form-control-lg"} 
            
            id="form3Example4" class="form-control form-control-lg"
               />
                {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
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

          <div class="text-center text-lg-start mt-4 pt-2">
           <button type="button" class="btn btn-outline-dark  submit_btn"
              style={{paddingLeft: "2.5rem" , paddingRight: "2.5rem"}} onSubmit={isSubmitting} onClick={postlogin} >Login </button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
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

        
    )
                }}
                </Formik>
  );
  