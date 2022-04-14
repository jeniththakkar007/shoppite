import React from "react";
import { NavLink } from "react-router-dom";
import './sidebar.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import {BsArrowRightCircle} from 'react-icons/bs';
import {FcHome,FcServices,FcAbout,FcContacts} from 'react-icons/fc';
import {MdOutlineMonitor} from 'react-icons/md';
import {GrCatalogOption} from 'react-icons/gr';
import {MdPointOfSale} from 'react-icons/md';
import {HiOutlineUser} from 'react-icons/hi';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CampaignIcon from '@mui/icons-material/Campaign';
import {FiBook} from 'react-icons/fi';

var a=0;

class Sidebar extends React.Component{
    
constructor(){
    super();
    this.state={
        mobileview :false,
        Sidebar : true 
    }
    this.updateview=this.updateview.bind(this);
    this.toggle=this.toggle.bind(this);
}


updateview(){
    if (!this.state.mobileview && document.documentElement.clientWidth < 1024)
     {

        if(this.state.Sidebar)
        {
                this.setState({
                    mobileview :true,
                    Sidebar :false
                })
                this.toggle(0);
        }
    }
    else if (document.documentElement.clientWidth > 1024 ) {
            this.setState({
                mobileview : false ,
                Sidebar : true
            }) 
            

        }
     
}
toggleStateChange() {
    this.setState({
        Sidebar: !this.state.Sidebar
    })
    this.toggle(1);
}
toggle (stat){
    a++;
    if(!this.state.Sidebar)
    {
        document.getElementById('sidebar').style.width="20%";    
        var i=document.getElementsByClassName('text');
         for (let index = 0; index < i.length; index++)
          {
            const element = i[index];
                element.style.display="none"; 
        }

    }
    else
    {
        document.getElementById('sidebar').style.width="100%";
        var i=document.getElementsByClassName('text');
          for (let index = 0; index < i.length; index++)
           {
            const element = i[index];
                element.style.display="inline";
        }

    }
    if(stat==0)
    {
        this.setState({
            Sidebar: !this.state.Sidebar
        })
    }   
}
componentWillMount(){
    this.updateview();
}
componentDidMount(){
    window.addEventListener('resize' ,this.updateview);
    // this.toggle(1);
    this.zzz();
}
componentWillUnmount(){
    window.removeEventListener('resize' ,this.updateview);
}

zzz()
{
    var toggler = document.getElementsByClassName("c1");
    var i;
    
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("mouseover", function() {
        this.parentElement.querySelector(".n1").classList.toggle("active");
        this.classList.toggle("c1-down");
      });
    }

}

  render(){

      return(
    
        <div id="sidebar" >
            <div className="icon">
            <BsArrowRightCircle  onClick={()=>this.toggleStateChange()}/>
            </div>
            <div className="icon">
             <MdOutlineMonitor size={35}/>
             <span className="text" style={{display :"none"}}>
             <ul id="u1">
             <li><span className="c1" > <NavLink to="./dpage" className="t11">Dashbord</NavLink></span>
            </li>
             </ul>
              </span> 
              </div>

              <div className="icon">
             <FiBook size={35}/><span className="text" style={{display :"none"}}>
             <ul id="u1">
             <li><span className="c1" onClick={this.zzz()}>Catlog</span>
                <ul className="n1">
                    <li><NavLink to="./subproduct" className="t11"> Sub Products</NavLink></li>
                    <li><NavLink to="./product" className="t11">Products</NavLink></li>
                    <li><NavLink to="./home" className="t11">Categories</NavLink></li>
                    <li><NavLink to="./manufacturer" className="t11">Manufacturers</NavLink></li>
                    <li><NavLink to="./proReview" className="t11">Product Reviews</NavLink></li>
                    <li><NavLink to="./proTag" className="t11">Product Tages</NavLink></li>
                </ul>
            </li>
             </ul>
              </span> 
              </div>

              <div className="icon">
             <MdPointOfSale size={35}/><span className="text" style={{display :"none"}}>
             <ul id="u1">
             <li><span className="c1" onClick={this.zzz()}>Sales</span>
                <ul className="n1">
                    <li><NavLink to="./order" className="t11">Orders</NavLink></li>
                    <li><NavLink to="./shipment" className="t11">Shipments</NavLink></li>
                    <li><NavLink to="./returnRequest" className="t11">Return Requests</NavLink></li>
                    <li><NavLink to="./paymenet" className="t11">Recurring Paymenets</NavLink></li>
                    <li><NavLink to="./giftCard" className="t11">Gift Cards</NavLink></li>
                    <li><NavLink to="./sCartsAndWishlist" className="t11">Shopping Carts and Wishlist</NavLink></li>
                </ul>
            </li>
             </ul>
              </span> 
              </div>

              <div className="icon">
             <HiOutlineUser size={35}/><span className="text" style={{display :"none"}}>
             <ul id="u1">
             <li><span className="c1" onClick={this.zzz()}>Customers</span>
                <ul className="n1">
                    <li><NavLink to="./customer" className="t11">Customers</NavLink></li>
                    <li><NavLink to="./cRole" className="t11">Customers Roles</NavLink></li>
                    <li><NavLink to="./cOnline" className="t11">Online Customers</NavLink></li>
                    <li><NavLink to="./vendor" className="t11">Vendors</NavLink></li>
                    <li><NavLink to="./activityLog" className="t11">Activity Log</NavLink></li>
                    <li><NavLink to="./activityType" className="t11">Activity Types</NavLink></li>
                </ul>
            </li>
             </ul>
              </span> 
              </div>

              <div className="icon">
             <CampaignIcon/><span className="text" style={{display :"none"}}>
             <ul id="u1">
             <li><span className="c1" onClick={this.zzz()}>Promotions</span>
                <ul className="n1">
                    <li><NavLink to="./discount" className="t11">Discount</NavLink></li>
                    <li><NavLink to="./affili" className="t11">Affiliates</NavLink></li>
                    <li><NavLink to="./newSletter" className="t11">Newsletter Subscribers</NavLink></li>
                </ul>
            </li>
             </ul>
              </span> 
              </div>    
        </div>
        
    );
    }
}

export default Sidebar;