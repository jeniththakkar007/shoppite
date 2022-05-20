import { refType } from "@mui/utils";
import React from "react";
import { Icon } from '@iconify/react';
import Footer from "../Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from "react-router-dom";


export class Discript_lap extends React.Component{

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
                    <img src={window.location.origin + '/img_111.png'} />
                   
                </div>
                <div>
                    <img src={window.location.origin + '/img_112.png'} />
                 
                </div>
                <div>
                    <img src={window.location.origin + '/img_113.png'}/>
                 
                </div>
                <div>
                    <img src={window.location.origin + '/img_114.png'}/>
                
                </div>
                <div>
                    <img src={window.location.origin + '/img_115.png'} />
                  
                </div>
                {/* <div>
                    <img src={window.location.origin + '/img106.png'}/>
                
                </div> */}
            </Carousel>
          

					<div class="details col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 col-12">
						<h3 class="product-title">


Space GreySilver
MacBook Pro 16-inch 10-Core CPU
32-Core GPU
32GB Unified Memory
1TB SSD Storage¹</h3>
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
                        16-core Neural Engine
41.05 cm (16.2-inch) Liquid Retina XDR display
Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3 port
Magic Keyboard with Touch ID
Force Touch trackpad
140W USB-C Power Adapter</p>
						<h4 class="price">current price: <span><Icon icon="ph:currency-inr-bold" /> 2,34,990</span></h4>
						<p class="vote"><strong>95%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 class="sizes">RAM:
							<span class="size" data-toggle="tooltip" title="small">16GB</span>
							<span class="size" data-toggle="tooltip" title="medium">64GB</span>
							<span class="size" data-toggle="tooltip" title="large">512 GB</span>
							<span class="size" data-toggle="tooltip" title="xtra large">1 Tb</span>
						</h5>
						<h5 class="colors">colors:
							<span class="color orange "></span>
							<span class="color green"></span>
							<span class="color blue"></span>
						</h5>
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