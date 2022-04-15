import React from "react";
 import './sub_product.css';
import { Icon } from '@iconify/react';
import { Card, Form, Table } from "react-bootstrap";
import  {NavLink } from "react-router-dom";
import { getAllSub_Product, removeSub_Product} from "../services/sub_product.service";



 class Sub_product extends React.Component{
     constructor(props){
        super(props)
            this.state = {
                subProduct: []
        };
     }
     delete_subproduct(id){
        removeSub_Product(id).then(this.render());
        getAllSub_Product().then(res =>this.setState({subProduct:res.data}));
       //  this.render();
       //  console.log("delte after render");
       }
        componentWillMount(){
        getAllSub_Product().then(res =>this.setState({subProduct:res.data}));
        console.log(this.state.subProduct);
        console.log("will");
      }
     
     render(){
    return(
    <>
  
    <div className="row" >
   
        <div className="sub-pro-head">
       <span ><b className="product"> Sub Products</b></span> 
      <NavLink to="./addproduct"> <button type="button" class="btn btn-primary   bttn"><Icon icon="carbon:add-filled" /> Add</button></NavLink>
       </div>
       </div>
    <div>
       <Card style={{ width: '95%' }}>
       <Card.Body>
<Card.Title><Icon icon="fluent:search-square-24-filled" color="black" className="search-ico"></Icon>Search</Card.Title>
        <div className="container-fuied">
            {/* row-1 */}
            <div className="row"> 
                <div className="col-md-3  lable-pro">
                    <label>Select Category</label>
                </div>
                <div className="col-md-3">
                    <Form.Select>
                        <option> Select Category</option>
                        <option value="1">Home Decore</option>
                        <option value="2">Electronic</option>
                        <option value="3">Grocery</option>
                        <option value="3">Appilances</option>
                        <option value="3">Cloth</option>
                        <option value="3">Beauty & Toys</option>
                        <option value="3">Accesories & Footwear</option>
                    </Form.Select>

                </div>
               
                
           
            <div className="col-md-2    lable-pro">
                    <label>Select Products</label>
                </div>
                <div className="col-md-3 select-pro">
                    <Form.Select >
                        <option> Select Products</option>
                        <option value="1">"Wall Decore & Painting</option>
                        <option value="2">Lighting</option>
                        <option value="3">Laptop</option>
                        <option value="4">Mobile</option>
                        <option value="5">Dairy Products</option>
                        <option value="6">HouseHold Products</option>
                        <option value="7">Sancks & Bevereges</option>
                        <option value="8">Seasonal Appliances</option>

                    </Form.Select>

                </div>
                </div>

                {/* row-1-end */}
                <div className="row">

                    <div className="col-md-3  lable-pro">
                         <Form.Label> Sub Product Name  </Form.Label>
                    </div>
                    <div className="col-md-3">
                        <Form.Control type="text" placeholder=" Sub Product Name" />
                    </div>

                    <div className="col-md-2  lable-pro">
                         <Form.Label> Sub Product Code  </Form.Label>
                    </div>
                    <div className="col-md-3">
                        <Form.Control type="text" placeholder=" Sub Product Code"  />
                    </div>
                </div>
                <div className="row">
            
            <button type="button" class="btn btn-primary search-bttn"><Icon icon="heroicons-solid:search" /> Search</button>
           </div>

        </div>

       </Card.Body>

       </Card>       
    </div>
    <div>
    <Card className="table-card" >
<Table  striped bordered hover>
  <thead>
    <tr>
     
      <th><input type="checkbox" value="checkedall" /> </th>
      <th>Sub Product Id</th>
      <th>Picture</th>
      <th>Sub Product Name</th>
      <th>Sub Product Price</th>
      <th>Sub Product Quantity</th>
      <th>Is Available</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {this.state.subProduct.map((s) => (
      
    <tr>
   
      <td><input type="checkbox"/> </td>
      <td>{s.id}</td>
      <td>{s.picture}</td>
      <td>{s.sub_product_name}</td>
      <td>{s.sub_product_price}</td>
      <td>{s.sub_product_quantity}</td>
      <td width={"10%"}><img src={s.is_available} width="30%"/></td>
     <td className="action-button"><NavLink to={s.id}><button type="button" class="btn btn-outline-primary"><Icon icon="akar-icons:edit" color="black"/></button></NavLink><button type="button"     class="btn btn-outline-danger" onClick={()=>this.delete_subproduct(s.id)}><Icon icon="fluent:delete-28-filled"color="black" /></button></td>     
    </tr>
  ))}
  </tbody>
</Table>

</Card>
    </div>

    

    </>);
}
}
export default Sub_product;
// onClick={()=>this.delete(s.id)}