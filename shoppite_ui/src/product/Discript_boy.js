import { refType } from "@mui/utils";
import React from "react";
import './Discript.css'
import { Icon } from '@iconify/react';
import Footer from "../Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from "react-router-dom";


export class Discript_boy extends React.Component{

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
                    <img src={window.location.origin + '/hat_101.png'} />
                   
                </div>
                <div>
                    <img src={window.location.origin + '/hat_102.png'} />
                 
                </div>
                <div>
                    <img src={window.location.origin + '/hat_103.png'}/>
                 
                </div>
                <div>
                    <img src={window.location.origin + '/hat_104.png'}/>
                
                </div>
                <div>
                    <img src={window.location.origin + '/hat_105.png'} />
                  
                </div>
                
            </Carousel>
          

					<div class="details col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">
						<h3 class="product-title">Cotton twill cap</h3>
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
                        Cap in cotton twill with an adjustable tab and metal fastener at the back, and a cotton sweatband.

Weight70 g
SizeThe model is 185cm/6'1" and wears a size ONESIZE
CompositionCotton 100%	</p>					<h4 class="price">current price: <span><Icon icon="ph:currency-inr-bold" /> 1999</span></h4>
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						{/* <h5 class="sizes">sizes:
							<span class="size" data-toggle="tooltip" title="small">s</span>
							<span class="size" data-toggle="tooltip" title="medium">m</span>
							<span class="size" data-toggle="tooltip" title="large">l</span>
							<span class="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5> */}
						<h5 class="colors">colors:
							<span class="color orange "></span>
							<span class="color green"></span>
							<span class="color blue"></span>
						</h5>
						<div class="action">
							<NavLink to="./cart"><button class="add-to-cart btn btn-default" type="button">add to cart</button></NavLink>
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