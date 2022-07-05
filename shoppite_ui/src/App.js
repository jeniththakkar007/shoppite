
// import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Category from './Mobile/Category';
import { Banner_Body } from './Banner_Body';
import Clothings from './product/Clothings';
import Filters from './product/Filters';
import Cart from './Cart';
import { Products } from './product/Product';
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
// import DarkModerToggle from './DarkModeToggle';
// import { Location } from './Mobile/Location';
import { Deal } from './Mobile/Deal';
import { Boys } from './product/Boys';
import { Discript_boy } from './product/Discript_boy';
import { Shoes } from './product/Shoes';
import { Best_seller } from './Offcanvas_page/Best_seller';
import { Newrelease } from './Offcanvas_page/Newrelease';
import { Top_offer } from './Offcanvas_page/Top_offer';
import { Discription_women } from './product/Discription_women';
import { Discription_men } from './product/Discriprion_men';
import { Discript_footwear } from './product/Discript_footwear';
import { Discount } from './Offcanvas_page/Discount';
import { Offer_month } from './Offcanvas_page/Offer_month';
import React from 'react';
import { Gifted } from './product/Gifted';
import { Limited_offer } from './Offcanvas_page/Limited_offer';
import { Login } from './Login';
// import UserForm, { Sign_up } from './Sign_up';
import { Contact_us } from './Contact_us';
import { My_profile } from './My_profile';
import 'react-chatbot-kit/build/main.css'
import SimpleForm from './chat/SimpleForm';
import { Reward } from './Reward';
// import ValidationForm from './Form';
import { Sign_up } from './Sign_up';
import WithoutNav from './WithoutNav';
import Withnav from './WithNav';
// import  {Form}  from './Form';



<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

