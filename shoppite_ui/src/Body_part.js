import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './Body_part.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import { Icon } from '@iconify/react';
import 'video-react/dist/video-react.css';


const images = [
  { url: "finalbn1.png" },
  { url: "laptop_banner.png" },
  { url: "shoes_banner.png" },
];

const autoPlay = true;

class Body_part extends React.Component {
  
  state = { width: "100%",height : 300 };



  render() {
   
  return (
    <>
    {/* slider */}
    <div className="row">
    <div className="col-md-12 col-sm-12 col-xs-12 col-xl-12 col-lg-12 col-12 img-ban">
      <SimpleImageSlider
        width={this.state.width}
        height={this.state.height}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={3}
        navStyle={1}
        loop={true}
        autoPlay={true}

     
      />
    </div>
  
    </div>



<div class="main">
  <h1>Responsive Card Grid Layout</h1>
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li><li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=5"/></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    </ul>
</div>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <div class="card-group row">
            <div class=" card_elecr offset-1 col-md-2 col-xl-2 col-lg-2 col-sm-2 col-xs-2  col-2" >
                  <img src="elcro.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title" >HP Core i3 11th Gen  </h5>
                    <p class="card-text"><Icon icon="bx:rupee" /> 70,000</p>
                  </div>
                </div>
                <div class=" card_elecr  col-md-2 col-xl-2 col-lg-2 col-sm-2 col-xs-2 col-2" >
                  <img src="elcro_2.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Galaxy S22 Ultra  </h5>
                    <p class="card-text"><Icon icon="bx:rupee" /> 30,500</p>
                    
                  </div>
                </div>
                <div class=" card_elecr  col-md-2 col-xl-2 col-lg-2 col-sm-2 col-xs-2 col-2" >
                  <img src="elcro_3.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Backspace Air Buds  </h5>
                    <p class="card-text"><Icon icon="bx:rupee" /> 3500</p>
                   
                  </div>
                </div>
                <div class=" card_elecr  col-md-2 col-xl-2 col-lg-2 col-sm-2 col-xs-2 col-2" >
                  <img src="elcro_4.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Blue Star Convertible Inverter AC</h5>
                    <p class="card-text"><Icon icon="bx:rupee" /> 45,000</p>
                  </div>
                </div>
                <div class=" card_elecr  col-md-2 col-xl-2 col-lg-2 col-sm-2 col-xs-2 col-2" >
                  <img src="elcro_5.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Whirlpool 265 L Refrigerator</h5>
                    <p class="card-text"><Icon icon="bx:rupee" /> 45,000</p>
                  </div>
                </div>
              </div>
          </div>
          <div class="carousel-item " >
            <div class="card-group row">
                <div class=" card_elecr offset-1  col-md-2 col-xl-2 col-lg-2 col-sm-2  col-2">
                  <img src="elcro_10.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">boAt Bluetooth Headset  </h5>
                    <p class="card-text"><Icon icon="bx:rupee" /> 5,000</p>

                  </div>
                </div>
                <div class=" card_elecr  col-md-2 col-xl-2 col-lg-2 col-sm-2  col-2" >
                  <img src="elcro1.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title"> Mini Blutooth Speaker </h5>
                    <p class="card-text"><Icon icon="bx:rupee" /> 2,300</p>

                  </div>
                </div>
                <div class=" card_elecr  col-md-2 col-xl-2 col-lg-2 col-sm-2  col-2" >
                  <img src="elcro6.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">IFB  Front Heater Silver  </h5>
                    <p class="card-text"><Icon icon="bx:rupee" /> 39,000</p>

                  </div>
                </div>
                <div class=" card_elecr  col-md-2 col-xl-2 col-lg-2 col-sm-2  col-2" >
                  <img src="elcro2.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Aroma Neckband Bluetooth Headset</h5>
                    <p class="card-text"><Icon icon="bx:rupee" /> 1,520</p>

                
                  </div>
                </div>
                <div class=" card_elecr  col-md-2 col-xl-2 col-lg-2 col-sm-2  col-2" >
                  <img src="elcro_11.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">HUAWEI Mate X2 Dual Big Core</h5>
                    <p class="card-text"><Icon icon="bx:rupee" /> 60,000</p>

                   
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

   <div className="col-md-12 col-sm-12 col-xs-12 col-xl-12 col-lg-12 col-12 sofabanner">

   {/* <Player autoPlay={autoPlay} fluid={true} loop = {true} controls = {false}>
      <source src="./NewColl.mp4" />
    </Player> */}

 {/* <video width="auto" height="auto" autoPlay={true} loop={true}>
    <source src="./NewColl.mp4" type="video/mp4"/>
</video>  */}
<img src="furnituresale.png" className="sofa_bann"/>


   </div>
   <div className="row furniture">
     <div class="col-md-6 col-xl-3 col-lg-6 col-6 col-sm-6 " >
                  <img src="chair_1.png"  alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title"> </h5>
                    <p class="card-text"><Icon icon="bx:rupee" fontSize={11} /><span className="price-fur"> 17,000</span></p>

                  </div>
      </div>
      <div class="col-md-6 col-xl-3 col-lg-6 col-6 col-sm-6 " >
                  <img src="chair_2.png"  alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title"> </h5>
                    <p class="card-text"><Icon icon="bx:rupee" fontSize={11} /><span className="price-fur"> 9,000</span></p>

                  </div>
      </div>
      <div class="col-md-6 col-xl-3 col-lg-6 col-6 col-sm-6 " >
                  <img src="chair_3.png"  alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title"> </h5>
                    <p class="card-text"><Icon icon="bx:rupee" fontSize={11} /><span className="price-fur"> 3,500</span></p>

                  </div>
      </div>
      <div class="col-md-6 col-xl-3 col-lg-6 col-6 col-sm-6 " >
                  <img src="chair_4.png"  alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title"> </h5>
                    <p class="card-text"><Icon icon="bx:rupee" fontSize={11} /><span className="price-fur"> 7,000</span></p>
                  </div>
                  
      </div>
      

   </div>


   <div className=" row
    clothing">

   <div class="col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-12 " >
                  <img src="female.png"  alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title"> </h5>
                  </div>
                  </div>

             <div class="col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-12" >
                  <img src="male_final.png"  alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title"> </h5>
                  </div>
                  </div>
   </div>

    <div className="row cloth">
     <div class="col-md-3 col-xl-3 col-lg-3 col-6 col-sm-6  cloth-size" >
                  <img src="westernwear_g .png"  alt="..."/>
                  
      </div>
      <div class="col-md-3 col-xl-3 col-lg-3 col-6 col-sm-6  cloth-size  " >
                  <img src="ethnicwear_g .png"  alt="..."/>
                 
      

                  </div>  
      
      <div class="col-md-3 col-xl-3 col-lg-3 col-6 col-sm-6  cloth-size  " >
                  <img src="westernwear_b .png"  alt="..."/>
                 
    

                 
      </div>
      <div class="col-md-3 col-xl-3 col-lg-3 col-6 col-sm-6  cloth-size  " >
                  <img src="ethnicwear_b .png"  alt="..."/>
                 

                
                  
      </div>
      {/* <div class="col-md-6 col-xl-3 col-lg-6 col-6 col-sm-6 cloth-size  " >
                  <img src="workwear2 .png"  alt="..."/>
               
                    
                  </div> */}

  </div>

  </>
     
  );
}
            
}     
            
            
            
export default Body_part;
        
