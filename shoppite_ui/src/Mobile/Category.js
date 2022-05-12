import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
// import './Category.css';

class Categryegory extends React.Component{
    render(){
        return(
            <>  <div className="row">
                <div className="col-6 categry">
                        <NavLink to="./clothing"><img src="cat4.png"/></NavLink>
                </div>
                <div className="col-6 categry">
                        <img src="cat2.png"/>
                </div>
                <div className="col-6 categry">
                        <img src="cat3.png"/>
                </div>
                <div className="col-6 categry">
                        <img src="cat1.png"/>
                </div>
                <div className="col-6 categry">
                        <img src="cat5.png"/>
                </div>
                <div className="col-6 categry">
                        <img src="cat6.png"/>
                </div>
                <div className="col-6 categry">
                        <img src="cat7.png"/>
                </div>
                <div className="col-6 categry">
                        <img src="cat8.png"/>
                </div>
                <div className="col-6 categry">
                        <img src="cat9.png"/>
                </div>
                <div className="col-6 categry">
                        <img src="cat10.png"/>
                </div>
                <div className="col-6 categry">
                        <img src="cat11.png"/>
                </div>
                <div className="col-6 categry">
                        <img src="cat12.png"/>
                </div>
               
               

                </div>


{/* <Footer/> */}

          

            </>
        )
    }
}
export default Categryegory;