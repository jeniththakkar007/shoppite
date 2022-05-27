import React from "react";
import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";



const Footer=()=>{
    return(
        <>
        <div className="footer_part">
                <footer class="bg-white">
    <div class="container py-5">
      <div class="row py-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" class="mb-3"/>
          <p class="font-italic text-muted">
Shoppite allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer services.</p>
          <ul class="list-inline mt-4">
            <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><Icon icon="logos:twitter" /></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><Icon icon="logos:facebook" /></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" width={19} heigh={16}/></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="pinterest"><Icon icon="logos:pinterest" /></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="vimeo"><Icon icon="logos:vimeo" /></a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Shoppite</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">For Women</a></li>
            <li class="mb-2"><a href="#" class="text-muted">For Men</a></li>
            <li class="mb-2"><a href="#" class="text-muted">For Kids</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Stores</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Our Blog</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">Login</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Register</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Wishlist</a></li>
            <li class="mb-2"><NavLink to="./contact" class="text-muted">Contact Us</NavLink></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Any Query</h6>
          <div class="p-1 rounded border">
            <div class="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0"/>
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link"><i class="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-light py-4">
      <div class="container text-center">
        <p class="text-muted mb-0 py-2">© 2022 Shoppite  All rights reserved.</p>
      </div>
    </div>
  </footer>
                </div>
                
        
        </>
        );
}
export default Footer;