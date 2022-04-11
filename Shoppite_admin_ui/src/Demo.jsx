import React from "react";
import './demo.css';
import { FcHome , FcAbout , FcContacts , FcServices } from "react-icons/fc";
import Side from "./Side";

const Demo=()=>
{
    return(
        <>
        <div className="container-fuild">
                <div className="row">
                    <div className=" col-2 col-md-2 col-lg-2 col-xl-2" id="r1"><Side/></div>
                </div>
                {/* <div className="row">
                    <div className=" col-2 col-md-2 col-lg-2 col-xl-2" id="r1"><i></i></div>
                </div>
                <div className="row">
                    <div className=" col-2 col-md-2 col-lg-2 col-xl-2" id="r1"><FcContacts className="icon" size="40%"/></div>
                </div>
                <div className="row">
                    <div className=" col-2 col-md-2 col-lg-2 col-xl-2" id="r1"><FcServices className="icon" size="40%"/></div>
                </div> */}
        </div>
        </>
    );
}

export default Demo;