import React from "react";
import { ReactDOM } from "react";
import { Card, Form } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import { getAllcity, getAllcountry, getAllrole, getAllstate } from "../services/customers.service";
// import "./add.css";
// import { createCategory } from "../services/Category.service";

class AddCustomer extends React.Component
{
    constructor()
    {
        super()
        this.state={
            states:[],
            countries:[],
            cities:[],
            roles:[]
        };
    }

    componentWillMount(){
        getAllstate().then(res =>this.setState({states:res.data}));
        getAllcountry().then(res =>this.setState({countries:res.data}));
        getAllcity().then(res =>this.setState({cities:res.data}));
        getAllrole().then(res =>this.setState({roles:res.data}));
      }
    
    // const navigate = useNavigate();
    // function Save_add(){ 
    //     var data = new Object();
    //     data.category_name =  document.getElementById('name-id').value;
    //     data.category_code =  document.getElementById('code-id').value; 
    //     data.category_description =  document.getElementById('description-id').value;
    //     createCategory(data).then(
    //       navigate('/category')
    //     )
    // }

    render (){
        return(
        <>
        <div>
        <div className="row head">
                <div className="col-6">
                 <span className="title"><b>Add a new User</b> </span>
                  </div>
                  
            </div>
                <Card style={{ width: '98%' }}>
                    <Card.Body>
                        <Card.Title><Icon icon="mdi:information-variant" color="black"/> User info </Card.Title>
                        <div className="container-fuild">
                        <Form>
                            {/* username */}
                            <div className="row add-row">
                                <div className="col-3 add-text">
                                    User Name <Icon icon="line-md:question-circle-twotone" color="black" />
                                </div>
                                <div className="col-9">
                                <Form.Control type="text" placeholder="User name" id="name-id" className="category-name" />
                                </div>
                            </div>
                            {/* F-name */}
                            <div className="row add-row">
                                <div className="col-3 add-text">
                                    First Name <Icon icon="line-md:question-circle-twotone" color="black" />
                                </div>
                                <div className="col-9">
                                <Form.Control type="text" placeholder="First name" id="code-id" className="category-code" />
                                </div>
                            </div>
                            {/* l-name  */}
                            <div className="row add-row">
                                <div className="col-3 add-text">
                                    Last Name <Icon icon="line-md:question-circle-twotone" color="black" />
                                </div>
                                <div className="col-9">
                                <Form.Control type="text" placeholder="Last name" id="description-id" className="Category-description" />
                                </div>
                            </div>
                            {/* email  */}
                            <div className="row add-row">
                                <div className="col-3 add-text">
                                    Email Address <Icon icon="line-md:question-circle-twotone" color="black" />
                                </div>
                                <div className="col-9">
                                <Form.Control type="email" placeholder="Email address" id="description-id" className="Category-description" />
                                </div>
                            </div>
                            {/* password  */}
                            <div className="row add-row">
                                <div className="col-3 add-text">
                                    Password <Icon icon="line-md:question-circle-twotone" color="black" />
                                </div>
                                <div className="col-9">
                                <Form.Control type="text" placeholder="Password" id="description-id" className="Category-description" />
                                </div>
                            </div>
                            {/* addresss-1  */}
                            <div className="row add-row">
                                <div className="col-3 add-text">
                                    Address 1 <Icon icon="line-md:question-circle-twotone" color="black" />
                                </div>
                                <div className="col-9">
                               
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            {/* address-2  */}
                            <div className="row add-row">
                                <div className="col-3 add-text">
                                    Address 2 <Icon icon="line-md:question-circle-twotone" color="black" />
                                </div>
                                <div className="col-9">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            {/* country  */}
                            <div className="row add-row">
                                        <div className="col-md-3 product-data">
                                            <label>
                                                Select Country <Icon icon="line-md:question-circle-twotone" color="black" />
                                            </label>
                                        </div>
                                        <div className="col-md-9">
                                            <Form.Select className="select-category" id="ddl_category">
                                                <option value="0"> Select Country</option>
                                                {this.state.countries.map((c) => (
                                                <option value={c.id}>{c.name}</option>
                                                ))}
                                            </Form.Select></div>
                            </div>
                            {/* state  */}
                            <div className="row add-row">
                                    <div className="col-md-3 product-data">
                                        <label>
                                            Select State <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </label>
                                    </div>
                                    <div className="col-md-9"><Form.Select className="select-category" id="ddl_category">
                                    <option value="0"> Select State</option>
                                    {this.state.states.map((p) => (
                                            <option value={p.id}>{p.name}</option>
                                            ))} 
                                        </Form.Select>
                                   
                                        </div>
                            </div>
                            {/* city */}
                            <div className="row add-row">
                                    <div className="col-md-3 product-data">
                                        <label>
                                            Select City <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </label>
                                    </div>
                                    <div className="col-md-9">
                                        <Form.Select className="select-category" id="ddl_category">
                                            <option value="0"> Select City</option>
                                            {this.state.cities.map((c) => (
                                            <option value={c.id}>{c.city}</option>
                                            ))}
                                        </Form.Select></div>
                            </div>
                            {/* pincode  */}
                            <div className="row add-row">
                                <div className="col-3 add-text">
                                    PinCode <Icon icon="line-md:question-circle-twotone" color="black" />
                                </div>
                                <div className="col-9">
                                <Form.Control type="number" placeholder="Pincode" id="description-id" className="Category-description" />
                                </div>
                            </div>
                            {/* is activte */}
                            <div className="row add-row">
                                <div className="col-3 add-text">
                                    Is Actice <Icon icon="line-md:question-circle-twotone" color="black" />
                                </div>
                                <div className="col-9">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                </div>
                            </div>
                            {/* role */}
                            <div className="row add-row">
                                    <div className="col-md-3 product-data">
                                        <label>
                                            Select Role <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </label>
                                    </div>
                                    <div className="col-md-9">
                                        <Form.Select className="select-category" id="ddl_category">
                                            <option value="0"> Select Role</option>
                                            {this.state.roles.map((r) => (
                                            <option value={r.id}>{r.role_type}</option>
                                            ))}
                                        </Form.Select></div>
                            </div>
                            {/* save bth  */}
                            <div className="row btn-row">
                                <div className="col-12">
                                <button type="button" className="btn btn-primary search-btn" ><Icon icon="fluent:save-16-regular" /> Save</button>
                                </div>

                            </div>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>

        </div>
        </>
    );
        }
}

export default AddCustomer;