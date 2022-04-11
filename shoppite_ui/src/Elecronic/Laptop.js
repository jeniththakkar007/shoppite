import  Autocomplete  from "@material-ui/lab/Autocomplete";
import  TextField  from "@mui/material/TextField";
import  {Button}  from "bootstrap";
import React from "react";
import Card  from 'react-bootstrap/Card';
import './Laptop.css';
import { Icon } from '@iconify/react';
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { CardTravel } from "@material-ui/icons";
import Cart from "../Cart";
import { NavLink } from "react-router-dom";
import Description1 from "./Description1";
import Header from "../Header";
const BRANDS = [
  { label: 'LENOVO'},
  { label: 'DELL'},
  { label: 'HP'  },
  { label: 'APPLE' },
  { label: 'ASUS' },
  { label: 'ACER' }];

  const RAM = [
    { label: '4 GB'},
    { label: '8 GB'},
    { label: '12 GB'  },
    { label: '16 GB' },
    { label: '32 GB'},
    { label: '64 GB'},
  ];
const STORAGE=[
  { label: '256GB HDD'},
{ label: '512GB HDD'},
{ label: '1 TB HDD'  },
{ label: '2 TB HDD' },
{ label: '256GB SSD'},
{ label: '512GB SSD'},
{ label: '1 TB SSD'  },
{ label: '2 TB SSD' }];

const PRICE =[
  { label: '30K TO 45K'},
  { label: '45K TO 55K'},
  { label : '55K TO 70K'  },
  { label: '70K TO 1 LAKH' },];

  const colour=[
    { label: 'BLACK'},
  { label: 'WHITE'},
  { label : 'GREY'  },
];
 var value_add =0;



class Laptop extends React.Component{
    constructor(){
        super();
        this.state ={id : 1}
    }
    gotocart(){
      console.log("clicked the cart");
      <Cart/>
    }
    change_value_of_cart(){
       
     var abb= value_add++;
      <Header vData={abb}/>
    }
   
