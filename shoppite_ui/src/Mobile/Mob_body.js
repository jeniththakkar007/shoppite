import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './Mob_body.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

const images = [
     { url: "final400.png" },
     { url: "final4001.png" },
    { url: "final4002.png" },
  ];
//   const slide = [
//     { url: "Add1.png" },
//     { url: "Add2.png" },
//    { url: "Add3.png" },
//    { url: "Add4.png" },

//  ];


  class Mob_body extends React.Component {

    state_mob = { width: "100%", height: 150 };
// state_slide ={width : 350 ,height : 200};
    render() {
   console.log("mob_biosyyyy");
           return (
          <>
          {/* <div className="row"> */}
          <div className="col-12  img-ban mob_body1">
            
            <SimpleImageSlider
              width={this.state_mob.width}
              height={this.state_mob.height}
              images={images}
              showBullets={false}
              showNavs={true}
              navSize={20}
              slideDuration={3}
              navStyle={1}
              loop={true}
              autoPlay={true}
      
           
            /></div>


            
   {/* <div className="row">
     <div class="col-4 hello" >
                  <img src="cov1.png"  alt="..."/>
                
      </div>
      <div class="col-4 hello" >
                  <img src="cover2.png"  alt="..."/>
                 
                  </div>
      <div class="col-4 hello" >
                  <img src="recover3.png"  alt="..."/>
                  
      </div>
      </div>

      <div className="col-12 banner">
<img src="400banner.png"/>
      </div>

      <div className="col-10 slide_items ">
            
            <SimpleImageSlider
              width={this.state_slide.width}
              height={this.state_slide.height}
              images={slide}
              showBullets={false}
              showNavs={true}
              navSize={20}
              slideDuration={3}
              navStyle={1}
              loop={true}
              autoPlay={true}
      
           
            /></div>
   
   <div className="row">
     <div class="col-3 sider_card" >
                  <img src="reAdd1118.png"  alt="..."/>
                
      </div>
      <div class="col-3 sider_card" >
                  <img src="reAdd2118.png"  alt="..."/>
                 
                  </div>
      <div class="col-3 sider_card" >
                  <img src="reAdd3118.png"  alt="..."/>
                  
      </div>
      <div class="col-3 sider_card" >
                  <img src="reAdd4118.png"  alt="..."/>
                  
      </div> */}
      {/* </div> */}

      

      


            


          </>
     
  );
}
            
}     
            
            
            
export default Mob_body;