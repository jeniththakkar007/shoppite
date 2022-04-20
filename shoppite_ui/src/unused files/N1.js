import {GiHouse} from 'react-icons/gi';
import {RiDashboardFill , RiQuestionAnswerFill , RiContactsBook2Fill} from 'react-icons/ri';
import {MdOutlineMiscellaneousServices ,MdProductionQuantityLimits} from 'react-icons/md'
import {CgToggleOff , CgHomeAlt} from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

const N1=()=>{
return( <>
<div class="sidebar" id="s1">
{/* <!--profile image & text-->
    <!--menu item--> */}


<img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture"/>




<div className="nav-class">

<NavLink to="/home" class="active">
<li class="icon"><i class="fas fa-home"><GiHouse/></i></li> 

</NavLink > 

<NavLink to="/dashboard" class="active">
<li class="icon"><i class="fas fa-desktop"><RiDashboardFill/> Dashboard</i></li>
{/* <li class="item">Dashboard</li> */}
</NavLink >



<NavLink to="/solutions" class="active">
<li class="icon"><i class="fas fa-tachometer-alt"><RiQuestionAnswerFill/> Solutions</i></li> 
{/* <li class="item">Solutions</li> */}
</NavLink >

<NavLink to="/service" class="active">
<li class="icon"><i class="fas fa-database"><MdOutlineMiscellaneousServices/> Service</i></li> 
{/* <li class="item">Service</li> */}
</NavLink >

<NavLink to="/product" class="active">
<li class="icon"><i class="fas fa-cog"><MdProductionQuantityLimits/> Product</i></li> 
{/* <li class="item">Product</li> */}
</NavLink >

<NavLink to="/contact" class="active">
<li class="icon"><i class="fas fa-user-friends"><RiContactsBook2Fill/>Contact</i></li> 
{/* <li class="item">Contact Us</li> */}
</NavLink >
</div>

</div>
  



</>
);
}


export default N1;