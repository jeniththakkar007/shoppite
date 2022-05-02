
import './App.css';
import {Routes , Route } from 'react-router-dom';
import Navbar from './Navbar';
import Body_part from './Body_part';
import Mob_nav from './Mobile/Mob_nav';
import Category from './Mobile/Category';
import Mob_body from './Mobile/Mob_body';
import MediaQuery from 'react-responsive';
import Check from './Check';




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
    {/* <div className=''> */}
        {/* <div className='col-12 ' id='bg1'> */}
       
        {/* <Mob_nav/> */}

   <Check/>
    
               {/* <Navbar/>
       
            <Body_part/>    */}
         {/* </div> 
    {</div> 

   
         <div className='row'>
        <div className='col-md-12' id='body_part'>
          <div>
            <Body_part/> 
          </div> */}

      <Routes>
      

      {/* <Route  path='/laptop/cart' element={<Cart/>}/>  
       <Route  path='/' element={<Body_part/>}/> DO NOT OPEN
       <Route  exact path='/laptop' element={<Laptop/>}/>
      <Route path='/laptop/hplatop' element={<HPLaptop/>}/> */}
      {/* <Route path='/category' element={<Category/>}/>  */}
{/* <Route path='/'element={ <Mob_body/>}/> */}
     

      

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
