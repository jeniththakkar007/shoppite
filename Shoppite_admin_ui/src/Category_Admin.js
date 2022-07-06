import { Icon } from "@iconify/react";
import React, { Component,useEffect, useState  } from "react";
import { Card, Form, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Category_Admin.css';
import * as Endpoint from './End_point';
 export const Category_Admin=()=>{
  const [category, setcategoryList]= useState([]);
  useEffect(() =>{
            
    fetchCategoryList();
    
  },[1,1]);
  const fetchCategoryList = async() => {
    await fetch(Endpoint.GETCATEGORY+"/"+1)
    .then(cl => cl.json())
    .then((categories) => setcategoryList(categories));  
}

const fetchElseCategoryList = async(pass)=>{
  console.log(pass)
  await fetch(Endpoint.DELETECATEGORY+"/"+pass+"/"+1)
  .then(dwl => dwl.json())
  .then((dwish) => setcategoryList(dwish));
}

    return(
        <>
  <div>
            <div className="container-fuild">
            <div className="row category_row" style={{"marginBottom":"1%"}}>
                <div className="col-6">
                 <span className="title"><b>Category</b> </span>
                  </div>
                  <div className="col-6 ">
                      <NavLink to="./addcategory"><button type="button" className="btn btn-outline-dark add-btn"><Icon icon="ic:baseline-add-circle" /> Add</button></NavLink>  
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
									<h6 class="mb-0">Category Name</h6>
								</div>
								<div class="col-sm-3 cat_search text-secondary">
									<input type="text" class="form-control" />
								</div>
                                <div class="col-sm-3 cat_search">
									<h6 class="mb-0">Category Code</h6>
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
                        <Card.Title style={{"marginBottom":"2%"}}> More about category</Card.Title>
                        <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Category Image</th>
        <th scope="col">Category Name</th>
        <th scope="col">Category Code</th>
        <th scope="col">Category Description</th>
        <th scope="col">Action</th>
        
      </tr>
    </thead>
    <tbody>
      {category.map((categories)=>(
        <tr>
        <th scope="row">{categories.id}</th>
        <td><Icon icon={categories.category_image} /></td>
        <td>{categories.category_name}</td>
        <td>{categories.category_code}</td>
        <td>{categories.category_description}</td>
        <td className="action_xell" style={{"display":"flex"}}><button type="button" class="btn btn-outline-danger" onClick={()=>fetchElseCategoryList(categories.id)}><Icon icon="fluent:delete-24-filled" /></button><button type="button" class="btn btn-outline-warning"><Icon icon="bxs:message-alt-edit" /></button></td>
      
      </tr>
      ))}
      {/* <tr>
        <th scope="row">1</th>
        <td><img src={window.location.origin + '/cat_1.png   '} /></td>
        <td>Electronic</td>
        <td>01</td>
        <td>Electric power where electric current is used to energise equipment</td>
        <td className="action_xell" style={{"display":"flex"}}><button type="button" class="btn btn-outline-danger"><Icon icon="fluent:delete-24-filled" /></button><button type="button" class="btn btn-outline-warning"><Icon icon="bxs:message-alt-edit" /></button></td>
      
      </tr>
      <tr>
        <th scope="row">2</th>
        <td><img src={window.location.origin + '/cat_2.png   '} /></td>
        <td>Clothing</td>
        <td>02</td>
        <td> cloth is something made of fibrous material</td>
        <td className="action_xell" style={{"display":"flex"}}><button type="button" class="btn btn-outline-danger"><Icon icon="fluent:delete-24-filled" /></button><button type="button" class="btn btn-outline-warning"><Icon icon="bxs:message-alt-edit" /></button></td>
      
      </tr>
      <tr>
        <th scope="row">3</th>
        <td><img src={window.location.origin + '/cat_3.png   '} /></td>
        <td>Accesories</td>
        <td>03</td>
        <td>Accessories that are worn may include jackets, boots and shoes, cravats, ties, hats, bonnets</td>
        <td className="action_xell" style={{"display":"flex"}}><button type="button" class="btn btn-outline-danger"><Icon icon="fluent:delete-24-filled" /></button><button type="button" class="btn btn-outline-warning"><Icon icon="bxs:message-alt-edit" /></button></td>
      
      </tr> */}
     
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
 