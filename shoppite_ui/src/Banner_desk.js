import React, { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Mob_body from "./Mobile/Mob_body";
import './Banner_desk.css';
import { Route, Routes } from "react-router-dom";
import Categryegory from "./Mobile/Category";


const images = [
    { url: "finalbn1.png" },
    { url: "laptop_banner.png" },
    { url: "shoes_banner.png" },
];

const autoPlay = true;



const Banner_desk = () => {
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
                    <Route path="/category" element={<Categryegory/>}/>
                </Routes>
            </>
        )
    }
    else {

    }



    const state = { width: "100%", height: 300 };


    return (
        <>
            {/* slider */}
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 col-xl-12 col-lg-12 col-12 img-ban">
                    <SimpleImageSlider
                        width={state.width}
                        height={state.height}
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

            

        </>

    );
}





export default Banner_desk;
