
import './App.css';
import {Routes , Route } from 'react-router-dom';
import Navbar from './Navbar';

import Category from './Mobile/Category';
import { Banner_Body } from './Banner_Body';
import Clothings from './product/Clothings';
import Filters from './product/Filters';
import Cart from './Cart';
import { Women } from './product/Women';
import { Discript } from './product/Discript';




<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

function App() {
  
  
    // <MediaQuery width={1300}>
    // <Body_part/>
    // <Navbar/>
    //   <MediaQuery  width={450}>
    //    <Mob_nav/>
    //    <Mob_body/>

    //   </MediaQuery>
    // </MediaQuery>
  return (
    <>
<div className='Container-fuied'>
    

<Navbar/>

{/* <Women/> */}
{/* <Ecomnav/> */}

    

      <Routes>
     
      <Route path='/' element={<Banner_Body/>}/> 
      <Route path='/category' element={<Category/>}/> 
      <Route path='/category/clothing' element={<Clothings/>}/> 
      <Route path='/category/clothing/filter' element={<Filters/>}/> 
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/category/clothing/women' element={<Women/>}/>
      <Route path='/category/clothing/women/discript' element={<Discript/>}/>



    </Routes>
    {/* </div>
    </div> */}
    
     
 </div>
 
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    
    
    
    
    
    
    </>
  );
}

export default App;
