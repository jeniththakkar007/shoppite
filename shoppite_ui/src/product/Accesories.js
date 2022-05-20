import React from "react";
import Filterscheck from '../Mobile/Filtercheck';
import { Icon } from '@iconify/react';
import Footer from "../Footer";
import { NavLink } from "react-router-dom";

export const Accesories = () => {
    return (
        <>
            <div className="row">
                <Filterscheck />
                <div className="col-md-9 col-xl-9 col-lg-9 col-sm-12 col-xs-12 col-12">
                    <div className="gif" >

                        <img src={window.location.origin + '/acc_try_1.gif'} alt="gif" className="acc_gif" style={{ "width": "100%" }} />
                    </div>
                    <div class="card-group row women">
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/cluth_1.png'} alt="" className="flipcard" />
                            <NavLink to="./acc_1"><div class="card-body row link_css">
                                <div className="col-12 compny_name">Myntra</div>
                                <div className="col-12 pro_name">Myntra Flower Cluth</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />999<s><Icon icon="fa6-solid:indian-rupee-sign" />1,599 </s></span></div>
                                <div className="col-12 offer_price">20% Off</div>

                            </div></NavLink>

                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/cluth_2.png'} alt="" className="flipcard" />
                            <div class="card-body row ">
                                <div className="col-12 compny_name">Trends</div>
                                <div className="col-12 pro_name">Pink Diamond Cluth</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />3,999 <s><Icon icon="fa6-solid:indian-rupee-sign" />5,999</s></span></div>
                                <div className="col-12 offer_price">25% off</div>

                            </div>
                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/bag_1.png'} alt="" className="flipcard" />
                            <div class="card-body row " >
                                <div className="col-12 compny_name">Myntra</div>
                                <div className="col-12 pro_name">HandBag For Women</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />6,999</span></div>
                                <div className="col-12 offer_price"></div>

                            </div>
                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/bag_2.png'} alt="" className="flipcard" />
                            <div class="card-body row ">
                                <div className="col-12 compny_name">Clot Bags</div>
                                <div className="col-12 pro_name"> Pink HandBag Office Wear</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 3,970</span></div>
                                <div className="col-12 offer_price"></div>

                            </div>
                        </div>
                    </div>
                    <div class="card-group row women">
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/belt_1.png'} alt="" className="flipcard" />
                            <NavLink to="./acc_2"><div class="card-body row link_css">
                                <div className="col-12 compny_name">Trends</div>
                                <div className="col-12 pro_name">Brown Weastern Belt</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />599<s><Icon icon="fa6-solid:indian-rupee-sign" />899</s></span></div>
                                <div className="col-12 offer_price">10% Off</div>

                            </div></NavLink>

                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/belt_2.png'} alt="" className="flipcard" />
                            <div class="card-body row ">
                                <div className="col-12 compny_name">Zudio</div>
                                <div className="col-12 pro_name">Pearl Ethnic Belt</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 699<s><Icon icon="fa6-solid:indian-rupee-sign" />999</s></span></div>
                                <div className="col-12 offer_price">10% Off</div>

                            </div>
                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/clip_1.png'} alt="" className="flipcard" />
                            <div class="card-body row " >
                                <div className="col-12 compny_name">Vintage</div>
                                <div className="col-12 pro_name">Green Hair Clip</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />799<s><Icon icon="fa6-solid:indian-rupee-sign" /> 999 </s></span></div>
                                <div className="col-12 offer_price">10% off</div>

                            </div>
                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/clip_2.png'} alt="" className="flipcard" />
                            <div class="card-body row ">
                                <div className="col-12 compny_name">Toniq</div>
                                <div className="col-12 pro_name">Hair Pearl Hair Pin</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />499 </span></div>
                                <div className="col-12 offer_price"></div>

                            </div>
                        </div>
                    </div>
                    <div class="card-group row women">
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/neck_1.png'} alt="" className="flipcard" />
                            <NavLink to="./acc_1"><div class="card-body row link_css">
                                <div className="col-12 compny_name">TBZ</div>
                                <div className="col-12 pro_name">Delicate Diamond Necklace</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />5,599<s><Icon icon="fa6-solid:indian-rupee-sign" />8,999</s></span></div>
                                <div className="col-12 offer_price">10% Off</div>

                            </div></NavLink>

                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/neck_2.png'} alt="" className="flipcard" />
                            <div class="card-body row ">
                                <div className="col-12 compny_name">Tanishq</div>
                                <div className="col-12 pro_name">Kitty Necklace</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 6,999<s><Icon icon="fa6-solid:indian-rupee-sign" />9,999</s></span></div>
                                <div className="col-12 offer_price">10% Off</div>

                            </div>
                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/neck_3.png'} alt="" className="flipcard" />
                            <div class="card-body row " >
                                <div className="col-12 compny_name">Kalyan Jewellers</div>
                                <div className="col-12 pro_name">Diamond Colourfull Necklace</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />8,999<s><Icon icon="fa6-solid:indian-rupee-sign" />10,000  </s></span></div>
                                <div className="col-12 offer_price">20% Off</div>

                            </div>
                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/neck_4.png'} alt="" className="flipcard" />
                            <div class="card-body row ">
                                <div className="col-12 compny_name">Joyalukas</div>
                                <div className="col-12 pro_name">Red Necklace</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />9,999 </span></div>
                                <div className="col-12 offer_price"></div>

                            </div>
                        </div>
                    </div>
                    <div className="women_sale_ban row">
<div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">   <img src={window.location.origin + '/acc_try_1.png'} className="wom_ban"/></div>
<div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">   <img src={window.location.origin + '/acc_try_2.png'}  className="wom_ban"/></div>
</div>
                    <div class="card-group row women">
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/ear_1.png'} alt="" className="flipcard" />
                            <NavLink to="./acc_2"><div class="card-body row ">
                                <div className="col-12 compny_name">Kalyan Jewellers</div>
                                <div className="col-12 pro_name">Green Gold Plated Earrings</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />89,999    <s><Icon icon="fa6-solid:indian-rupee-sign" /> 1,00,000</s></span></div>
                                <div className="col-12 offer_price">10% Off</div>

                            </div></NavLink>

                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/ear_2.png'} alt="" className="flipcard" />
                            <div class="card-body row ">
                                <div className="col-12 compny_name">Vivah</div>
                                <div className="col-12 pro_name">Diamond Gold Earrings</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,96,666<s><Icon icon="fa6-solid:indian-rupee-sign" /> 2,00,000</s></span></div>
                                <div className="col-12 offer_price">5% Off</div>

                            </div>
                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/ear_3.png'} alt="" className="flipcard" />
                            <div class="card-body row " >
                                <div className="col-12 compny_name">Bhima Jewellers</div>
                                <div className="col-12 pro_name">Blue Diamond Earrings</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />9,999<s><Icon icon="fa6-solid:indian-rupee-sign" /> 15,999 </s></span></div>
                                <div className="col-12 offer_price">25% Off</div>

                            </div>
                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/ear_4.png'} alt="" className="flipcard" />
                            <div class="card-body row ">
                                <div className="col-12 compny_name">Senco </div>
                                <div className="col-12 pro_name">Long Diamond Earrings</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 89,999</span></div>
                                <div className="col-12 offer_price"></div>

                            </div>
                        </div>
                    </div>
                    <div class="card-group row women">
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/ring_1.png'} alt="" className="flipcard" />
                            <NavLink to="./acc_1"><div class="card-body row ">
                                <div className="col-12 compny_name"> Malabar Gold and Diamonds</div>
                                <div className="col-12 pro_name">White Diamond Ring</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />59,999<s><Icon icon="fa6-solid:indian-rupee-sign" />69,999</s></span></div>
                                <div className="col-12 offer_price">30% Off</div>

                            </div></NavLink>

                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/ring_2.png'} alt="" className="flipcard" />
                            <div class="card-body row ">
                                <div className="col-12 compny_name">TBZ</div>
                                <div className="col-12 pro_name">Gold Ring</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 89,999</span></div>
                                <div className="col-12 offer_price"></div>

                            </div>
                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/brc_1.png'} alt="" className="flipcard" />
                            <div class="card-body row " >
                                <div className="col-12 compny_name">Krishna Jewellers</div>
                                <div className="col-12 pro_name"> Silver Flower Diamond Bracelet </div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />3,499</span></div>
                                <div className="col-12 offer_price"></div>

                            </div>
                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/brc_2.png'} alt="" className="flipcard" />
                            <div class="card-body row ">
                                <div className="col-12 compny_name">Tanishq</div>
                                <div className="col-12 pro_name">Gold Bracelet</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 92,150</span></div>
                                <div className="col-12 offer_price"></div>

                            </div>
                        </div>
                    </div>
                    <div class="card-group row women">
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/wtch_1.png'} alt="" className="flipcard" />
                            <NavLink to="./acc_2"><div class="card-body row ">
                                <div className="col-12 compny_name">Ray Ban</div>
                                <div className="col-12 pro_name">Diamond Ladies Watch</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />8,999</span></div>
                                <div className="col-12 offer_price"></div>

                            </div></NavLink>

                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/wtch_2.png'} alt="" className="flipcard" />
                            <div class="card-body row ">
                                <div className="col-12 compny_name">Rolex</div>
                                <div className="col-12 pro_name">Black Delicate Watch</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />9,999 <s><Icon icon="fa6-solid:indian-rupee-sign" />15,000</s></span></div>
                                <div className="col-12 offer_price">10% Off</div>

                            </div>
                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/sun_1.png'} alt="" className="flipcard" />
                            <div class="card-body row " >
                                <div className="col-12 compny_name">Lenskart</div>
                                <div className="col-12 pro_name">Purple SunGlass For Women</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1,470</span></div>
                                <div className="col-12 offer_price"></div>

                            </div>
                        </div>
                        <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 ">
                            <img src={window.location.origin + '/sun_2.png'} alt="" className="flipcard" />
                            <div class="card-body row ">
                                <div className="col-12 compny_name">Polaroid</div>
                                <div className="col-12 pro_name">SunGlass For Women</div>
                                <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />6,999 </span></div>
                                <div className="col-12 offer_price"></div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>

        </>
    )
}