import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Card from 'react-bootstrap/Card'
import './Body_part.css';
import { CardGroup, CardImg, ListGroup, ListGroupItem } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol } from "mdb-react-ui-kit";
const images = [
  { url: "sale.png" },
  { url: "cloth.png" },
  { url: "gro.png" },
];

const Body_part = () => {
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
    
    
    
  </>
    
    
  );
}
            
            
            
            
            
           
        export default Body_part;
        
