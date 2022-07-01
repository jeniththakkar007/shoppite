import React from "react";
import { Icon } from '@iconify/react';

 export const Home_design=()=>{
    return(
        <>

<div>
<div class="card card_profile">
						<div class="card-body best_row_css">
						<div className="djs">
								Home Page Design
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Category</h6>
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
									<h6 class="mb-0">Select Product </h6>
								</div>
								<div class="col-sm-9 text-secondary">
								<select class="form-select" aria-label="Default select example">
  <option selected>Products</option>
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
									<h6 class="mb-0">Choose Home Page Design  </h6>
								</div>
								<div class="col-sm-9 text-secondary">
								<select class="form-select" aria-label="Default select example">
  <option selected>Home Design</option>
  <option value="1">Slider Cards (Any 12)</option>
  <option value="2">Cards (Any 6)</option>

</select>
								</div>
							</div>
                            <div class="card-body ">
						<div className="djs">
								 Upload Banner
							</div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                            <input type="file" id="uploadImage" name="termek_file" class="file_input" multiple/>
                            {/* <Tooltip title="Choose max 3 Banner. Sixe must be 1300 x 300px">
      <IconButton style={{"fontSize":"inherit"}}>
      <Icon icon="bi:question-diamond-fill" />
      </IconButton>
    </Tooltip> */}
                            </div>
                            <div className="col-sm-9">
<div id="result" class="uploadPreview">
    </div>
    </div>
    </div>
  
<div class="col-sm-9 text-secondary" style={{"marginBottom":"1%"}}>
									<input type="button" class="btn btn-primary last_btn" value="Add Banner " />
								</div> 
                            
 
							
							</div>
						</div>
					</div>
    </div>
        </>

    )
}