const App =()=>{
  function RequireAuth({ children, redirectTo }) {
    // let isAuthenticated = getAuth();
    return loggedIn() ? children : <Navigate  to={redirectTo}/>;
  }
  function loggedIn(){
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }
  window.onbeforeunload = function() {
   // localStorage.clear();
 }
  // function requireAuth(nextState, replace) {
  //   if (!loggedIn()) {
  //     replace({
  //       pathname: '/login'
  //     })
  //   }
  // }
  
    return (
      <>
            <div className='Container-fuied'>
            
          {/* <Navbar /> */}
          <Routes>
            <Route element={<WithoutNav />}>
              <Route path="/login" element={<Login />} />
              <Route path='/signup' element={<Sign_up/>} />
             </Route>
            <Route element={<Withnav />}>
            <Route path='/' element={<Banner_Body />}>   </Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/products/discript' element={<Discription_women/>}></Route>
            <Route path='/bestseller' element={<Best_seller />} />
            <Route path='/newrelease' element={<Newrelease />} />
            {/* <Route path='/wishlist' element={<Wishlist />}>  </Route> */}
            <Route path='/top_offer' element={<Top_offer />} />
            <Route path='/month_offer' element={<Offer_month />} />
            <Route path='/discount' element={<Discount />} />
            <Route path='/gift' element={<Gifted />} />
            <Route path='/signup' element={<Sign_up/>} />
            <Route path='/myprofile' element={<My_profile />} />
            <Route path='/limited_offer' element={<Limited_offer />} />
            <Route path='/gift/discript_women' element={<Discription_women />} />
            <Route path='/top_offer/discript_women' element={<Discription_women />} />
            <Route path='/top_offer/discript_men' element={<Discription_men />} />
            <Route path='/top_offer/discript_lap' element={<Discript_lap />} />
            <Route path='/top_offer/discript_footwear' element={<Discript_footwear />} />
            <Route path='/top_offer/discript_footwear/cart' element={<Cart />} />
            <Route path='/top_offer/discript_women/cart' element={<Cart />} />
            <Route path='/top_offer/discript_men/cart' element={<Cart />} />
            <Route path='/category/clothing' element={<Clothings />} />
            <Route path='/category/electric' element={<Electric />} />
            <Route path='/category/acces' element={<Accesories />} />
            <Route path='/category/acces/acc_1' element={<Acc_1 />} />
            <Route path='/category/acces/acc_2' element={<Acc_2 />} />
            <Route path='/category/acces/acc_2/discript_acc' element={<Discript_acc />} />
            <Route path='/category/acces/acc_2/discript_acc' element={<Discript_acc />} />
            <Route path='/category/electric/laptops' element={<Laptops />} />
            <Route path='/category/electric/ac' element={<Ac />} />
            <Route path='/category/electric/headphone' element={<Headphone />} />
            <Route path='/category/electric/laptops/discript_lap' element={<Discript_lap />} />
            <Route path='/category/electric/ac/discript_lap' element={<Discript_lap />} />
            <Route path='/category/electric/headphone/discript_lap' element={<Discript_lap />} />
            <Route path='/category/clothing/filter' element={<Filters />} />
            {/* <Route path='/cart' element={<Cart />} /> */}
            <Route path='/cart' element={<RequireAuth redirectTo="/login">
                  <Cart />
            </RequireAuth>} />
            <Route path='/wishlist' element={<RequireAuth redirectTo="/login">
                  <Wishlist />
            </RequireAuth>} />
            <Route path='/deals' element={<Deal />} />
            <Route path='/login' element={<Login />} />
            <Route path='/deals/boys' element={<Boys />} />
            <Route path='/deals/shoes' element={<Shoes />} />
            <Route path='/shoes' element={<Shoes />} />
            <Route path='/contact' element={<Contact_us />} />
            <Route path='/bestseller/discript_boy' element={<Discript_boy />} />
            <Route path='/newrelease/discript_lap' element={<Discript_lap />} />
            <Route path='/newrelease/discript_boy' element={<Discript_boy />} />
            <Route path='/newrelease/discript_acc' element={<Discript_acc />} />
            <Route path='/bestseller/discript' element={<Discript />} />
            <Route path='/bestseller/discript_acc' element={<Discript_acc />} />
            <Route path='/deals/boys/discript_boy' element={<Discript_boy />} />
            <Route path='/deals/shoes/discript_boy' element={<Discript_boy />} />
            <Route path='/wishlist/cart' element={<Cart />} />
            <Route path='/reward' element={<Reward />} />
            <Route path='/deals/boys/discript_boy/cart' element={<Cart />} />
            <Route path='/deals/shoes/discript_boy/cart' element={<Cart />} />
            <Route path='/category/clothing/women' element={<Products />} />
            <Route path='/category/clothing/women/discript' element={<Discript />} />
            <Route path='/discount/discript_women' element={<Discription_women />} />
            <Route path='/discount/discript_men' element={<Discription_men />} />
            <Route path='/discount/discript_lap' element={<Discript_lap />} />
            <Route path='/discount/discript_footwear' element={<Discript_footwear />} />
            <Route path='/discount/discript_footwear/cart' element={<Cart />} />
            <Route path='/discount/discript_women/cart' element={<Cart />} />
            <Route path='/discount/discript_men/cart' element={<Cart />} />
            <Route path='/month_offer/discript_lap' element={<Discript_lap />} />
            <Route path='/month_offer/discript_acc' element={<Discript_acc />} />
            <Route path='/month_offer/discript_lap/cart' element={<Cart />} />
            <Route path='/month_offer/discript_acc/cart' element={<Cart />} />
            <Route path='/category/bestseller' element={<Best_seller />} />
            <Route path='/category/newrelease' element={<Newrelease />} />
            <Route path='/category/wishlist' element={<Wishlist />}>  </Route>
            <Route path='/category/top_offer' element={<Top_offer />} />
            <Route path='/category/month_offer' element={<Offer_month />} />
            <Route path='/category/discount' element={<Discount />} />
            <Route path='/category/gift' element={<Gifted />} />
            <Route path='/category/deals' element={<Deal />} />
            <Route path='/category/deals/boys' element={<Boys />} />
            <Route path='/category/deals/shoes' element={<Shoes />} />
            <Route path='/category/shoes' element={<Shoes />} />
            </Route>
            



          </Routes>
          <div>
    <SimpleForm/>

    </div>


        </div>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>







      </>
    );
    
  }

export default App