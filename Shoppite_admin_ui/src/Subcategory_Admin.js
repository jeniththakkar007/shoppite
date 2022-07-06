import { Icon } from "@iconify/react";
import React, { Component,useEffect, useState  } from "react";
import { Card, Form, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Category_Admin.css';
import * as Endpoint from './End_point';
 export const Subcategory_Admin=()=>{
  const [subcategory, setsubcategoryList]= useState([]);
  useEffect(() =>{
            
    fetchSubCategoryList();
    
  },[1,1]);
  const fetchSubCategoryList = async() => {
    await fetch(Endpoint.GETSUBCATEGORY+"/"+1)
    .then(scl => scl.json())
    .then((scategories) => setsubcategoryList(scategories));  
}
const fetchElseSubCategoryList = async(pass)=>{
  console.log(pass)
  await fetch(Endpoint.DELETESUBCATEGORY+"/"+pass+"/"+1)
  .then(dwl => dwl.json())
  .then((dwish) => setsubcategoryList(dwish));
}
    return(
        <>
  <div>
            <div className="container-fuild">
            <div className="row category_row" style={{"marginBottom":"1%"}}>
                <div className="col-6">
                 <span className="title"><b> SubCategory</b> </span>
                  </div>
                  <div className="col-6 ">
                      <NavLink to="./addsubcategory"><button type="button" className="btn btn-outline-dark add-btn"><Icon icon="ic:baseline-add-circle" /> Add</button></NavLink>  
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
									<h6 class="mb-0"> SubCategory Name</h6>
								</div>
								<div class="col-sm-3 cat_search text-secondary">
									<input type="text" class="form-control" />
								</div>
                                <div class="col-sm-3 cat_search">
									<h6 class="mb-0"> SubCategory Code</h6>
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
                        <Card.Title style={{"marginBottom":"2%"}}> More about SubCategory</Card.Title>
                        <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">SubCategory Image</th>
        <th scope="col">SubCategory Name</th>
        <th scope="col">SubCategory Code</th>
        <th scope="col">SubCategory Description</th>
        <th scope="col">Action</th>
        
      </tr>
    </thead>
    <tbody>
      {subcategory.map((scategories)=>(
        <tr>
        <th scope="row">{scategories.id}</th>
        <td><img src={window.location.origin +scategories.sub_ctg_image} /></td>
        <td>{scategories.sub_ctg_name}</td>
        <td>{scategories.sub_ctg_code}</td>
        <td>{scategories.sub_ctg_description}</td>
        <td className="action_xell" style={{"display":"flex"}}><button type="button" class="btn btn-outline-danger" onClick={()=>fetchElseSubCategoryList(scategories.id)}><Icon icon="fluent:delete-24-filled" /></button><button type="button" class="btn btn-outline-warning"><Icon icon="bxs:message-alt-edit" /></button></td>
      
      </tr>
      ))}
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
