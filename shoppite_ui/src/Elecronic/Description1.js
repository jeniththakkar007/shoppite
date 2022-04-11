import React from "react";
import { Icon } from '@iconify/react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BallotIcon from '@mui/icons-material/Ballot';
import './Description1.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=<RemoveIcon />;
 
class Description1 extends React.Component{
    result1()
{
    a++;

if (a%2==0) {
    document.getElementById("icon-chnge1").innerText="+";
    document.getElementById("result-1").style.display ="none";

    
} else {
    document.getElementById("icon-chnge1").innerText="-";
    document.getElementById("result-1").style.display ="block";
    
}
}
result2()
{
    b++;

if (b%2==0) {
    document.getElementById("icon-chnge2").innerText="+";
    document.getElementById("result-2").style.display ="none";
    
} else {
    document.getElementById("icon-chnge2").innerText="-";
    document.getElementById("result-2").style.display ="block";
    
}
}
result3()
{
    c++;

if (c%2==0) {
    document.getElementById("icon-chnge3").innerText="+";
    document.getElementById("result-3").style.display ="none";
    
} else {
    document.getElementById("icon-chnge3").innerText="-";
    document.getElementById("result-3").style.display ="block";
    
}
}
result4()

{
    d++;

if (d%2==0) {
    document.getElementById("icon-chnge4").innerText="+";
    document.getElementById("result-4").style.display ="none";
    
} else {
    document.getElementById("icon-chnge4").innerText="-";
    document.getElementById("result-4").style.display ="block";
    
}
}
result5()
{
    e++;

if (e%2==0) {
    document.getElementById("icon-chnge5").innerText="+";
    document.getElementById("result-5").style.display ="none";
    
} else {
    document.getElementById("icon-chnge5").innerText="-";
    document.getElementById("result-5").style.display ="block";
    
}
}
    render(){
    return(
        <>
        <div className="row  big-img" >
            <div className="col-md-5 ">
                <span>
                <img src="https://rukminim1.flixcart.com/image/416/416/kwdv3bk0/computer/r/m/c/15-ec2145ax-gaming-laptop-hp-original-imag92vp9cznphgg.jpeg?q=70" /></span>
                <div className="button-div">
                <button  className="button2"> <Icon icon="dashicons:cart"/>ADD TO CART</button>
                <button className="button2"> <Icon icon="bxs:shopping-bag" />BUY NOW</button>
            </div>
            <h5><u className="name-of-product">Rating</u></h5>
<div class="rate " >
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
            
            </div>
            <div  className="col-md-7 details">
<div>
<span><FavoriteBorderIcon/></span>
<h3 className="name-of-product">HP Ryzen 5 Hexa Core - (8 GB/512 GB SSD/Windows 11 Home)</h3>
<h4 className="name-of-product"><b><Icon icon="bx:rupee" />45,000 </b></h4><s className="name-value-of-s">55,000</s><p className="delivery">Free Delivery</p>
<h4 className="name-of-product"> <BallotIcon/> Specifications</h4>
{/* GENREL */}
<table  >
<h5 ><u  className="name-of-product   topic" >General <button className="button-add-cart chnge-icon"  id="icon-chnge1" onClick={this.result1} >+</button> </u></h5>
<div className="name-of-product " id="result-1" style={{display : "none"}} >
   <td className="specification" >
        <tr >Model Name</tr> 
        <tr>Series</tr>
        <tr>Type</tr>
        <tr>Colour</tr>
    
    </td>
    <td className="specification" >
       <tr>:-15s-fqwrs17</tr> 
        <tr>:-pavilion</tr>
        <tr>:-Gaming</tr>
        <tr>:-Black</tr>
      

    </td>
    </div>
</table>
{/* PROCCESPOR */}
<table  >
<h5 ><u className="name-of-product">Proccesor & Memory Features  <button  className="button-add-cart"  id="icon-chnge2"  onClick={this.result2} >+ </button></u></h5> 
<div className="name-of-product " id="result-2"  style={{display : "none"}}>
   <td className="specification">
        <tr >Proccesor Brand</tr> 
        <tr>Proccesor Name</tr>
        <tr>SSD</tr>
        <tr>SSD Capacity</tr>
        <tr>RAM</tr>
        <tr>Cache</tr>
    
    </td>
    <td className="specification" >
       <tr>:-AMD</tr> 
        <tr>:-Ryzen 5 Hexa Core</tr>
        <tr>:-Yes</tr>
        <tr>:-512 GB</tr>
        <tr>:-8 GB</tr>
        <tr>:-16 GB</tr>
      

    </td>
    </div>
</table>
{/* os */}
<table  >
<h5 ><u className="name-of-product">Operating System  <button  className="button-add-cart"   id="icon-chnge3" onClick={this.result3} >+ </button> </u></h5> 
<div className="name-of-product" id="result-3"  style={{display : "none"}} >
   <td className="specification">
        <tr >OS Architechture</tr> 
        <tr>Operating System</tr>
    
    </td>
    <td className="specification" >
       <tr>:-64 bit</tr> 
        <tr>:-Window 11 Home</tr>
    </td>
    </div>
</table>
{/* port */}
<table  >
<h5 ><u className="name-of-product">Port & Slot Features <button className="button-add-cart"   id="icon-chnge4"  onClick={this.result4} >+ </button></u></h5> 
<div className="name-of-product" id="result-4"  style={{display : "none"}} >
   <td className="specification">
        <tr >MIC-IN</tr> 
        <tr>USB Port</tr>
    
    </td>
    <td className="specification" >
       <tr>:-Yes</tr> 
        <tr>:-1 X Super Speed USB Type A,B,C</tr>
    </td>
    </div>
</table>
{/* Display */}
<table  >
<h5 ><u className="name-of-product">Display <button  className="button-add-cart"  id="icon-chnge5"  onClick={this.result5} >+ </button></u></h5> 
<div className="name-of-product" id="result-5"  style={{display : "none"}}
 >
   <td className="specification">
        <tr >Touch-screen</tr> 
        <tr>Screen Size</tr>
        <tr>Screen Type</tr>
    
    
    </td>
    <td className="specification" >
       <tr>:-No</tr> 
        <tr>:-39.62cm(15.6 inch)</tr>
        <tr>:-Full HD</tr>
    </td>
    </div>
</table>


</div>
<div>
    suggestion
</div>
              
            </div>
            </div>
        </>
    );}
}
export default Description1;