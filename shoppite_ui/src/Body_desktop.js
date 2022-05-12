import React from "react";
import './Body_desktop.css';
import { Icon } from '@iconify/react';
import VideoPlayer from 'react-video-js-player';
import Footer from "./Footer";




class Body_desktop extends React.Component {

    render() {
        return (
            <>
                <div className="row col-12">
                    <img src="top.png" className="name_plate" />
                </div>
                <div className="row card_compny">
                    <div class="col-xs-6 col-6 col-sm-6 col-md-2  col-xl-2 col-lg-2 card-desk" >
                        <img class="card-img-desk" src="aidas_card.png" />

                    </div>
                    <div class=" col-xs-6 col-6 col-sm-6 col-md-2 col-xl-2 col-lg-2 card-desk" >
                        <img class="card-img-desk" src="mlural_card.png" />

                    </div>
                    <div class="col-xs-6 col-6 col-sm-6 col-md-2 col-xl-2 col-lg-2 card-desk" >
                        <img class="card-img-desk" src="lap_card.png" />

                    </div>
                    <div class=" col-xs-6 col-6 col-sm-6 col-md-2 col-xl-2 col-lg-2 card-desk" >
                        <img class="card-img-desk" src="aidas_card.png" />

                    </div>
                </div>
                <div className="row col-12">
                    <img src="best.png" className="name_plate" />
                </div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner ">
                        <div class="carousel-item active">
                            <div class="card-groups row">
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro.png" class="card-img" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card_titles" >HP Core i3 11th Gen  </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 70,000</p>
                                    </div>
                                </div>
                                <div class=" card_elecr_item col-md-2  col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro.png" class="card-img" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card_titles" >HP Core i3 11th Gen  </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 70,000</p>
                                    </div>
                                </div>
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro_2.png" class="card-img" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card_titles">Galaxy S22 Ultra  </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 30,500</p>

                                    </div>
                                </div>
                                <div class=" card_elecr_item col-md-2  col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4"  >
                                    <img src="elcro_3.png" class="card-img" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card_titles">Backspace Air Buds  </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 3500</p>

                                    </div>
                                </div>
                                <div class=" card_elecr_item col-md-2  col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro_4.png" class="card-img" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card_titles">Blue Star Convertible Inverter AC</h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 45,000</p>
                                    </div>
                                </div>
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro_5.png" class="card-img" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card_titles">Whirlpool 265 L Refrigerator</h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 45,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item " >
                            <div class="card-groups row">
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4">
                                    <img src="elcro_10.png" class="card-img" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card_titles">boAt Bluetooth Headset  </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 5,000</p>

                                    </div>
                                </div>
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro_2.png" class="card-img" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card_titles">Galaxy S22 Ultra  </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 30,500</p>
                                    </div>
                                </div>
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro1.png" class="card-img" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card_titles"> Mini Blutooth Speaker </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 2,300</p>

                                    </div>
                                </div>
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro6.png" class="card-img" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card_titles">IFB  Front Heater Silver  </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 39,000</p>

                                    </div>
                                </div>
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro2.png" class="card-img" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card_titles">Aroma Neckband Bluetooth Headset</h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 1,520</p>


                                    </div>
                                </div>
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro_11.png" class="card-img" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card_titles">HUAWEI Mate X2 Dual Big Core</h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 60,000</p>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="row col-12">
                    <img src="FURNI.png" className="name_plate" />
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12 col-xl-12 col-lg-12 col-12 sofabanner">
                    <img src="furnituresale.png" className="sofa_bann" />
                </div>
                <div className="row furni">
                    <div class="col-md-3 col-xl-3 col-lg-3 col-sm-6 col-xs-6 col-6 furniture_pic" >
                        <img src="chair_1.png" className="chair_pic" alt="..." />
                        <div class="card-body">
                            <h5 class="card-titles"> </h5>
                            <p class="card-texts"><Icon icon="bx:rupee" fontSize={11} /><span className="price-fur"> 17,000</span></p>

                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3 col-lg-3 col-sm-6 col-xs-6 col-6 furniture_pic" >
                        <img src="chair_2.png" className="chair_pic" alt="..." />
                        <div class="card-body">
                            <h5 class="card-titles"> </h5>
                            <p class="card-texts"><Icon icon="bx:rupee" fontSize={11} /><span className="price-fur"> 9,000</span></p>

                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3 col-lg-3 col-sm-6 col-xs-6 col-6 furniture_pic" >
                        <img src="chair_3.png" className="chair_pic" alt="..." />
                        <div class="card-body">
                            <h5 class="card-titles"> </h5>
                            <p class="card-texts"><Icon icon="bx:rupee" fontSize={11} /><span className="price-fur"> 3,500</span></p>

                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3 col-lg-3 col-sm-6 col-xs-6 col-6 furniture_pic" >
                        <img src="chair_4.png" className="chair_pic" alt="..." />
                        <div class="card-body">
                            <h5 class="card-titles"> </h5>
                            <p class="card-texts"><Icon icon="bx:rupee" fontSize={11} /><span className="price-fur"> 7,000</span></p>
                        </div>

                    </div>


                </div>
                <div className="row col-12">
                    <img src="season.png" className="name_plate" />
                </div>
                <div className=" row clothings">

                    <div class="col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-12" >
                        <img src="female.png" alt="..." className="femle" />

                    </div>

                    <div class="col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-12 " >
                        <img src="male_final.png" alt="..." className="femle" />

                    </div>
                </div>
                <div className="row cloths">
                    <div class=" cloths-sizes col-md-2 col-xl-2 col-lg-2col-sm-6 col-xs-6 col-6" >
                        <img src="westernwear_g .png" className="cloth-width" />
                    </div>
                    <div class="  cloths-sizes  col-md-2 col-xl-2 col-lg-2col-sm-6 col-xs-6 col-6" >
                        <img src="ethnicwear_g .png" className="cloth-width" />
                    </div>

                    <div class=" cloths-sizes  col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="westernwear_b .png" className="cloth-width" />
                    </div>
                    <div class="cloths-sizes col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="ethnicwear_b .png" className="cloth-width" />
                    </div>
                    <div class="cloths-sizes col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="workwear2 .png" className="cloth-width" />
                    </div>
                    <div class="cloths-sizes col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="picnic.png" className="cloth-width" />
                    </div>

                </div>
                <div className="row  promo">
                    <div className="col-12 col-sm-6 
         ">
                        <img src="promo1.gif" className="coupons" />


                    </div>
                    <div className="col-12 col-sm-6 "  >


                        <img src="promo2.gif" className="coupons" />


                    </div>

                </div>
                <div className="row col-12">
                    <img src="deal1.png" className="name_plate" />
                </div>
                <div className="row  deals_top_brands">
                    <div class=" brands col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="rebrand.png" className="deal_brand" />
                    </div>
                    <div class=" brands col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="rebrand2.png" className="deal_brand" />
                    </div>

                    <div class="   brands col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="rebrand3.png" className="deal_brand" />
                    </div>
                    <div class="brands col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="rebrand4.png" className="deal_brand" />
                    </div>
                    <div class="brands col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="rebrand5.png" className="deal_brand" />
                    </div>
                    <div class="brands  col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="rebrand6.png" className="deal_brand" />
                    </div>



                </div>
                <div className="row col-12">
                    <img src="slashed.png" className="name_plate" />
                </div>
                <div className="row  slashed">
                    <div class=" slashed_div col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="slashed1.png" className="slashed_price" />
                    </div>
                    <div class=" slashed_div col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="slashed24.png" className="slashed_price" />
                    </div>

                    <div class="   slashed_div col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="slashed3.png" className="slashed_price" />
                    </div>
                    <div class="slashed_div col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="slashed4.png" className="slashed_price" />
                    </div>
                    <div class="slashed_div col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="slashed5.png" className="slashed_price" />
                    </div>
                    <div class="slashed_div  col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <img src="slashed61.png" className="slashed_price" />
                    </div>
                </div>
                <div className="row col-12">
                    <img src="gift.png" className="name_plate"/>
                </div>
                <div className="row  gift_card">
                    <img src="gift1.gif" className="col-md-6 col-xl-6 col-lg-6 col-sm-6 col-xs-6 col-6"/>
                    <img src="gift2.gif" className="col-md-6 col-xl-6 col-lg-6 col-sm-6 col-xs-6 col-6"/>
                </div>
                {/* <div className="footer_part">
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
            <li class="mb-2"><a href="#" class="text-muted">Our Products</a></li>
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
                </div> */}
                {/* <Footer/> */}
            </>
        )
    }


}
export default Body_desktop;