    render(){
        return(

          <>
          {/* filter */}
<div className="row roo">
   {/* brands-dropdown */}
<div className="col-md-2">
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={BRANDS}
      getOptionLabel={(option)=>(option.label?option.label:'')}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Brands" />}
    />
    </div>
     {/* ram-dropdown */}
    <div className="col-md-2">
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={RAM}
      getOptionLabel={(option)=>(option.label?option.label:'')}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="RAM" />}
    />
    </div>
 {/* storage-dropdown */}
    <div className="col-md-2">
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={STORAGE}
      getOptionLabel={(option)=>(option.label?option.label:'')}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Storage" />}
    />
    </div>
   {/* price-dropdown */}
    <div className="col-md-2">
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={PRICE}
      getOptionLabel={(option)=>(option.label?option.label:'')}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Price" />}
    />
   
    </div>
     {/* colour-dropdown */}
     <div className="col-md-2">
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={colour}
      getOptionLabel={(option)=>(option.label?option.label:'')}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Colour" />}
    />
   
    </div> 
      {/* submit-button */} 
    <div className="col-md-2">
     <button className="button1">submit</button>
     </div> 
   
      </div>
  {/* compny */}
<div className="row ">

   {/* Lenovo */}
  <div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3">
                <Card style={{ width: '16.3rem' }} className="card" border="success">
  <Card.Img src="https://860655.smushcdn.com/1882261/wp-content/uploads/2021/09/Lenovo-Yoga-Slim-7-Carbon_AMD_14in_Dual-Sides-e1630518104960-1024x822.png?lossy=1&strip=1&webp=1"  className="lenovo" style={{ height :'213px'}}/>
  <Card.Body>
    <Card.Title  className="lap1"> <Icon icon="cib:lenovo" />  Lenovo</Card.Title>
    
  
  </Card.Body>
</Card>
  </div>

   {/* Dell */}
  <div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3">

<Card style={{ width: '16.3rem' }}  border="success">
  <Card.Img src="https://reapp.com.gh/wp-content/uploads/2021/04/l_10218384_008.jpg"  className="lenovo"  style={{ height :'213px'}}/>
  <Card.Body>
    <Card.Title  className="lap1"> <Icon icon="simple-icons:dell" />  Dell</Card.Title>
    
  
  </Card.Body>
</Card>
  </div>

 {/* HP */}
<div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3">
<Card style={{ width: '16.3rem'  }} border="success">
  <Card.Img src="https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/f/e/felicette_15_fogblue_cloudblue_nt_hdcam_nonodd_fpr_win10_coreset_frontright_1_1.png"  className="lenovo"  style={{ height :'213px'}}/>
  <Card.Body>
    <Card.Title  className="lap1">  <Icon icon="cib:hp" /> HP</Card.Title>
    
  
  </Card.Body>
</Card>
</div>

 {/* Apple */}
<div className=" col-12 col-sm-6 col-md-3  col-lg-3 col-xl-3">
                
                <Card style={{ width: '16.3rem'  }}  border="success">
  <Card.Img src="https://www.techadvisor.com/cmsdata/features/3801639/redesigned_macbook_pro_2021_news_8.jpg"  className="lenovo"  style={{ height :'213px'}}/>
  <Card.Body>
    <Card.Title  className="lap1"><Icon icon="ant-design:apple-filled" /> APPLE</Card.Title>
    
  
  </Card.Body>
</Card>


</div>

</div>

 {/* video-banner */}
<div className="row video-bnner">

  
    <video className="center" autoPlay loop>
      <source src="banner_hp.mp4" type="video/mp4"/>
    </video>
 
</div>

 {/* laptop details */}
<div className="row  laptop-details">
     <div className="col-md-3 lap-1-detail">
  <Card style={{width:"14rem"}} border="success" >
  <Card.Body>
  <Card.Img src="https://rukminim1.flixcart.com/image/416/416/kyt0ya80/computer/s/z/b/-original-imagayc6ahrmg8y7.jpeg?q=70"  />
    <Card.Title className="title-text">HP Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home)</Card.Title>
     <Card.Text className="card-rext">
          <Icon icon="bx:rupee" />45,000
    </Card.Text> 
    <button className="cart-button" title="ADD TO CART" href="/cart"><Icon icon="dashicons:cart" /> </button>
    <button  className="cart-button" title="ADD TO WISHLIST" href="/wishlist"><Icon icon="bxs:shopping-bag" /> </button>
  </Card.Body>
 
</Card>
</div>



<div className="col-md-3 lap-1-detail">
  <Card style={{width:"14rem"}} border="success" >
  <Card.Body>
  <Card.Img src="https://rukminim2.flixcart.com/image/416/416/kk2wl8w0/computer/m/e/m/na-2-in-1-laptop-dell-original-imafzgenzgr2zdyg.jpeg?q=70" />
    <Card.Title className="title-text">DELL Inspiron Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) </Card.Title>
     <Card.Text>
          <Icon icon="bx:rupee" />37,700
    </Card.Text> 
    <button className="cart-button" title="ADD TO CART" href="/cart"><Icon icon="dashicons:cart" /> </button>
    <button  className="cart-button" title="ADD TO WISHLIST" href="/wishlist"><Icon icon="bxs:shopping-bag" /> </button>
  </Card.Body>
 
</Card>
</div>
<div className="col-md-3 lap-1-detail">
  <Card style={{width:"14rem"}} border="success" >
  <Card.Body>
  <Card.Img src="https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTFtRGpESUZ6TkwuX0FDX1NMMTEyNV8uanBn.jpg" />
    <Card.Title className="title-text">Lenovo IdeaPad 3 Core i3 11th Gen - (8 GB/256 GB SSD/Windows 11 Home)</Card.Title>
     <Card.Text>
          <Icon icon="bx:rupee" />40,200
    </Card.Text> 
    <button className="cart-button" title="ADD TO CART" href="/cart"><Icon icon="dashicons:cart" /> </button>
    <button  className="cart-button" title="ADD TO WISHLIST" href="/wishlist"><Icon icon="bxs:shopping-bag" /> </button>
  </Card.Body>
 
