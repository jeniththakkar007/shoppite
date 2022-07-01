import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './Mob_body.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import { NavLink } from "react-router-dom";

const images = [
  { url: "final400.png" },
  { url: "final4001.png" },
  { url: "final4002.png" },
];



class Mob_body extends React.Component {

  state_mob = { width: "100%", height: 150 };
  render() {
    return (
      <>
        <div className="col-12  img-ban mob_body1">

          <NavLink to="./category/clothing"> <SimpleImageSlider
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


          /></NavLink></div>

      </>

    );
  }

}



export default Mob_body;