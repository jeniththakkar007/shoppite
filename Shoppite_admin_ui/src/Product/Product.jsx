import React from "react";
import './Product.css'
import { Icon } from '@iconify/react';
import { Card, Form, Table } from "react-bootstrap";
import  {NavLink } from "react-router-dom";
import { getAllProducts , removeProduct, search_Pro_Data} from "../services/products.service";



 class Product extends React.Component{
     constructor(props){
        super(props)
            this.state = {
                product: []
        };
     }
     delete(id){
       removeProduct(id).then(this.render());
       getAllProducts().then(res =>this.setState({product:res.data}));
      }
      search_pData()
      {
        var sdata = new Object();
        sdata.category_id =  document.getElementById('search_SCategory_id').value;
        sdata.product_type_name =  document.getElementById('search_pName_id').value;
        sdata.product_code =  document.getElementById('search_pCode_id').value;
        search_Pro_Data(sdata).then(res =>this.setState({product:res.data.recordsets[0]}));
      }
     
 
      componentWillMount(){
        getAllProducts().then(res =>this.setState({product:res.data}));
        console.log(this.state.product);
      }
     render(){
    return(
    <>
  
    <div className="row" >
        <div>
   
        <div className="head">
       <span ><b className="product">Products</b></span> 
      <NavLink to="./add"> <button type="button" className="btn btn-primary   button"><Icon icon="carbon:add-filled" /> Add</button></NavLink>
       </div>

        
          <Card style={{ width: '95%' }}>
  <Card.Body>
    <Card.Title><Icon icon="fluent:search-square-24-filled"  className="icon-search"  style={{ size: '10px' }}/> Search</Card.Title>
    
   <div className="container-fuild">
     <div className="row  select-category">
       <div className="col-md-3 product-data">
<label>
    Select Category
</label>
</div>
<div className="col-md-3 ">  <Form.Select id="search_SCategory_id">
  <option value="0"> Select Category</option>
  <option value="1">Home Decore</option>
  <option value="2">Electronic</option>
  <option value="3">Grocery</option>
  <option value="4">Appilances</option>
  <option value="5">Cloth</option>
  <option value="6">Beauty & Toys</option>
  <option value="7">Accesories & Footwear</option>
</Form.Select>
</div>
<div className="col-md-3 product-data">
  <Form.Label>Product Name    </Form.Label>
  </div>
  <div className="col-md-3">
  <Form.Control type="text" placeholder="Product Name" className="Product-name" id="search_pName_id" />
  </div>
</div>

{/* row end */}<Form >
<div className="row">
  
  <div className="col-md-3 product-data">
  <Form.Label>Product Code    </Form.Label>
  </div>
  <div className="col-md-3">
  <Form.Control type="text" placeholder="Product Code" className="Product-name" id="search_pCode_id" />
  </div>
</div>
<div className="row">
            
            <button type="button" onClick={()=>this.search_pData()} className="btn btn-primary search-button"><Icon icon="heroicons-solid:search" /> Search</button>
           </div>
            </Form>
            </div>
  </Card.Body>
  
</Card> 
</div>
<div >
<Card className="table-card" style={{ width: '95%' }}>
<Table  striped bordered hover>
  <thead>
    <tr>
     
      <th><input type="checkbox" value="checkedall"   /> </th>
     <th>Product ID</th>
      <th>Category Name</th>
      <th>Product Code</th>
      <th>Product Type Name</th>
      <th>Product Type Description</th>
      
      <th>Action</th>
    
    </tr>
  </thead>
  <tbody>
  {this.state.product.map((p) => (
    <tr>
   
      <td><input type="checkbox"  /> </td>
      <td>{p.id}</td>
      <td>{p.category_name}</td>
      <td>{p.product_code}</td>
      <td>{p.product_type_name}</td>
      <td>{p.product_type_description}</td>
     <td className="action-button"><NavLink to={p.id.toString()}><button type="button" className="btn btn-outline-primary"><Icon icon="akar-icons:edit" color="black"/></button></NavLink><button type="button"  onClick={()=>this.delete(p.id)}   className="btn btn-outline-danger"><Icon icon="fluent:delete-28-filled"color="black" /></button></td>     
    </tr>
  ))}
  </tbody>
</Table>
</Card>
</div>
    </div>

    </>);
}
}
export default Product;