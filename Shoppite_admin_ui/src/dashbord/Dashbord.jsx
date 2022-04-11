import { Box } from "@mui/material";
import React, { useState } from "react";
import  Card  from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import './dashbord.css';
import { Icon } from '@iconify/react';
import { Chart,registerables } from "chart.js";
import ReactTable from "react-table";  
import { Modal, Table, Button } from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

Chart.register(...registerables);
var showBox=false;
class Dashbord extends React.Component
{
    constructor(){  
        super();
    this.state={
        viewData1 :false,
        viewData2 :false,
        viewData3 :false,
        viewData4 :false,
    }
    this.handleClose1 = this.handleClose1.bind(this);
    this.handleShow1 = this.handleShow1.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);
    this.handleShow2 = this.handleShow2.bind(this);
    this.handleClose3 = this.handleClose3.bind(this);
    this.handleShow3 = this.handleShow3.bind(this);
    this.handleClose4 = this.handleClose4.bind(this);
    this.handleShow4 = this.handleShow4.bind(this);
    }

    showBoxData()
    {
        showBox=true;
        document.getElementById()
    }

    // OrderChartData
    ChartBind(){
    const ctx = document.getElementById('orderBarChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
        datasets: [{
            label: 'Number Of Orders',
            data: [150,200,350,400,200,600,800,850,1000,800,750,900],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
    }
    // NewCustomersChartData
    ChartBind1(){
        const ctx = document.getElementById('newCustomerLineChart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
            datasets: [{
                label: 'Numbers Of Customers',
                data: [50,90,150,170,200,250,260,320,400,500,520,600],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
        }
    componentDidMount(){
        this.ChartBind();       //ChartDataValuePass
        this.ChartBind1();      //CahrtDataValuePass
        // this.tableData();
    }
    handleClose1(e)  
    {
        this.setState({viewData1 : false})

    }
    handleShow1() {
        this.setState({viewData1 : true})
    }
    handleClose2()  
    {
        
        this.setState({viewData2 : false})

    }
    handleShow2() {
       
        this.setState({viewData2 : true})
    }
    handleClose3()  
    {
        
        this.setState({viewData3 : false})

    }
    handleShow3() {
       
        this.setState({viewData3 : true})
    }
    handleClose4()  
    {
        
        this.setState({viewData4 : false})

    }
    handleShow4() {
        
        this.setState({viewData4 : true})
    }

    render()
    {
       
        
        return(
            <>
            <h1>Welcome to Dashbord</h1>
            {/* Boxs */}
            <div className="row">
                <div className="col-12">
                <Card border="primary">
                    <Card.Header><Icon icon="wpf:statistics" color="black" /> Common statistics <span className="plusIcon" onClick={this.showBoxData} ><Icon icon="akar-icons:plus" color="black" /></span></Card.Header>
                    <Card.Body className="firstBoxBody">
                        <div className="row">
                            {/* FirstBox */}
                            <div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3  ">
                            <Box
                            sx={{
                                bgcolor: '#80cdeb',
                                boxShadow: 1,
                                borderRadius: 1,
                                p: 2,
                               
                            }}>
                        <div className="box-data-number">
                            24
                            <span className="box-data-icon"><Icon icon="ion:bag" color="black" /></span>
                        </div>
                        <span>
                                Orders   
                        </span>
                        <div className="box-footer-1">
                               <NavLink className="info" to="./info">More info</NavLink> 
                            </div>
                        </Box>
                            </div>
                            {/* SecondBox */}
                            <div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3" >
                            <Box
                            sx={{
                                bgcolor: '#ffff008c;',
                                boxShadow: 1,
                                borderRadius: 1,
                                p: 2,
                               
                            }}>
                        <div className="box-data-number">
                            0
                            <span className="box-data-icon"><Icon icon="fontisto:spinner-refresh" color="black" /></span>
                        </div>
                        <span>
                                Pending return requests   
                        </span>
                        <div className="box-footer-2">
                               <NavLink className="info" to="./info">More info</NavLink> 
                            </div>
                        </Box>
                            </div>
                            {/* ThirdBox */}
                            <div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3" >
                            <Box
                            sx={{
                                bgcolor: '#9ff3a9;',
                                boxShadow: 1,
                                borderRadius: 1,
                                p: 2,
                               
                            }}>
                        <div className="box-data-number">
                            10
                            <span className="box-data-icon"><Icon icon="akar-icons:person-add" color="black" /></span>
                        </div>
                        <span>
                                Registered customers   
                        </span>
                        <div className="box-footer-3">
                               <NavLink className="info" to="./info">More info</NavLink> 
                            </div>
                        </Box>
                            </div>
                            {/* FourthBox */}
                            <div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3" >
                            <Box
                            sx={{
                                bgcolor: '#e15757;',
                                boxShadow: 1,
                                borderRadius: 1,
                                p: 2,
                               
                            }}>
                        <div className="box-data-number">
                            3
                            <span className="box-data-icon"><Icon icon="foundation:graph-pie" color="black" /></span>
                        </div>
                        <span>
                                Low stock products  
                        </span>
                        <div className="box-footer-4">
                               <NavLink className="info" to="./info">More info</NavLink> 
                            </div>
                        </Box>
                            </div>
                           
                        </div> 
                    </Card.Body>
                </Card>
                </div>
            </div>      
            {/* EndOfBoxs */}
            {/* Charts */}
            <div className="row">
                {/* OrderBarChart */}
                <div className="col-6">
                    <Card>
                        <Card.Header>
                        <Icon icon="clarity:shopping-cart-line" color="black" /> Order
                        </Card.Header>
                        <Card.Body>
                            <canvas id="orderBarChart" width="300" height="300"></canvas>
                        </Card.Body>
                    </Card>

                </div>
                {/* NewCustomersChart */}
                <div className="col-6">
                    <Card>
                        <Card.Header>
                        <Icon icon="ant-design:user-add-outlined" color="black" /> New Customers
                        </Card.Header>
                        <Card.Body>
                            <canvas id="newCustomerLineChart" width="400" height="400"></canvas>
                        </Card.Body>
                    </Card>

                </div>
            </div>

            {/* OrderTable */}
            <div className="row">
                <div className="col-12">
                    <Card border="primary">
                        <Card.Header><Icon icon="fa-regular:money-bill-alt" color="black" /> Order totals</Card.Header>
                        <Card.Body>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Order Status</th>
                                            <th>Today</th>
                                            <th>This Week</th>
                                            <th>This Month</th>
                                            <th>This Year</th>
                                            <th>All Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Pending</td>
                                            <td>1000 Rs.</td>
                                            <td>5000 Rs.</td>
                                            <td>17500 Rs.</td>
                                            <td>85670 Rs.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Processing</td>
                                            <td>2400 Rs.</td>
                                            <td>7000 Rs.</td>
                                            <td>20200 Rs.</td>
                                            <td>90000 Rs.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Complete</td>
                                            <td>700 Rs.</td>
                                            <td>8500 Rs.</td>
                                            <td>34600 Rs.</td>
                                            <td>120600 Rs.</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Cancelled</td>
                                            <td>0 Rs.</td>
                                            <td>1000 Rs.</td>
                                            <td>4000 Rs.</td>
                                            <td>10000 Rs.</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>  
                        </Card.Body>
                    </Card>

                </div>
                            
            </div> 
            <div className="row">
                <div className="col-12">
                <Card >
                        <Card.Header><Icon icon="bi:cart-plus" color="black" /> Latest Orders</Card.Header>
                        <Card.Body>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Order #</th>
                                            <th>Order Status</th>
                                            <th>Customer</th>
                                            <th>Created On</th>
                                            <th>View</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>5</td>
                                            <td><span className="complete-span">Complete</span></td>
                                            <td>Victoria Terces (victoria_victoria@nopCommerce.com)</td>
                                            <td>01/03/2022</td>
                                            <td><Button variant="primary" onClick={this.handleShow1}>
                                                View
                                            </Button>

                                                <Modal show={this.state.viewData1} onHide={this.handleClose1}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Order Information</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <table>
                                                            <td>
                                                                <tr>Full Name</tr>
                                                                <tr>Email</tr>
                                                                <tr>Phone</tr>
                                                                <tr>Company</tr>
                                                                <tr>City</tr>
                                                                <tr>Country</tr>
                                                                <tr>Oreder</tr>
                                                            </td>

                                                            <td className="order-info">
                                                                <tr>: Victoria_Terces</tr>
                                                                <tr>: Victoria@xyz.com</tr>
                                                                <tr>: 456372189</tr>
                                                                <tr>: Terces Company</tr>
                                                                <tr>: Dubai</tr>
                                                                <tr>: UAE</tr>
                                                                <tr>: 5</tr>
                                                            </td>
                                                        </table>
                                                       
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={this.handleClose1}>
                                                            Close
                                                        </Button>
                                                        <NavLink to="./order">
                                                        <Button variant="primary">
                                                            More info
                                                        </Button>
                                                        </NavLink>
                                                    </Modal.Footer>
                                                </Modal></td>
                                            
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><span className="processing-span">Processing</span></td>
                                            <td>Brenda Lindgren (brenda_lindgren@nopCommerce.com)</td>
                                            <td>03/03/2022.</td>
                                            <td><Button variant="primary" onClick={this.handleShow2}>
                                                View
                                            </Button>

                                                <Modal show={this.state.viewData2} onHide={this.handleClose2}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Modal heading</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body> <table>
                                                            <td>
                                                                <tr>Full Name</tr>
                                                                <tr>Email</tr>
                                                                <tr>Phone</tr>
                                                                <tr>Company</tr>
                                                                <tr>City</tr>
                                                                <tr>Country</tr>
                                                                <tr>Oreder</tr>
                                                            </td>

                                                            <td className="order-info">
                                                                <tr>: Victoria_Terces</tr>
                                                                <tr>: Victoria@xyz.com</tr>
                                                                <tr>: 456372189</tr>
                                                                <tr>: Terces Company</tr>
                                                                <tr>: Dubai</tr>
                                                                <tr>: UAE</tr>
                                                                <tr>: 5</tr>
                                                            </td>
                                                        </table></Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={this.handleClose2}>
                                                            Close
                                                        </Button>
                                                        <NavLink to="./order">
                                                        <Button variant="primary">
                                                            More info
                                                        </Button>
                                                        </NavLink>
                                                    </Modal.Footer>
                                                </Modal></td>
                                            
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><span className="pending-span">Pending</span></td>
                                            <td>James Pan (james_pan@nopCommerce.com)</td>
                                            <td>06/03/2022</td>
                                            <td><Button variant="primary" onClick={this.handleShow3}>
                                                View
                                            </Button>

                                                <Modal show={this.state.viewData3} onHide={this.handleClose3}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Modal heading</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body> <table>
                                                            <td>
                                                                <tr>Full Name</tr>
                                                                <tr>Email</tr>
                                                                <tr>Phone</tr>
                                                                <tr>Company</tr>
                                                                <tr>City</tr>
                                                                <tr>Country</tr>
                                                                <tr>Oreder</tr>
                                                            </td>

                                                            <td className="order-info">
                                                                <tr>: Victoria_Terces</tr>
                                                                <tr>: Victoria@xyz.com</tr>
                                                                <tr>: 456372189</tr>
                                                                <tr>: Terces Company</tr>
                                                                <tr>: Dubai</tr>
                                                                <tr>: UAE</tr>
                                                                <tr>: 5</tr>
                                                            </td>
                                                        </table></Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={this.handleClose3}>
                                                            Close
                                                        </Button>
                                                        <NavLink to="./order">
                                                        <Button variant="primary">
                                                            More info
                                                        </Button>
                                                        </NavLink>
                                                    </Modal.Footer>
                                                </Modal></td>
                                            
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><span className="pending-span">Pending</span></td>
                                            <td>Arthur Holmes (arthur_holmes@nopCommerce.com)</td>
                                            <td>02/03/2022</td>
                                            <td><Button variant="primary" onClick={this.handleShow4}>
                                                View
                                            </Button>

                                                <Modal show={this.state.viewData4} onHide={this.handleClose4}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Modal heading</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body> <table>
                                                            <td>
                                                                <tr>Full Name</tr>
                                                                <tr>Email</tr>
                                                                <tr>Phone</tr>
                                                                <tr>Company</tr>
                                                                <tr>City</tr>
                                                                <tr>Country</tr>
                                                                <tr>Oreder</tr>
                                                            </td>

                                                            <td className="order-info">
                                                                <tr>: Victoria_Terces</tr>
                                                                <tr>: Victoria@xyz.com</tr>
                                                                <tr>: 456372189</tr>
                                                                <tr>: Terces Company</tr>
                                                                <tr>: Dubai</tr>
                                                                <tr>: UAE</tr>
                                                                <tr>: 5</tr>
                                                            </td>
                                                        </table></Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={this.handleClose4}>
                                                            Close
                                                        </Button>
                                                        <NavLink to="./order">
                                                        <Button variant="primary">
                                                            More info
                                                        </Button>
                                                        </NavLink>
                                                    </Modal.Footer>
                                                </Modal></td>
                                            
                                        </tr>
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

export default Dashbord;