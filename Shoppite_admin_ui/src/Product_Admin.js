import { Icon } from "@iconify/react";
import React from "react";
import { Card, Form, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Category_Admin.css';

 export const Product_Admin=()=>{
    return(
        <>
  <div>
            <div className="container-fuild">
            <div className="row category_row" style={{"marginBottom":"1%"}}>
                <div className="col-6">
                 <span className="title"><b> Products</b> </span>
                  </div>
                  <div className="col-6 ">
                      <NavLink to="./addproduct"><button type="button" className="btn btn-outline-dark add-btn"><Icon icon="ic:baseline-add-circle" /> Add</button></NavLink>  
                  </div>
            </div>
           </div>
           <div class="card card_profile">
						<div class="card-body best_row_css">
							<div className="Category_type">
							<Icon icon="fluent:search-square-24-filled" />	Search
							</div>
							<div class="row mb-3">
								<div class="col-sm-3 cat_search">
									<h6 class="mb-0"> SubCategory Name </h6>  
								</div>
								<div class="col-sm-3 cat_search text-secondary">
									<input type="text" class="form-control" />
								</div>
                                <div class="col-sm-3 cat_search">
									<h6 class="mb-0"> Product Name</h6>
								</div>
                               
								<div class="col-sm-3 cat_search text-secondary">
									<input type="text" class="form-control" />
								</div>
                                <div class="col-sm-3 cat_search">
									<h6 class="mb-0"> Product Code</h6>
								</div>
                                <div class="col-sm-3 cat_search text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
                           
							<div class="col-sm-9   text-secondary">
									<input type="button" class="btn btn-primary last_btn" value="Search"/>
								</div>
						</div>
					</div>
            <div className="table-box">
                <Card className="table-card">
                    <Card.Body>
                        <Card.Title style={{"marginBottom":"2%"}}> More about Products</Card.Title>
                        <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Product Image</th>
        <th scope="col">Product Name</th>
        <th scope="col">Product Code</th>
        <th scope="col">Product Description</th>
        <th scope="col">Product Price</th>
        <th scope="col">Product Stock</th>
        <th scope="col">Product Quantity</th>
        <th scope="col">Available</th>
        <th scope="col">Action</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td><img src={window.location.origin + '/cat_1.png   '} /></td>
        <td>Laptop</td>
        <td>01</td>
        <td>Laptop power where electric current is used to energise equipment</td>
        <td>75,800</td>
        <td>In Stock</td>
        <td>200</td>
        <td><img src={window.location.origin + '/true.png   '} /></td>
        <td className="action_xell" style={{"display":"flex"}}><button type="button" class="btn btn-outline-danger"><Icon icon="fluent:delete-24-filled" /></button><button type="button" class="btn btn-outline-warning"><Icon icon="bxs:message-alt-edit" /></button></td>
      
      </tr>
      <tr>
        <th scope="row">2</th>
        <td><img src={window.location.origin + '/cat_2.png   '} /></td>
        <td>Women Top</td>
        <td>02</td>
        <td> Women Top White color, Good material</td>
        <td>75,800</td>
        <td>In Stock</td>
        <td>200</td>
        <td><img src={window.location.origin + '/true.png   '} /></td>
        <td className="action_xell" style={{"display":"flex"}}><button type="button" class="btn btn-outline-danger"><Icon icon="fluent:delete-24-filled" /></button><button type="button" class="btn btn-outline-warning"><Icon icon="bxs:message-alt-edit" /></button></td>
      
      </tr>
      <tr>
        <th scope="row">3</th>
        <td><img src={window.location.origin + '/cat_3.png   '} /></td>
        <td>Necklace</td>
        <td>03</td>
        <td>Necklace For Girls</td>
        <td>75,800</td>
        <td>In Stock</td>
        <td>200</td>
        <td><img src={window.location.origin + '/true.png   '} /></td>
        <td className="action_xell" style={{"display":"flex"}}><button type="button" class="btn btn-outline-danger"><Icon icon="fluent:delete-24-filled" /></button><button type="button" class="btn btn-outline-warning"><Icon icon="bxs:message-alt-edit" /></button></td>
      
      </tr>
     
    </tbody>
  </table>
</div>
                    </Card.Body>
                </Card>
            </div> 

    </div>
        </>
    )
}