import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import {NavLink} from 'react-router-dom';
import './nevbar.css';
function Nevbar()
{
    return(
        <>
        
          <div className='nav1'>
          <label className="navbar-brand"><img className='logo' src="/logo3.png" alt="Company Logo" /></label>
          <span className='nav-1-1'>
          <label className="navbar-brand">UserName</label>
          <NavLink className="logout" to="./logout">Logout</NavLink>
          </span>
        
          </div>
        
        {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    
    <label class="navbar-brand">Company Name</label>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <label class="navbar-brand">UserName</label>
    <div class="" id="">
    
      <ul class="">
        <li class="">
            <NavLink className="logout" to='./logout'>Logout</NavLink>
          
        </li> 
      </ul>
      
    </div>

  </div>
</nav> */}
        </>
    );
}

export default Nevbar;