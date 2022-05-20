import { refType } from "@mui/utils";
import React from "react";
import { Icon } from '@iconify/react';
import Footer from "../Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from "react-router-dom";


export class Discript_acc extends React.Component{

    render(){
     
        return(
            <>


	<div class="container">
		<div class="card discription_card">
			<div class="container-fliud">
				<div class="wrapper row">
		<div className="row">

  <Carousel showArrows={true}  className="pictures col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">
                <div>
                    <img src={window.location.origin + '/acc_101.png'} />
                   
                </div>
                <div>
                    <img src={window.location.origin + '/acc_102.png'} />
                 
                </div>
                <div>
                    <img src={window.location.origin + '/acc_103.png'}/>
                 
                </div>
                <div>
                    <img src={window.location.origin + '/acc_104.png'}/>
                
                </div>
                <div>
                    <img src={window.location.origin + '/acc_105.png'} />
                  
                </div>
                {/* <div>
                    <img src={window.location.origin + '/img106.png'}/>
                
                </div> */}
            </Carousel>
          

					<div class="details col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">
						<h3 class="product-title">


                        Zaveri Pearls   Rose Gold Plated Circular Drop Earrings</h3>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">52 reviews</span>
						</div>
						<p class="product-description">
                        Rose Gold Circular Earrings, rose gold-plated, and has cubic zirconia
Secured with a lever back</p>
						<h4 class="price">current price: <span><Icon icon="ph:currency-inr-bold" /> 2,34,990</span></h4>
						<p class="vote"><strong>95%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
					
						<div class="action">
						<NavLink  to="../cart">	<button class="add-to-cart btn btn-default" type="button">add to cart</button></NavLink>
							<button class="like btn btn-default" type="button"><Icon icon="akar-icons:heart" /></button>
						</div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <Footer/>
    </>
           
        )
    }
}