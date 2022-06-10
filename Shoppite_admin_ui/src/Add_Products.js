import React from "react";
import { Icon } from '@iconify/react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
 export const Add_Products=()=>{
	window.onload = function() {
        if (window.File && window.FileList && window.FileReader) {
          var filesInput = document.getElementById("uploadImage");
          filesInput.addEventListener("change", function(event) {
            var files = event.target.files;
            var output = document.getElementById("result");
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.type.match('image'))
                continue;
              var picReader = new FileReader();
              picReader.addEventListener("load", function(event) {
                var picFile = event.target;
                var div = document.createElement("div");
                div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" +
                  "title='" + picFile.name + "'/>";
                output.insertBefore(div, null);
              });        
              picReader.readAsDataURL(file);
            }
      
          });
        }
      }
    return(
        <>
	<div class="card card_profile">
						<div class="card-body best_row_css">
							<div className="djs">
								Add New Products
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Select Category </h6>
								</div>
								<div class="col-sm-9 text-secondary">
								<select class="form-select" aria-label="Default select example">
  <option selected>Category</option>
  <option value="1">Home Decore</option>
  <option value="2">Electronic</option>
  <option value="3">Grocery</option>
  <option value="4">Clothing</option>
  <option value="5">Beauty Products</option>
</select>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Select Subcategory </h6>
								</div>
								<div class="col-sm-9 text-secondary">
								<select class="form-select" aria-label="Default select example">
  <option selected>Subcategory</option>
  <option value="1">Laptop</option>
  <option value="2">Mobile</option>
  <option value="3">Headphone</option>
  <option value="4">Kitchen Product</option>
  <option value="5">Speaker</option>
</select>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Product Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
                            <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Product Description</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Product Company Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
                            <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Product Code</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
                            <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Product Price</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Product Discount</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
                            <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Product Stock</h6>
								</div>
                                <div className="col-sm-9 radio_btn">
                                <div class="form-check ">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
 In Stock
  </label>
</div>
<div class="form-check ">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label class="form-check-label" for="flexRadioDefault2">
 Out Of Stock
  </label>
</div>
</div>
</div>

<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Product Quantity</h6>
								</div>
								<div class="col-sm-9 text-secondary " style={{"justifyContent":"flex-end"}}>
									

  
  <input type="number" id="points" name="points" step="1"/>
  

								</div>
							</div>
                            <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Available</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									
                                <div class="form-check form-switch toggle" style={{"width":"100%"}}>
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault" >Yes</label>
</div>
								</div>
							</div>
						
							<div class=" Logo">
					<div class="card card_profile">
						<div class="card-body ">
						<div className="djs">
								 Upload Product Picture
							</div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                            <input type="file" id="uploadImage" name="termek_file" class="file_input" multiple/><Tooltip title="Size Must be 223 x 240 px">
      <IconButton style={{"fontSize":"inherit"}}>
      <Icon icon="bi:question-diamond-fill"  />
      </IconButton>
    </Tooltip>
                            </div>
  
    </div>
  

                            
 
							
							</div>
							</div>
							</div>
						</div>
                        <div class="col-sm-9 text-secondary" style={{"marginBottom":"1%"}}>
									<input type="button" class="btn btn-primary last_btn" value="Add Products "/>
								</div> 
					</div>
        </>
    )
}