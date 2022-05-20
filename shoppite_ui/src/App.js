
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
import Electric from './product/Electric';
import { Laptops } from './product/Laptops';
import { Ac } from './product/Ac';
import { Headphone } from './product/Headphone';
import { Discript_lap } from './product/Discription_lap';
import { Accesories } from './product/Accesories';
import { Acc_1 } from './product/Acc_1';
import { Acc_2 } from './product/Acc_2';
import { Discript_acc } from './product/Discript_acc';
import { Wishlist } from './Wishlist';
import DarkModerToggle from './DarkModeToggle';
import { Location } from './Mobile/Location';
import { Deal } from './Mobile/Deal';
import { Boys } from './product/Boys';
import { Discript_boy } from './product/Discript_boy';
import { Shoes } from './product/Shoes';
import { Best_seller } from './Offcanvas_page/Best_seller';
import { Newrelease } from './Offcanvas_page/Newrelease';







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
{/* <DarkModerToggle/> */}

{/* <Women/> */}
{/* <Ecomnav/> */}

   

      <Routes>
     
      <Route path='/' element={<Banner_Body/>}/> 
      <Route path='/bestseller' element={<Best_seller />}/> 
      <Route path='/newrelease' element={<Newrelease />}/> 
      <Route path='/wishlist' element={<Wishlist/>}/> 
      <Route path='/category/clothing' element={<Clothings/>}/> 
      <Route path='/category/electric' element={<Electric/>}/> 
      <Route path='/category/acces' element={<Accesories/>}/>
      <Route path='/category/acces/acc_1' element={<Acc_1/>}/> 
      <Route path='/category/acces/acc_2' element={<Acc_2/>}/> 
      <Route path='/category/acces/acc_2/discript_acc' element={<Discript_acc/>}/> 
      <Route path='/category/acces/acc_2/discript_acc' element={<Discript_acc/>}/> 
      <Route path='/category/electric/laptops' element={<Laptops/>}/> 
      <Route path='/category/electric/ac' element={<Ac/>}/> 
      <Route path='/category/electric/headphone' element={<Headphone/>}/> 
      <Route path='/category/electric/laptops/discript_lap' element={<Discript_lap/>}/>
      <Route path='/category/electric/ac/discript_lap' element={<Discript_lap/>}/>
      <Route path='/category/electric/headphone/discript_lap' element={<Discript_lap/>}/>
      <Route path='/category/clothing/filter' element={<Filters/>}/> 
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/deals' element={<Deal/>}/>
      <Route path='/deals/boys' element={<Boys/>}/>
      <Route path='/deals/shoes' element={<Shoes/>}/>
      <Route path='/shoes' element={<Shoes/>}/>
      <Route path='/bestseller/discript_boy' element={<Discript_boy/>}/>
      <Route path='/newrelease/discript_lap' element={<Discript_lap/>}/>
      <Route path='/newrelease/discript_boy' element={<Discript_boy/>}/>
      <Route path='/newrelease/discript_acc' element={<Discript_acc/>}/>
      <Route path='/bestseller/discript' element={<Discript/>}/>
      <Route path='/bestseller/discript_acc' element={<Discript_acc/>}/>
      <Route path='/deals/boys/discript_boy' element={<Discript_boy/>}/>
      <Route path='/deals/shoes/discript_boy' element={<Discript_boy/>}/>
      <Route path='/location' element={<Location/>}/>
      <Route path='/wishlist/cart' element={<Cart/>}/>
      <Route path='/deals/boys/discript_boy/cart' element={<Cart/>}/>
      <Route path='/deals/shoes/discript_boy/cart' element={<Cart/>}/>
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
