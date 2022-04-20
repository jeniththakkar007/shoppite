import { Icon } from "@iconify/react";
import React from "react";
import { Card, Form, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Customers extends React.Component
{
    render()
    {
        return(
            <>
           <div>
            <div className="container-fuild">
            <div className="row">
                <div className="col-6">
                 <span className="title"><b>Users</b> </span>
                  </div>
                  <div className="col-6 ">
                      <NavLink to="#"><button type="button" className="btn btn-primary add-btn"><Icon icon="carbon:add-filled" />  Add</button></NavLink>  
                  </div>
            </div>
           </div>
             <div className="search-box">
                <Card className="Category-search">
                    <Card.Body>
                        <Card.Title><Icon icon="fluent:search-square-24-filled" className="searchIcon" />  Search</Card.Title>
                        <div className="container-fuild">
                        <Form>
                            <div className="row">
                                
                                <div className="col-3 search-text">
                                    User Name 
                                </div>
                                <div className="col-3">
                                <Form.Control type="text" placeholder="User name" className="category-name" id="search-name-id" />
                                </div>
                                <div className="col-3 search-text">
                                     Email 
                                </div>
                                <div className="col-3">
                                <Form.Control type="text" placeholder="Email Address" className="category-name" id="search-code-id"  />
                                </div>
                                
                            </div>
                            <div className="row btn-row">
                                <div className="col-12">
                                <button type="button" onClick={()=>this.search_data()} className="btn btn-primary search-btn"><Icon icon="eva:search-fill"/> Search</button>
                                </div>

                            </div>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>
            </div> 
            <div className="table-box">
                <Card className="table-card">
                    <Card.Body>
                        <Card.Title>Learn more about category</Card.Title>
                        {/* <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" value="checkedall" onClick={this.handleAllChecked} /> </th>
                                    <th>Category ID</th>
                                    <th>Category Name</th>
                                    <th>Category Code</th>
                                    <th>Category Description</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.category.map((p) => (
                                    <tr>

                                        <td><input type="checkbox" /> </td>
                                        <td>{p.id}</td>
                                        <td>{p.category_name}</td>
                                        <td>{p.category_code}</td>
                                        <td>{p.category_description}</td>
                                        <td className="action-button"><NavLink to={p.id.toString()} className="edit-btn"><button type="button" className="btn btn-outline-primary "><Icon icon="akar-icons:edit" color="black" /></button></NavLink>
                                            <button type="button" onClick={()=>this.delete(p.id)}  className="btn btn-outline-danger"><Icon icon="fluent:delete-28-filled" color="black" /></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table> */}
                    </Card.Body>
                </Card>
            </div>

    </div>
            </>
        );
    }

}

export default Customers;