import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import './Category.css';

class Categryegory extends React.Component{
    render(){
        return(
            <>  <div className="row">
                <div className="col-6 categry">
                        <NavLink to="./clothing"><img src="cat4.png"/></NavLink>
                </div>
                <div className="col-6 categry">
                <NavLink to="./electric"><img src="cat2.png"/></NavLink>
                </div>
                <div className="col-6 categry">
                <NavLink to="./top_offer"><img src="cat3.png"/></NavLink>
                </div>
                <div className="col-6 categry">
                <NavLink to="./shoes"><img src="cat1.png"/></NavLink>
                </div>
                <div className="col-6 categry">
                <NavLink to="./discount"><img src="cat5.png"/></NavLink>
                </div>
                <div className="col-6 categry">
                <NavLink to="./newrelease"><img src="cat6.png"/></NavLink>
                </div>
                <div className="col-6 categry">
                <NavLink to="./month_offer"><img src="cat7.png"/></NavLink>
                </div>
                <div className="col-6 categry">
                <NavLink to="./top_offer"><img src="cat8.png"/></NavLink>
                </div>
                <div className="col-6 categry">
                <NavLink to="./gift"><img src="cat9.png"/></NavLink>
                </div>
                <div className="col-6 categry">
                <NavLink to="./discount"><img src="cat10.png"/></NavLink>
                </div>
                <div className="col-6 categry">
                <NavLink to="./best_seller"> <img src="cat11.png"/></NavLink>
                </div>
                <div className="col-6 categry">
                <NavLink to="./newrelease"><img src="cat12.png"/></NavLink>
                </div>
               
               

                </div>


{/* <Footer/> */}

          

            </>
        )
    }
}
export default Categryegory;