</Card>
</div>
<div className="col-md-3 lap-1-detail">
  <Card style={{width:"14rem"}} border="success" >
  <Card.Body>
  <Card.Img src="applelap-row1.jpg"/>
    <Card.Title className="title-text">APPLE MacBook Air M1 - (16 GB/512 GB SSD/Mac OS Big Sur) </Card.Title>
     <Card.Text>
          <Icon icon="bx:rupee" />38,000
    </Card.Text> 
    <button className="cart-button" title="ADD TO CART" href="/cart"><Icon icon="dashicons:cart" /> </button>
    <button  className="cart-button" title="ADD TO WISHLIST" href="/wishlist"><Icon icon="bxs:shopping-bag" /> </button>
  </Card.Body>
 
</Card>
</div>

</div>



{/* 2nd row of laptop-details */}

<div className="row  laptop-details2">
     <div className="col-md-3 lap-2-detail">
  <Card style={{width:"14rem"}} border="success" >
  <Card.Body>
  <Card.Img src="https://i.gadgets360cdn.com/products/large/asus-vivobook15-x509-1287x800-1567590182.jpg"  />
    <Card.Title className="title-text">ASUS Celeron Dual Core - (4 GB/1 TB HDD/Windows 10 Home) </Card.Title>
     <Card.Text>
          <Icon icon="bx:rupee" />50,000
    </Card.Text> 
    <button className="cart-button" title="ADD TO CART" href="/cart"><Icon icon="dashicons:cart" /> </button>
    <button  className="cart-button" title="ADD TO WISHLIST" href="/wishlist"><Icon icon="bxs:shopping-bag" /> </button>
  </Card.Body>
 
</Card>
</div>



<div className="col-md-3 lap-2-detail">
  <Card style={{width:"14rem"}} border="success" >
  <Card.Body>
  <Card.Img src="https://i2.wp.com/laptopmedia.com/wp-content/uploads/2021/06/1-7-e1622635422903.jpg?fit=1857%2C1299&ssl=1"  />
    <Card.Title className="title-text">Acer Aspire 5 Thin and light laptop intel core i5 11th gen</Card.Title>
     <Card.Text>
          <Icon icon="bx:rupee" />60,000
    </Card.Text> 
    <button className="cart-button" title="ADD TO CART" href="/cart"><Icon icon="dashicons:cart" /> </button>
    <button  className="cart-button" title="ADD TO WISHLIST" href="/wishlist"><Icon icon="bxs:shopping-bag" /> </button>
  </Card.Body>
 
</Card>
</div>
<div className="col-md-3 lap-2-detail">
  <Card style={{width:"14rem"}} border="success" >

  <Card.Body>
  <Card.Img src="https://m.media-amazon.com/images/I/71UAlhh8w1L._AC_SL1500_.jpg"  />
    <Card.Title className="title-text">APPLE 2020 Macbook Air M1 - (8 GB/512 GB SSD/Mac OS Big Sur)</Card.Title>
     <Card.Text>
          <Icon icon="bx:rupee" />1,08,000
    </Card.Text> 
    <button className="cart-button" title="ADD TO CART" href="/cart"><Icon icon="dashicons:cart" /> </button>
    <button  className="cart-button" title="ADD TO WISHLIST" href="/wishlist"><Icon icon="bxs:shopping-bag" /> </button>
  </Card.Body>
 
</Card>
</div>
<div className="col-md-3 lap-2-detail">
  <Card style={{width:"14rem"}} border="success" >
  <Card.Body>
  <Card.Img src="https://www.hp.com/content/dam/sites/worldwide/gaming/laptops/pavilion-15/pavilion-15.jpg"  />
    <NavLink  to ="./description1" className="title-text">HP Ryzen 5 Hexa Core - (8 GB/512 GB SSD/Windows 11 Home)</NavLink>
     <Card.Text>
          <Icon icon="bx:rupee" />45,000
    </Card.Text> 
    <span>   
       <NavLink to="./laptop" className="cart-button" onClick={this.change_value_of_cart}  title="ADD TO CART"> <Icon icon="dashicons:cart"/></NavLink>
       </span>
<span>
  <button  className="cart-button"onClick={this.change_value_of_cart} title="ADD TO WISHLIST" href="/wishlist"><Icon icon="bxs:shopping-bag" /> </button> 
    </span>
  </Card.Body>
 
</Card>
</div>

</div>
      
            </> );
    }
}


export default Laptop;