import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { Card, Form, Table } from "react-bootstrap";

export const Order_Admin = () => {
    return (
        <>
            <div>
                <div className="container-fuild">
                    <div className="row category_row" style={{ "marginBottom": "1%" }}>
                        <div className="col-6">
                            <span className="title"><b> Orders</b> </span>
                        </div>
                        <div class="card card_profile">
                            <div class="card-body best_row_css">
                                <div className="Category_type">
                                    <Icon icon="fluent:search-square-24-filled" />	Search
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3 cat_search">
                                        <h6 class="mb-0">  Order ID</h6>
                                    </div>
                                    
                                    <div class="col-sm-3 cat_search text-secondary">
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="row mb-3">
                                    <div class="col-sm-3 cat_search">
                                        <input class="form-check-input space" type="checkbox" value="" id="flexCheckDefault" />
                                        <h6 class="mb-0">Pending</h6>
                                    </div>
                                    <div class="col-sm-3 cat_search">
                                        <input class="form-check-input space" type="checkbox" value="" id="flexCheckDefault" />
                                        <h6 class="mb-0">Deliverd</h6>
                                    </div>
                                    <div class="col-sm-3 cat_search">
                                        <input class="form-check-input space" type="checkbox" value="" id="flexCheckDefault" />
                                        <h6 class="mb-0">Cancel</h6>
                                    </div>
                                    <div class="col-sm-3 cat_search">
                                        <input class="form-check-input space" type="checkbox" value="" id="flexCheckDefault" />
                                        <h6 class="mb-0">Completed</h6>
                                    </div>


                                </div>

                                </div>

                                <div class="col-sm-9   text-secondary">
                                    <input type="button" class="btn btn-primary last_btn" value="Search" />
                                </div>
                            </div>
                        </div>
                       
                        <div className="table-box">
                            <Card className="table-card">
                                <Card.Body>
                                    <Card.Title style={{ "marginBottom": "2%" }}> More about Products</Card.Title>
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Order ID</th>
                                                    <th scope="col">Order Date</th>
                                                    <th scope="col">Total Price</th>
                                                    <th scope="col">Total Quantity</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Delivery Date</th>
                                                    <th scope="col">Action</th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">C12RF5</th>
                                                    <td>23/6/2022</td>
                                                    <td>2300</td>
                                                    <td>2</td>
                                                    <td className="btn btn-outline-warning">Pending</td>
                                                    <td>30/6/2022</td>

                                                    <td className="action_xell" style={{ "display": "flex" }}><NavLink to="./view"><button type="button" class="btn btn-success">View Detail</button></NavLink></td>

                                                </tr>
                                                <tr >
                                                    <th scope="row">Y4F6d5</th>
                                                    <td>6/6/2022</td>
                                                    <td>96</td>
                                                    <td>1</td>
                                                    <td className="btn btn-outline-success"  >Deliverd</td>
                                                    <td>22/6/2022</td>

                                                    <td className="action_xell" style={{ "display": "flex" }}><NavLink to="./view"><button type="button" class="btn btn-success">View Detail</button></NavLink></td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">H65GD</th>
                                                    <td>9/6/2022</td>
                                                    <td>7500</td>
                                                    <td>6</td>
                                                    <td className="btn btn-outline-danger" >Cancel</td>
                                                    <td>30/6/2022</td>

                                                    <td className="action_xell" style={{ "display": "flex" }}><NavLink to="./view"><button type="button" class="btn btn-success">View Detail</button></NavLink></td>

                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}