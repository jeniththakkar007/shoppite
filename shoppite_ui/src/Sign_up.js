import React from "react";
import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";
export  const Sign_up=()=>{
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

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                  <Icon icon="fa:user"  fontSize={30} style={{"marginBottom":"10%"}}/>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example1c">Your Name</label>

                      <input type="text" id="form3Example1c" class="form-control" />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                  <Icon icon="dashicons:email-alt"  fontSize={30} style={{"marginBottom":"10%"}} />
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example3c">Your Email</label>

                      <input type="email" id="form3Example3c" class="form-control" />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                  <Icon icon="bxs:lock"   fontSize={30} style={{"marginBottom":"10%"}} color="black"/>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example4c">Password</label>

                      <input type="password" id="form3Example4c" class="form-control" />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                  <Icon icon="carbon:password"  fontSize={30} style={{"marginBottom":"10%"}} />
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example4cd">Confirm password</label>

                      <input type="password" id="form3Example4cd" class="form-control" />
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                   <NavLink to="../login" className="submit_btn"> <button type="button" class="btn btn-outline-dark">Register</button></NavLink>
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