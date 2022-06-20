import React from "react";
import './Body_desktop.css';
import { Icon } from '@iconify/react';
import VideoPlayer from 'react-video-js-player';
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";




class Body_desktop extends React.Component {

    render() {
        return (
            <>
                <div className="row col-12">
                    <img src="top.png" className="name_plate" />
                </div>
                <div className="row card_compny">
                    <div class="col-xs-6 col-6 col-sm-6 col-md-2  col-xl-2 col-lg-2 card-desk" >
                        <NavLink to="./shoes"><img class="card-img-desk" src={window.location.origin + '/aidas_card.png'} /></NavLink>

                    </div>
                    <div class=" col-xs-6 col-6 col-sm-6 col-md-2 col-xl-2 col-lg-2 card-desk" >
                        <NavLink to="./top_offer"><img class="card-img-desk" src={window.location.origin + '/mlural_card.png'} /></NavLink>

                    </div>
                    <div class="col-xs-6 col-6 col-sm-6 col-md-2 col-xl-2 col-lg-2 card-desk" >
                        <NavLink to="/category/electric"><img class="card-img-desk" src={window.location.origin + '/lap_card.png'} /></NavLink>

                    </div>
                    <div class=" col-xs-6 col-6 col-sm-6 col-md-2 col-xl-2 col-lg-2 card-desk" >
                        <NavLink to="/category/acces"><img class="card-img-desk" src={window.location.origin + '/aidas_card.png'} /></NavLink>

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
                                    <NavLink to="./category/electric/laptop"> <div class="card-body " style={{ "color": "black", "textDecoration": "none" }}>
                                        <h5 class="card_titles" >HP Core i3 11th Gen  </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 70,000</p>
                                    </div></NavLink>
                                </div>
                                <div class=" card_elecr_item col-md-2  col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro.png" class="card-img" alt="..." />
                                    <NavLink to="./category/electric" > <div class="card-body">
                                        <h5 class="card_titles" >HP Core i3 11th Gen  </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 70,000</p>
                                    </div></NavLink>
                                </div>
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro_2.png" class="card-img" alt="..." />
                                    <NavLink to="./category/electric">  <div class="card-body">
                                        <h5 class="card_titles">Galaxy S22 Ultra  </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 30,500</p>

                                    </div></NavLink>
                                </div>
                                <div class=" card_elecr_item col-md-2  col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4"  >
                                    <img src="elcro_3.png" class="card-img" alt="..." />
                                    <NavLink to="./category/electric"><div class="card-body">
                                        <h5 class="card_titles">Backspace Air Buds  </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 3500</p>

                                    </div></NavLink>
                                </div>
                                <div class=" card_elecr_item col-md-2  col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro_4.png" class="card-img" alt="..." />
                                    <NavLink to="./category/electric"><div class="card-body">
                                        <h5 class="card_titles">Blue Star Convertible Inverter AC</h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 45,000</p>
                                    </div></NavLink>
                                </div>
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro_5.png" class="card-img" alt="..." />
                                    <NavLink to="/category/electric/laptops"> <div class="card-body">
                                        <h5 class="card_titles">Whirlpool 265 L Refrigerator</h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 45,000</p>
                                    </div></NavLink>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item " >
                            <div class="card-groups row">
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4">
                                    <img src="elcro_10.png" class="card-img" alt="..." />
                                    <NavLink to="/category/electric/laptops"> <div class="card-body">
                                        <h5 class="card_titles">boAt Bluetooth Headset  </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 5,000</p>

                                    </div></NavLink>
                                </div>
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro_2.png" class="card-img" alt="..." />
                                    <NavLink to="./category/electric/ac"> <div class="card-body">
                                        <h5 class="card_titles">Galaxy S22 Ultra  </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 30,500</p>
                                    </div></NavLink>
                                </div>
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro1.png" class="card-img" alt="..." />
                                    <NavLink to="./category/electric/ac"> <div class="card-body">
                                        <h5 class="card_titles"> Mini Blutooth Speaker </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 2,300</p>

                                    </div></NavLink>
                                </div>
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro6.png" class="card-img" alt="..." />
                                    <NavLink to="./category/electric/headphone"><div class="card-body">
                                        <h5 class="card_titles">IFB  Front Heater Silver  </h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 39,000</p>

                                    </div></NavLink>
                                </div>
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro2.png" class="card-img" alt="..." />
                                    <NavLink to="/category/electric/headphone"> <div class="card-body">
                                        <h5 class="card_titles">Aroma Neckband Bluetooth Headset</h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 1,520</p>


                                    </div></NavLink>
                                </div>
                                <div class=" card_elecr_item col-md-2 col-xl-2 col-lg-2 col-sm-4 col-xs-4 col-4" >
                                    <img src="elcro_11.png" class="card-img" alt="..." />
                                    <NavLink to="/category/electric/ac"> <div class="card-body">
                                        <h5 class="card_titles">HUAWEI Mate X2 Dual Big Core</h5>
                                        <p class="card_texts"><Icon icon="bx:rupee" /> 60,000</p>


                                    </div></NavLink>
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
                    <NavLink to="./top_offer">  <img src="furnituresale.png" className="sofa_bann" /></NavLink>
                </div>
                <div className="row furni">
                    <div class="col-md-3 col-xl-3 col-lg-3 col-sm-6 col-xs-6 col-6 furniture_pic" >
                        <NavLink to="./newrelease"><img src="chair_1.png" className="chair_pic" alt="..." /></NavLink>
                        
                    </div>
                    <div class="col-md-3 col-xl-3 col-lg-3 col-sm-6 col-xs-6 col-6 furniture_pic" >
                        <NavLink to="./newrelease"> <img src="chair_2.png" className="chair_pic" alt="..." /></NavLink>
                    
                    </div>
                    <div class="col-md-3 col-xl-3 col-lg-3 col-sm-6 col-xs-6 col-6 furniture_pic" >
                        <NavLink to="./newrelease"><img src="chair_3.png" className="chair_pic" alt="..." /></NavLink>
                       
                    </div>
                    <div class="col-md-3 col-xl-3 col-lg-3 col-sm-6 col-xs-6 col-6 furniture_pic" >
                        <NavLink to="./newrelease"><img src="chair_4.png" className="chair_pic" alt="..." /></NavLink>
                        
                    </div>


                </div>
                <div className="row col-12">
                    <img src="season.png" className="name_plate" />
                </div>
                <div className=" row clothings">

                    <div class="col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-12" >
                        <NavLink to="./category/clothing"> <img src="female.png" alt="..." className="femle" /></NavLink>

                    </div>

                    <div class="col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-12 " >
                        <NavLink to="./category/clothing">  <img src="male_final.png" alt="..." className="femle" /></NavLink>

                    </div>
                </div>
                <div className="row cloths">
                    <div class=" cloths-sizes col-md-2 col-xl-2 col-lg-2col-sm-6 col-xs-6 col-6" >
                        <NavLink to="./category/clothing"> <img src="westernwear_g .png" className="cloth-width" /></NavLink>
                    </div>
                    <div class="  cloths-sizes  col-md-2 col-xl-2 col-lg-2col-sm-6 col-xs-6 col-6" >
                        <NavLink to="./category/clothing"> <img src="ethnicwear_g .png" className="cloth-width" /></NavLink>
                    </div>

                    <div class=" cloths-sizes  col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <NavLink to="./category/clothing"> <img src="westernwear_b .png" className="cloth-width" /></NavLink>
                    </div>
                    <div class="cloths-sizes col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <NavLink to="./category/clothing"> <img src="ethnicwear_b .png" className="cloth-width" /></NavLink>
                    </div>
                    <div class="cloths-sizes col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <NavLink to="./category/clothing"> <img src="workwear2 .png" className="cloth-width" /></NavLink>
                    </div>
                    <div class="cloths-sizes col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <NavLink to="./category/clothing"> <img src="picnic.png" className="cloth-width" /></NavLink>
                    </div>

                </div>
                <div className="row  promo">
                    <div className="col-12 col-sm-6 
         ">
                        <NavLink to="./category/acces"><img src="promo1.gif" className="coupons" /></NavLink>


                    </div>
                    <div className="col-12 col-sm-6 "  >


                    <NavLink to="./category/acces"><img src="promo2.gif" className="coupons" /></NavLink>


                    </div>

                </div>
                <div className="row col-12">
                    <img src="deal1.png" className="name_plate" />
                </div>
                <div className="row  deals_top_brands">
                    <div class=" brands col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                       <NavLink to="./deals"> <img src="rebrand.png" className="deal_brand" /></NavLink>
                    </div>
                    <div class=" brands col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                        <NavLink to="top_offer"><img src="rebrand2.png" className="deal_brand" /></NavLink>
                    </div>

                    <div class="   brands col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                    <NavLink to="./deals"><img src="rebrand3.png" className="deal_brand" /></NavLink>
                    </div>
                    <div class="brands col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                    <NavLink to="top_offer"><img src="rebrand4.png" className="deal_brand" /></NavLink>
                    </div>
                    <div class="brands col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                    <NavLink to="./deals"><img src="rebrand5.png" className="deal_brand" /></NavLink>
                    </div>
                    <div class="brands  col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                    <NavLink to="top_offer"><img src="rebrand6.png" className="deal_brand" /></NavLink>
                    </div>



                </div>
                <div className="row col-12">
                    <img src="slashed.png" className="name_plate" />
                </div>
                <div className="row  slashed best_row">
                    <div class=" slashed_div col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                       <NavLink to="./category/clothing"> <img src="slashed1.png" className="slashed_price" /></NavLink>
                                           </div>
                    <div class=" slashed_div col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                       <NavLink to="./category/clothing"> <img src="slashed24.png" className="slashed_price" /></NavLink>
                    </div>

                    <div class="   slashed_div col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                    <NavLink to="./category/clothing"><img src="slashed3.png" className="slashed_price" /></NavLink>
                    </div>
                   
                    <div class="slashed_div col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                    <NavLink to="./category/clothing"><img src="slashed5.png" className="slashed_price" /></NavLink>
                    </div>
                    <div class="slashed_div  col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6" >
                    <NavLink to="./category/acces"><img src="slashed61.png" className="slashed_price" /></NavLink>
                    </div>
                   <div className="slashed_div col-md-2 col-xl-2 col-lg-2 col-sm-6 col-xs-6 col-6">
                       <NavLink to="./category/acces"><img src="slashed4.png" className="slashed_price" /></NavLink>

                   </div>
                </div>
                             <div className="row col-12">
                    <img src="gift.png" className="name_plate" />
                </div >
                <div className="row gift_card best_row"> 
                <div className="col-md-6 col-xl-6 col-lg-6 col-xs-6 col-sm-6 col-6  ">
                   <NavLink to="./gift"><img src="gift1.gif"   style={{"width":"100%"}}  /></NavLink> 
                   </div>
                   <div className="col-md-6 col-xl-6 col-lg-6 col-xs-6 col-sm-6 col-6  ">    
                                      <NavLink  to="./gift"> <img src="gift2.gif" style={{"width":"100%"}} /></NavLink> 
                   </div>

                   </div>

            </>
        )
    }


}
export default Body_desktop;