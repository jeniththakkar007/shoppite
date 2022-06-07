import { refType } from "@mui/utils";
import React from "react";
import './Discript.css'
import { Icon } from '@iconify/react';
import Footer from "../Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from "react-router-dom";


export class Discription_men extends React.Component {

    render() {

        return (
            <>


                <div class="container">
                    <div class="card discription_card">
                        <div class="container-fliud">
                            <div class="wrapper row">
                                <div className="row">

                                    <Carousel showArrows={true} className="pictures col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">
                                        <div>
                                            <img src={window.location.origin + '/dist_107.png'} />

                                        </div>
                                        <div>
                                            <img src={window.location.origin + '/dist_108.png'} />

                                        </div>
                                        <div>
                                            <img src={window.location.origin + '/dist_109.png'} />

                                        </div>
                                        <div>
                                            <img src={window.location.origin + '/dist_110.png'} />

                                        </div>
                                        <div>
                                            <img src={window.location.origin + '/dist_111.png'} />

                                        </div>
                                     
                                    </Carousel>


                                    <div class="details col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">
                                        <h3 class="product-title">Men Navy Three Piece Suit</h3>
                                        <div class="rating">
                                            <div class="stars">
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                            </div>
                                            <span class="review-no">41 reviews</span>
                                        </div>
                                        <p class="product-description">
                                        Define your presence in this immaculate navy solid three-piece suit, cut in a sharp Slim Fit from Peter England Elite by Peter England.</p>
                                        <h4 class="price">current price: <span><Icon icon="ph:currency-inr-bold" /> 11,999</span></h4>
                                        <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                                        <h5 class="sizes">sizes:
                                            <span class="size" data-toggle="tooltip" title="small">s</span>
                                            <span class="size" data-toggle="tooltip" title="medium">m</span>
                                            <span class="size" data-toggle="tooltip" title="large">l</span>
                                            <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
                                        </h5>
                                        <h5 class="colors">colors:
                                            <span class="color orange "></span>
                                            <span class="color green"></span>
                                            <span class="color blue"></span>
                                        </h5>
                                        <div class="action">
                                           <NavLink to="./cart"> <button class="add-to-cart btn btn-default" type="button">add to cart</button></NavLink>
                                            <button class="like btn btn-default" type="button"><Icon icon="akar-icons:heart" /></button>
                                        </div>
                                        <br />
                                        <div class="rate">
                                            <span className="user_rating"> Rating</span>
                                            <input type="radio" id="star5" name="rate" value="5" />
                                            <label for="star5" title="text">5 stars</label>
                                            <input type="radio" id="star4" name="rate" value="4" />
                                            <label for="star4" title="text">4 stars</label>
                                            <input type="radio" id="star3" name="rate" value="3" />
                                            <label for="star3" title="text">3 stars</label>
                                            <input type="radio" id="star2" name="rate" value="2" />
                                            <label for="star2" title="text">2 stars</label>
                                            <input type="radio" id="star1" name="rate" value="1" />
                                            <label for="star1" title="text">1 star</label>
                                        </div>
                                        <div className="review_class">
                                            <div class="side">
                                                <div>5 star</div>
                                            </div>
                                            <div class="middle">
                                                <div class="bar-container">
                                                    <div class="bar-5"></div>
                                                </div>
                                            </div>
                                            <div class="side right">
                                                <div>150</div>
                                            </div>
                                            <div class="side">
                                                <div>4 star</div>
                                            </div>
                                            <div class="middle">
                                                <div class="bar-container">
                                                    <div class="bar-4"></div>
                                                </div>
                                            </div>
                                            <div class="side right">
                                                <div>63</div>
                                            </div>
                                            <div class="side">
                                                <div>3 star</div>
                                            </div>
                                            <div class="middle">
                                                <div class="bar-container">
                                                    <div class="bar-3"></div>
                                                </div>
                                            </div>
                                            <div class="side right">
                                                <div>15</div>
                                            </div>
                                            <div class="side">
                                                <div>2 star</div>
                                            </div>
                                            <div class="middle">
                                                <div class="bar-container">
                                                    <div class="bar-2"></div>
                                                </div>
                                            </div>
                                            <div class="side right">
                                                <div>6</div>
                                            </div>
                                            <div class="side">
                                                <div>1 star</div>
                                            </div>
                                            <div class="middle">
                                                <div class="bar-container">
                                                    <div class="bar-1"></div>
                                                </div>
                                            </div>
                                            <div class="side right">
                                                <div>20</div>
                                            </div>
                                        </div>
                                        <div class="accordion-wrapper">
                                            <div class="accordion">
                                                <input type="radio" name="radio-a" id="check1" checked className="input_class" />
                                                <label class="accordion-label" for="check1">Accordion 1</label>
                                                <div class="accordion-content">
                                                    <p>Hey there, you are watching codiesbugs &#128522;</p>
                                                </div>
                                            </div>
                                            <div class="accordion">
                                                <input type="radio" name="radio-a" id="check2" className="input_class" />
                                                <label class="accordion-label" for="check2">Accordion 2</label>
                                                <div class="accordion-content">
                                                    <p>I hope you are enjoing the video, don't forget to give your feedback in comment section</p>
                                                </div>
                                            </div>
                                            <div class="accordion">
                                                <input type="radio" name="radio-a" id="check3" className="input_class" />
                                                <label class="accordion-label" for="check3">Accordion 3</label>
                                                <div class="accordion-content">
                                                    <p>If you liked then don't forget to subscribe the channel for latest videos. </p>
                                                </div>
                                            </div>
                                        </div>
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
}