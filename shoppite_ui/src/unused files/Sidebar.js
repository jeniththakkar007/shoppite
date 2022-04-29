import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css'
import './Toggling';
import { GiHouse, GiElectric ,GiLipstick } from 'react-icons/gi';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import BalanceSharpIcon from '@mui/icons-material/BalanceSharp';
import FastfoodSharpIcon from '@mui/icons-material/FastfoodSharp';
import DesktopWindowsSharpIcon from '@mui/icons-material/DesktopWindowsSharp';
import WcSharpIcon from '@mui/icons-material/WcSharp';

var a = 0;

class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            mobileview: false,
            Sidebar: true
        }
        this.updateview = this.updateview.bind(this);
        this.toggle = this.toggle.bind(this);


    }
    updateview() {
        if (!this.state.mobileview && document.documentElement.clientWidth < 1024) {

            if (this.state.Sidebar) {
                this.setState({
                    mobileview: true,
                    Sidebar: false
                })
                this.toggle(0);

            }


        } else if (document.documentElement.clientWidth > 1024) {

            this.setState({
                mobileview: false,
                Sidebar: true
            })

        }

    }
    togglechnge() {
        this.setState({
            Sidebar: this.state.Sidebar
        })
        this.toggle(1);
    }
    toggle(stat) {
        a++;

        if (!this.state.Sidebar || a % 2 == 0) {

            document.getElementById("d1").style.width = "10vh";
            var ic = document.getElementsByClassName("c2");
            for (let index = 0; index < ic.length; index++) {
                const element = ic[index];
                element.style.display = "none";
                console.log(window.innerWidth);

            }
            document.getElementById("img1").style.display = "none";
        } else {
            document.getElementById("d1").style.width = "100%";
            var ic = document.getElementsByClassName("c2");
            for (let index = 0; index < ic.length; index++) {
                const element = ic[index];
                element.style.display = "grid"
            }
            document.getElementById("img1").style.display = "inline";

            if (this.state.Sidebar = false) {
                this.state.Sidebar = true;

            }
        }
        if (stat == 0) {
            this.setState({
                Sidebar: !this.state.Sidebar
            })
        }
    }
    componentWillMount() {
        this.updateview();
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateview);
        this.toggle(1);
        this.c();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateview);
    }
    c() {
        var togi = document.getElementsByClassName("caret");
        var i;

        for (i = 0; i < togi.length; i++) {
            togi[i].addEventListener("click", function() {
             this.parentElement.querySelector('.nested').classList.toggle('active');
            
             
            });
        }
    }
    
    render() {
        return ( <>


            <div id = "d1" >


            <div className = "sidebar"
            id = "s1" >
            
            


            <img src = "/Shoppite.png"
            style = {
                { display: "none" } }
            id = "img1" />
    
    
     {/* home Decor */}
            <div className = "nav-class" >
        <div className="side-nav-toggle">  <GiHouse size={22} />
        <span className="c2" style={{ display: "none" }}  >
            <ul class="myul">
              <li>
       <span className="caret"> Home Decor
      </span> 
      <ul className="nested" >
         <li ><NavLink to="/home" className="active"> Lighting </NavLink> </li>
         <li><NavLink to="/home" className="active"> Painting & Wallpapers</NavLink></li>
         <li ><NavLink to="/home" className="active">Wall Decor</NavLink> </li>
      </ul>
    
   </li>

   </ul>
   </span>

   </div>
{/* Grocery */}
   <div className="side-nav-toggle">  <FastfoodSharpIcon  size={22} />
        <span className="c2" style={{ display: "none" }}   >
            <ul class="myul">
              <li>
       <span className="caret">Grocery
      </span> 
      <ul className="nested" >
         <li><NavLink to="/home" className="active"> Snacks & Beverages </NavLink></li>
         <li><NavLink to="/home" className="active">Household Care</NavLink></li>
         <li><NavLink to="/home" className="active">Dairy Products</NavLink></li>
      </ul>
    
   </li>

   </ul>
   </span>

   
   </div>
{/* Appliances */}
   <div className="side-nav-toggle">  < DesktopWindowsSharpIcon size={22} />
        <span className="c2" style={{ display: "none" }}   >
            <ul class="myul">
              <li>
       <span className="caret">Appliances
      </span> 
      <ul className="nested" >
         <li><NavLink to="/home" className="active"> Kitchen Appliances </NavLink></li>
         <li><NavLink to="/home" className="active"> Home Appliances</NavLink></li>
         <li><NavLink to="/home" className="active"> Seasonal Appliances</NavLink></li>
      </ul>
    
   </li>

   </ul>
   </span>

   
   </div>

   {/*Elecronic */}

  <div className="side-nav-toggle">  < GiElectric size ={22} />
        <span className="c2" style={{ display: "none" }}   >
            <ul class="myul">
              <li>
       <span className="caret"> Electronic </span> 
      <ul className="nested" >
         <li><NavLink to="/laptop" className="active"> Laptop</NavLink></li>
         <li><NavLink to="/home" className="active"> Mobile </NavLink></li>
      </ul>
    
   </li>

   </ul>
   </span>

   
   </div>


  {/* Beauty & Toys */}

  <div className="side-nav-toggle">  < GiLipstick size ={22} />
        <span className="c2" style={{ display: "none" }}   >
            <ul class="myul">
              <li>
       <span className="caret"> Beauty & Toys</span> 
      <ul className="nested" >
         <li><NavLink to="/home" className="active"> Baby Care</NavLink></li>
         <li><NavLink to="/home" className="active"> Men's Grooming </NavLink></li>
         <li><NavLink to="/home" className="active"> Women's Jwellery</NavLink></li>
      </ul>
    
   </li>

   </ul>
   </span>

   
   </div>

   {/* Men & Women */}

  <div className="side-nav-toggle">  < WcSharpIcon size ={22} />
        <span className="c2" style={{ display: "none" }}   >
            <ul class="myul">
              <li>
       <span className="caret">Men & Women</span> 
      <ul className="nested" >
         <li><NavLink to="/home" className="active">  Women Ethanic</NavLink></li>
         <li><NavLink to="/home" className="active"> Women Western </NavLink></li>
         <li><NavLink to="/home" className="active"> Men Ethanic </NavLink></li>
         <li><NavLink to="/home" className="active"> Men Western </NavLink></li>
         <li><NavLink to="/home" className="active"> Accesories </NavLink></li>
         <li><NavLink to="/home" className="active"> Footwear </NavLink></li>
         
      </ul>
    
   </li>

   </ul>
   </span>

   
   </div>

   



   </div>
   


   



  


   
   {/* <div>
            <ul class="u12">
            <li className="c4">
      <span>
         <i class="fas fa-home">
            <GiElectric size={22} />
         </i>
         <span className="c2" style={{ display: "none" }}  >Home & Appliances
      </span>
      <ul className="u1" >
         <li className="c2" style={{ display: "none" }}>
         <NavLink to="/home"> 
            Home Decoration
         </NavLink>
         </li>
         <li className="c2" style={{ display: "none" }}><NavLink to="/home"> Furniture        
         </NavLink></li>
      </ul>
      </span >
   </li></ul>
   </div> */}
   



   

   {/* <li className="c4">
      <span to="/dashboard" className="active">
         <i class="fas fa-desktop">
            <GiElectric size={22} />
         </i>
         <span className="c2" style={{ display: "none" }}>Electronic</span>
         <ul className="u1">
            <li className="c2" style={{ display: "none" }}><NavLink  className="c3" ></NavLink>Laptop</li>
            <li className="c2" style={{ display: "none" }}><span  className="c3" ></span>Mobile</li>
         </ul>
      </span >
   </li>
   <li>
      <NavLink to="/solutions" className="active">
         <i class="fas fa-tachometer-alt">
            <ImWoman size={22} />
         </i>
         <span className="c2" style={{ display: "none" }}>Women</span>
         <ul>
            <li className="c2" style={{ display: "none" }}><span  className="c3" onClick={this.c()}></span>Women Ethanic</li>
            <li className="c2" style={{ display: "none" }}><span  className="c3" onClick={this.c()}></span>Women Western</li>
            <li className="c2" style={{ display: "none" }}><span  className="c3" onClick={this.c()}></span>Women Accesories</li>
         </ul>
      </NavLink >
   </li>
   <li>
      <NavLink to="/solutions" className="active">
         <i class="fas fa-tachometer-alt">
            <RiQuestionAnswerFill size={22} />
         </i>
         <span className="c2" style={{ display: "none" }}>Men</span>
         <ul>
            <li className="c2" style={{ display: "none" }}><span  className="c3" onClick={this.c()}></span>Men Ethanic</li>
            <li className="c2" style={{ display: "none" }}><span  className="c3" onClick={this.c()}></span>Men Western</li>
            <li className="c2" style={{ display: "none" }}><span  className="c3" onClick={this.c()}></span>Men Accesories</li>
         </ul>
      </NavLink >
   </li>
   <li>
      <NavLink to="/service" className="active">
         <i class="fas fa-database">
            <MdOutlineMiscellaneousServices size={22} />
         </i>
         <span className="c2" style={{ display: "none" }}>Service</span>
      </NavLink >
   </li> */}



            </div>

            </div>




            </>

        );
    }
}

export default Sidebar;