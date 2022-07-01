import React, { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Mob_body from "./Mobile/Mob_body";
// import './Banner_desk.css';
import { NavLink, Route, Routes } from "react-router-dom";
import Categryegory from "./Mobile/Category";
import * as Endpoint from "./End_point";


const to =["./category/clothing"]; 
const autoPlay = true;



const Banner_desk = () => {

    

    const [sliderBanner, setsliderBannerList] = useState([])
useEffect(() =>{
   
    fetchSliderBannerList();
  },[])

  const fetchSliderBannerList = async() => {
    await fetch(Endpoint.SLIDERBANNER)
    .then(sb => sb.json())
    .then((slide) => setsliderBannerList(slide));  
}

// const newArr = sliderBanner.map((item) => {

//     return item.banner_img;
 
//  });
const images = sliderBanner.map((s) =>({url:s.banner_img, to:"./category/clothing"} ));
    

    // { url: "laptop_banner.png" ,to:"./category/acces" },
    // { url: "shoes_banner.png" ,to:"./category/footwear"  },
    const images1 = [
        { url: "finalbn1.png",to:"./category/clothing" },
        { url: "laptop_banner.png" ,to:"./category/acces" },
        { url: "shoes_banner.png" ,to:"./category/footwear"  },
    ];
console.log(images)
console.log(images1)


    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return (() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])

    if (screenSize.dynamicWidth <= 450) {
        return (
            <>
                <Mob_body />
                <Routes>
                    <Route path="/category" element={<Categryegory />} />
                </Routes>
            </>
        )
    }
    else {

    }



    const state = { width: "100%", height: 300 };
    // console.log(typeof(sliderBanner))
    console.log(sliderBanner)
    if (!sliderBanner || sliderBanner.length == 0) return <div></div>;
    return (
        <>
            {/* slider */}
            <div className="row " style={{"width":"100%"}}>
                <div className="col-md-11 col-sm-11 col-xs-11 col-xl-11 col-lg-11 col-11 img-ban">
                  <NavLink to={to}>  <SimpleImageSlider
                        width={state.width}
                        height={state.height}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        slideDuration={3}
                        navStyle={1}
                        loop={true}
                        autoPlay={true}
                        // to={to}

                    /></NavLink>
                </div>
            </div>



        </>

    );
}





export default Banner_desk;
