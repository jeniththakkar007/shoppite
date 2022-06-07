import React from "react";
import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";
import './Login.css';
export const Login=()=>{
    return(
        <>
        <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
      <img src={window.location.origin + '/login_web.png'} 
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
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

          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3">Email address</label>
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-3">
            <label class="form-label" for="form3Example4">Password</label>

            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
          </div>

          <div class="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <NavLink to="./forget_password" class="text-body">Forgot password?</NavLink>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <NavLink to="../" className="submit_btn"><button type="button" class="btn btn-outline-dark"
              style={{paddingLeft: "2.5rem" , paddingRight: "2.5rem"}}>Login</button></NavLink>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    {/* <!-- Copyright --> */}
    <div class="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
    {/* <!-- Copyright --> */}

    {/* <!-- Right --> */}
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
    {/* <!-- Right --> */}
  </div>
</section>
        
        </>
    )
}