import React from "react";
import { Icon } from '@iconify/react';
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import Filtercheck from "../Mobile/Filtercheck";

export const Acc_1 = () => {
    return (
        <>
            <div className="row">
                <Filtercheck />
                <div className=" col-md-9 col-xl-9 col-lg-9 col-sm-12 col-xs-12 col-12 laptops">


                    <div class="card-group row ">
                        <div className="row women_page">
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps ">
                                <img src={window.location.origin + '/women_acc_1.png'} alt="" />
                                <NavLink to="./discript_lap"><div class="card-body row body_for_women " style={{ "textDecoration": "none" }}>
                                    <div className="col-12 compny_name">Vareli Bafana</div>
                                    <div className="col-12 pro_name">Shehajadi Clutch</div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />4,766<s><Icon icon="fa6-solid:indian-rupee-sign" /> 5,999</s></span></div>
                                    <div className="col-12 offer_price">20% Off</div>

                                </div></NavLink>
                            </div>
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                <img src={window.location.origin + '/women_acc_2.png'} alt="" />
                                <div class="card-body row link_css">
                                    <div className="col-12 compny_name">JayPore</div>
                                    <div className="col-12 pro_name">Gold Hand Embroidered Clutch</div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 4,999 <s><Icon icon="fa6-solid:indian-rupee-sign" />7,000 </s></span></div>
                                    <div className="col-12 offer_price">10% Off</div>

                                </div>
                            </div>
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                <img src={window.location.origin + '/women_acc_3.png'} alt="" />
                                <div class="card-body row link_css">
                                    <div className="col-12 compny_name">GuCCi</div>
                                    <div className="col-12 pro_name"> Black HandBag</div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 8,000 <s><Icon icon="fa6-solid:indian-rupee-sign" /> 9,000</s></span></div>
                                    <div className="col-12 offer_price">25% Off</div>

                                </div>
                            </div>
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                <img src={window.location.origin + '/women_acc_4.png'} alt="" />
                                <div class="card-body row link_css">
                                    <div className="col-12 compny_name">Mammon</div>
                                    <div className="col-12 pro_name"> Mammon Women Handbags Combo </div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,999 </span></div>
                                    {/* <div className="col-12 offer_price">20% Off</div> */}

                                </div>
                            </div>
                        </div>

                        <div className="row women_page">
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                <img src={window.location.origin + '/women_acc_5.png'} alt="" />
                                <div class="card-body row body_for_women link_css">
                                    <div className="col-12 compny_name">Myntra</div>
                                    <div className="col-12 pro_name">Black Belt</div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 266 </span></div>
                                    <div className="col-12 offer_price">20% Off</div>

                                </div>
                            </div>
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps" >
                                <img src={window.location.origin + '/women_acc_6.png'} alt="" />
                                <div class="card-body row link_css">
                                    <div className="col-12 compny_name">Titan</div>
                                    <div className="col-12 pro_name">Swivel from Raga Moments of Joy </div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />  7,295 </span></div>
                                    <div className="col-12 offer_price">30% Off</div>

                                </div>
                            </div>
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                <img src={window.location.origin + '/women_acc_7.png'} alt="" />
                                <div class="card-body row link_css">
                                    <div className="col-12 compny_name">Polugonal</div>
                                    <div className="col-12 pro_name">Polugonal for Women</div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />  71,999<s><Icon icon="fa6-solid:indian-rupee-sign" /> 75,000 </s></span></div>
                                    <div className="col-12 offer_price">25% Off</div>

                                </div>
                            </div>
                            <div class="card  col-md-3 col-xl-3 col-lg-3  col-sm-6 col-xs-6 col-6 laps">
                                <img src={window.location.origin + '/women_acc_8.png'} alt="" />
                                <div class="card-body row link_css " style={{ "textDecoration": "none" }}>
                                    <div className="col-12 compny_name">Prada</div>
                                    <div className="col-12 pro_name">	UV400 SunGlass</div>
                                    <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 5,000 </span></div>
                                    {/* <div className="col-12 offer_price">20% Off</div> */}

                                </div>
                            </div>
                        </div>


                    </div>


                </div>


            </div>
            <Footer />


        </>
    )
}