import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import {Link} from "react-router-dom";
import Nevbar from "./Nevbar";
import Home from "./Home";
import Dashbord from "./dashbord/Dashbord";
import   './App.css';
import ViewOrderData from "./dashbord/ViewOrderData";
import Product from "./Product/Product"
import AddProduct from "./Product/AddProduct";
import {EditProduct} from "./Product/EditProduct";
import Category from "./categories/Category";
import EditCategories from "./categories/EditCategories";
import AddCategories from "./categories/AddCategories";
import Sub_product from "./SubProduct/Sub_product";
import AddSubproduct from "./SubProduct/Add.subproduct";
import { EditSubproduct } from "./SubProduct/Edit.subproduct";
import Customers from "./customer/Customers";
import AddCustomer from "./customer/AddCustomer";
import {Sidebar_Admin} from "./Sidebar_Admin";
import Navbar_Admin from "./Navbar_Admin";
import { Profile_Admin } from "./Profile_Admin";
import { Category_Admin } from "./Category_Admin";
import { Add_Category } from "./Add_Category";
import { Subcategory_Admin } from "./Subcategory_Admin";
import { Add_Subcategory } from "./Add_Subcategory";
import { Product_Admin } from "./Product_Admin";
import { Add_Products } from "./Add_Products";
import { Order_Admin } from "./Order_Admin";
import { View } from "./View";
import { Banner_Set_Admin } from "./Banner_Set_Admin";
import { Bestseller } from "./Bestseller_Admin";
import { Img_picker } from "./Demo0";
import { Discount } from "./Discount_Admin";
import { Dashbord_Admin } from "./Dashboard_Admin";
import { Regestration } from "./Regestration";
import Newfile from "./newfile";
import { Home_design } from "./Home_design";


function App()
{


    return(
        <>
            <div className="container-fuied">
                <div className="col-12 background_nav">
                <Navbar_Admin/>
{/* <Side/> */}
                </div>
                <div className="col-12 profile">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 app-main-div">
{/* <Sidebar/> */}
{/* <Sidebar_Admin/> */}
              {/* <Side/> */}
                    </div>
                    <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9  " id="body">
                        <Routes>
                        <Route exact path="/file" element={<Newfile/>}></Route>

                        <Route exact path="/" element={<Dashbord_Admin/>}></Route>
                        <Route exact path="/reg" element={<Regestration/>}></Route>
                        <Route exact path="/dashboard" element={<Dashbord/>}></Route>
                            <Route exact path="/profile" element={<Profile_Admin/>}></Route>
                            <Route exact path="/category/addcategory" element={<Add_Category/>}></Route>
                            <Route exact path="/category" element={<Category_Admin/>}></Route>
                            <Route exact path="/subcategory" element={<Subcategory_Admin/>}></Route>
                            <Route exact path="/products" element={<Product_Admin/>}></Route>
                            <Route exact path="/orders" element={<Order_Admin/>}></Route>
                            <Route exact path="/orders/view" element={<View/>}></Route>
                            <Route exact path="/products/addproduct" element={<Add_Products/>}></Route>
                            <Route exact path="/subcategory/addsubcategory" element={<Add_Subcategory/>}></Route>
                            <Route exact path="/banner" element={<Banner_Set_Admin/>}></Route>
                            <Route exact path="/bestseller" element={<Bestseller/>}></Route>
                            <Route exact path="/discount" element={<Discount/>}></Route>
                            <Route exact path="/homedesign" element={<Home_design/>}></Route>
                            <Route exact path="/discount/demo" element={<Img_picker/>}></Route>
                            <Route exact path="/bestseller/demo" element={<Img_picker/>}></Route>

                 

                        </Routes>

                    </div>


                </div>
            </div>

         
           
           
            


           
            


      
       </>
    ); 
    
}

export default App;