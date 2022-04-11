import logo from './logo.svg';
import './App.css';
import {Routes , Route ,Redirect} from 'react-router-dom';
import Solutions from './Solutions';
import Product from './product';
import Home from './Home'
import Contact from './Contact';
import Header from './Header';
import Service from './Service';
import Sidebar from './Sidebar';
import L1 from './L1';
import L3 from './L3';
import L2 from './L2';
import Dashboard from './Dashboard';
import Laptop  from './Elecronic/Laptop';
import Cart from './Cart';
import { render } from "react-dom";
import Description1 from './Elecronic/Description1';

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

function App() {
  return (
    <>
    <div className='Container-fuied'>
      <div className='row'>
      <div className='col-md-2 ,col-2 col-sm-2 , col-xl-2 , col-lg-2  side'>
      <Sidebar/>
      </div>
      <div className='col-md-10, col-sm-10 ,col-10, col-xl-10 , col-lg-10'>
        <div className='row'>
         <div className='col-12 ' id='bg1'>
        <Header/>
        </div>
        </div>
        <div className='row'>
        <div className='col-md-12'>

      <Routes>
      
       {/* <Route  exact path='/'      
render={() => {
  return (
      <Redirect to="/laptop" /> 
  )
}} >
       
       </Route> */}
      <Route  exact path='/' element={<Laptop/>} />
      <Route  path='/laptop/cart' element={<Cart/>}/> 
      <Route  exact path='/laptop' element={<Laptop/>}/>
      <Route path='/laptop/description1' element={<Description1/>}/>
      

    </Routes>
    </div>
    </div>
      </div>
      </div>

    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    
    
    
    
    
    
    </>
  );
}

export default App;
