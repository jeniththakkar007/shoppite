import React from "react";
import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer_part">
        <footer class="bg-white">
          <div class="container py-5 footer_cart">
            <div class="row py-4">
              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" class="mb-3" />
                <p class="font-italic text-muted">
                  Shoppite allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer services.</p>
                <ul class="list-inline mt-4">
                  <li class="list-inline-item"><a href="https://www.twitter.com/" target="_blank" title="twitter"  ><Icon icon="logos:twitter" /></a></li>
                  <li class="list-inline-item"><a href="https://www.facebook.com/" target="_blank" title="facebook" ><Icon icon="logos:facebook" /></a></li>
                  <li class="list-inline-item"><a href="https://www.instagram.com/" target="_blank" title="instagram" color="black"><img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" width={19} heigh={16} /></a></li>
                  <li class="list-inline-item"><a href="https://www.pinterest.com/" target="_blank" title="pinterest" color="black"><Icon icon="logos:pinterest" /></a></li>
                  <li class="list-inline-item"><a href="https://www.vimeo.com/" target="_blank" title="vimeo" color="black"><Icon icon="logos:vimeo" /></a></li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 class="text-uppercase font-weight-bold mb-4">Shoppite</h6>
                <ul class="list-unstyled mb-0">
                  <li class="mb-2"><NavLink to="../category/clothing" class="text-muted" color="black" > For Women</NavLink></li>
                  <li class="mb-2"><NavLink to="../category/electric" class="text-muted" color="black" >For Men</NavLink></li>
                  <li class="mb-2"><NavLink to="../shoes" class="text-muted" color="black" > For Kids </NavLink></li>
                  <li class="mb-2"><NavLink to="../category/clothing" class="text-muted" color="black" >Stores</NavLink></li>
                  <li class="mb-2"><NavLink to="../category/clothing" class="text-muted" color="black" >Our Blog</NavLink></li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
                <ul class="list-unstyled mb-0">
                  <li class="mb-2"><NavLink to="../login" class="text-muted" color="black">Login</NavLink></li>
                  <li class="mb-2"><NavLink to="../signup" class="text-muted" color="black">Register</NavLink></li>
                  <li class="mb-2"><NavLink to="../wishlist" class="text-muted" color="black">Wishlist</NavLink></li>
                  <li class="mb-2"><NavLink to="../contact" class="text-muted" color="black">Contact Us</NavLink></li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-6 mb-lg-0">
                <h6 class="text-uppercase font-weight-bold mb-4">Any Query</h6>
                <div class="p-1 rounded border">
                  <div class="input-group">
                    <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0" />
                    <div class="input-group-append">
                      <button id="button-addon1" type="submit" class="btn btn-link"><Icon icon="fluent:search-24-filled" color="black" /></button>
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