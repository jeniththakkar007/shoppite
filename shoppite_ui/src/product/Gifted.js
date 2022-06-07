import React from "react";
import { NavLink } from "react-router-dom";
import Filtercheck from "../Mobile/Filtercheck";
import { Icon } from '@iconify/react';

export const Gifted=()=>{
    return(
        <>
        <div className="row women">
            <div className="col-md-6 col-xl-6 xol-lg-6 col-sm-12 col-xs-12 col-12">
                <img src={window.location.origin + '/gift_try_1.gif'} alt="img1" style={{"width":"100%"}} />

            </div>
            <div className="col-md-6 col-xl-6 xol-lg-6 col-sm-12 col-xs-12 col-12">
                <img src="gift_try_2.gif" alt="img2" style={{"width":"100%"}}/>

            </div>
            <div className="row">
                <Filtercheck/>
               <div className=" col-md-9 col-xl-9 col-lg-9 col-sm-12 col-xs-12 col-12 laptops">
                    <div>
                        <img src={window.location.origin + '/code_1.png'} alt="shopite_best_seller" className="best_seller_ban" style={{ "width": "100%" }} />
                    </div>
                    <div class="card-group row ">
                        <div className="row women_page">
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps ">
                                <img src={window.location.origin + '/coupon_101.png'} alt="" />
                                <NavLink to="./discript_women"><div class="card-body row body_for_women link_css">
                                    <div className="col-12 compny_name">Shopmart</div>
                                    <div className="col-12 pro_name">Magenta Color Suit</div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />799</span></div>
                                    {/* <div className="col-12 offer_price">20% Off</div> */}

                                </div></NavLink>
                            </div>
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                <img src={window.location.origin + '/coupon_102.png'} alt="" />
                                <NavLink to="./discript_women"><div class="card-body row link_css">
                                    <div className="col-12 compny_name">Shopmart</div>
                                    <div className="col-12 pro_name">Light Grey Suit</div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />899</span></div>
                                    {/* <div className="col-12 offer_price">10% Off</div> */}

                                </div></NavLink>
                            </div>
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                <img src={window.location.origin + '/coupon_103.png'} alt="" />
                                <NavLink to="./discript_women"><div class="card-body row link_css">
                                    <div className="col-12 compny_name">Shopmart</div>
                                    <div className="col-12 pro_name">Green WesternWear</div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 999</span></div>
                                    {/* <div className="col-12 offer_price">25% Off</div> */}

                                </div></NavLink>
                            </div>
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                <img src={window.location.origin + '/coupon_104.png'} alt="" />
                                <NavLink to="./discript_women"> <div class="card-body row link_css">
                                    <div className="col-12 compny_name">Shopmart</div>
                                    <div className="col-12 pro_name">Green Dress</div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 799 </span></div>
                                    {/* <div className="col-12 offer_price">20% Off</div> */}

                                </div></NavLink>
                            </div>

                        </div>
                    </div>
                    <div class="card-group row ">
                        <div className="row women_page">
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps ">
                                <img src={window.location.origin + '/coupon_105.png'} alt="" />
                                <NavLink to="./discript_women"><div class="card-body row body_for_women link_css">
                                    <div className="col-12 compny_name">Shopmart</div>
                                    <div className="col-12 pro_name">Magenta Color Suit</div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />799</span></div>
                                    {/* <div className="col-12 offer_price">20% Off</div> */}

                                </div></NavLink>
                            </div>
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                <img src={window.location.origin + '/coupon_106.png'} alt="" />
                                <NavLink to="./discript_women"><div class="card-body row link_css">
                                    <div className="col-12 compny_name">Shopmart</div>
                                    <div className="col-12 pro_name">Light Grey Suit</div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />899</span></div>
                                    {/* <div className="col-12 offer_price">10% Off</div> */}

                                </div></NavLink>
                            </div>
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                <img src={window.location.origin + '/coupon_107.png'} alt="" />
                                <NavLink to="./discript_women"><div class="card-body row link_css">
                                    <div className="col-12 compny_name">Shopmart</div>
                                    <div className="col-12 pro_name">Green WesternWear</div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 999</span></div>
                                    {/* <div className="col-12 offer_price">25% Off</div> */}

                                </div></NavLink>
                            </div>
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                <img src={window.location.origin + '/coupon_108.png'} alt="" />
                                <NavLink to="./discript_women"> <div class="card-body row link_css">
                                    <div className="col-12 compny_name">Shopmart</div>
                                    <div className="col-12 pro_name">Green Dress</div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 799 </span></div>
                                    {/* <div className="col-12 offer_price">20% Off</div> */}

                                </div></NavLink>
                            </div>

                        </div>
                    </div>
                    <div className="row women">
                      <div className="col-md-6 col-xl-6 xol-lg-6 col-sm-12 col-xs-12 col-12">
                <img src={window.location.origin + '/coupon_code_1.png'} alt="img1" style={{"width":"100%"}} />

            </div>
            <div className="col-md-6 col-xl-6 xol-lg-6 col-sm-12 col-xs-12 col-12">
                <img src="coupon_code_2.png" alt="img2" style={{"width":"100%"}}/>

            </div>
            </div>
                    </div>
            </div>
        </div>
        </>
    )
}