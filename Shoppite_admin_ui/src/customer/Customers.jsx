import { Icon } from "@iconify/react";
import React from "react";
import { Card, Form, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./customers.css";
import {getAllCategory ,removeCategory, searchData } from '../services/Category.service';
import { deleteuser, getAlluser } from "../services/customers.service";

class Customers extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            user:[]
        };
    }

 

    delete(id){
        deleteuser(id).then(this.render());
        getAlluser().then(res =>this.setState({user:res.data}));        
       }
    search_data()
    {   
        var sdata = new Object();
        sdata.category_name =  document.getElementById('search-name-id').value;
        sdata.category_code =  document.getElementById('search-code-id').value; 
        searchData(sdata).then(res =>this.setState({user:res.data.recordsets[0]}));

    }
    
    componentWillMount(){
        getAlluser().then(res =>this.setState({user:res.data}));
      }
      

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
                      <NavLink to="./addcustomer"><button type="button" className="btn btn-primary add-btn"><Icon icon="carbon:add-filled" />  Add</button></NavLink>  
                  </div>
            </div>
           </div>
             <div className="search-box">
                <Card className="Customer-search">
                    <Card.Body>
                        <Card.Title><Icon icon="fluent:search-square-24-filled" className="searchIcon" />  Search</Card.Title>
                        <div className="container-fuild">
                        <Form>
                            <div className="row">
                                
                                <div className="col-3 search-text">
                                    User Name 
                                </div>
                                <div className="col-3">
                                <Form.Control type="text" placeholder="User name" className="customer-name" id="search-name-id" />
                                </div>
                                <div className="col-3 search-text">
                                     Email ID
                                </div>
                                <div className="col-3">
                                <Form.Control type="text" placeholder="Email Address" className="customer-name" id="search-email-id"  />
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
                        <Card.Title>Learn more about Users</Card.Title>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>User Name</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.user.map((p) => (
                                    <tr>

                                        <td>{p.id}</td>
                                        <td>{p.user_name}</td>
                                        <td>{p.f_name}</td>
                                        <td>{p.l_name}</td>
                                        <td>{p.email}</td>
                                        <td>{p.role}</td>
                                        <td className="action-button"><NavLink to={{
                                            pathname:p.id.toString(),
                                            aboutProps:{
                                                id:p.id.toString()
                                                }
                                            }}  className="edit-btn"><button type="button" className="btn btn-outline-primary "><Icon icon="akar-icons:edit" color="black" /></button></NavLink>
                                            <button type="button" onClick={()=>this.delete(p.id)}  className="btn btn-outline-danger"><Icon icon="fluent:delete-28-filled" color="black" /></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>


    </div>
            </>
        );
    }

}

export default Customers;