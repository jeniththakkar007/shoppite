import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Card from 'react-bootstrap/Card'
import './Body_part.css';
import { CardGroup, CardImg, ListGroup, ListGroupItem } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import { Icon } from '@iconify/react';
import 'video-react/dist/video-react.css';

const images = [
  { url: "sale.png" },
  { url: "cloth.png" },
  { url: "gro.png" },
];

const autoPlay = true;

class Body_part extends React.Component {
  render() {
   
  return (
    <>
    <div className="col-md-12 img-ban">
      <SimpleImageSlider
        width={1000}
        height={330}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={5}
        navStyle={1}
        loop={true}
        autoPlay={true}

     
      />
    </div>


    <div className="col-md-12 card-4">
      <div className="col-md-3 card-logo"> 
    <Card style={{width:"15rem" ,  height :"15rem" ,marginTop:"2.54%" }}>
      <CardImg src="aidas_card.png"/>
   
    </Card>
    </div>
    <div className="col-md-3 card-logo"> 
    <Card style={{width:"15rem" ,  height :"15rem" ,marginTop:"2.54%" ,marginRight:"-5%"}}>
    <CardImg src="lap_card.png"/>

    </Card>
    </div>
    <div className="col-md-3 card-logo"> 
    <Card style={{width:"15rem" ,  height :"15rem" ,marginTop:"2.54%"}}>
    <CardImg src="mlural_card.png"/>

    </Card>
    </div>
    <div className="col-md-3 card-logo"> 
    <Card style={{width:"15rem" ,  height :"15rem" ,marginTop:"2.54%"}}>
    <CardImg src="tourism.png"/>

    </Card>
    </div>

    </div>

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card-group">
            <div class="card_elecr" >
                  <img src="elc_1.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">HP Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) </h5>
                    <p class="card-text"><Icon icon="bx:rupee" /> 70,000</p>
                  </div>
                </div>
                <div class="card_elecr" >
                  <img src="elcro_2.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Galaxy S22 Ultra (Awesome White, 128 GB)  (8 GB RAM) </h5>
                    <p class="card-text"><Icon icon="bx:rupee" /> 30,500</p>
                    
                  </div>
                </div>
                <div class="card_elecr" >
                  <img src="elcro_3.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Backspace Air Buds Bass, Voice Assistant Support  Headset  </h5>
                    <p class="card-text"><Icon icon="bx:rupee" /> 3500</p>
                   
                  </div>
                </div>
                <div class="card_elecr" >
                  <img src="elcro_4.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Blue Star Convertible 4-in-1 Cooling 1.2 Ton 3 Star Split Inverter AC - White</h5>
                    <p class="card-text"><Icon icon="bx:rupee" /> 45,000</p>
                  </div>
                </div>
                <div class="card_elecr" >
                  <img src="elcro_5.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Whirlpool 265 L Frost Free Double Door 3 Star Convertible Refrigerator</h5>
                    <p class="card-text"><Icon icon="bx:rupee" /> 45,000</p>
                  </div>
                </div>
              </div>
          </div>
          <div class="carousel-item " >
            <div class="card-group">
                <div class="card_elecr">
                  <img src="elc_1.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div class="card_elecr" >
                  <img src="elc_1.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div class="card_elecr" >
                  <img src="elc_1.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div class="card_elecr" >
                  <img src="elc_1.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div class="card_elecr" >
                  <img src="elc_1.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
          </div>
          <div class="carousel-item ">
            <div class="card-group">
                <div class="card_elecr" >
                  <img src="elc_1.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div class="card_elecr" >
                  <img src="elc_1.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div class="card_elecr">
                  <img src="elc_1.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div class="card_elecr">
                  <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div class="card_elecr">
                  <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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

   <div className="col-md-12 ">

   {/* <Player autoPlay={autoPlay} fluid={true} loop = {true} controls = {false}>
      <source src="./NewColl.mp4" />
    </Player> */}

 <video width="auto" height="auto" autoPlay={true} loop={true}>
    <source src="./NewColl.mp4" type="video/mp4"/>
</video> 


   </div>
  
  </>
    
    
  
    

    
    
  );
}
            
}     
            
            
            
export default Body_part;
        
