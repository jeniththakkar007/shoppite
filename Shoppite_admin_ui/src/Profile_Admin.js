import React, { Component } from "react";
import { Icon } from '@iconify/react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import './Profile_Admin.css'
 export const Profile_Admin=()=>{
    return(
        <>
       
		
			<div class="row profile ">
				<div class=" vendor">
					<div class="card card_profile">
						<div class="card-body best_row_css">
							<div className="djs">
								Vendor Details
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Vendor's Full Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Vendor's Email</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Vendor's Phone</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Vendor's Mobile</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Vendor's Shop Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Vendor's Shop Address</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> State</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> City</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Pin Code</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control " />
								</div>
							</div>
						
							<div class="row">
								<div class="col-sm-3"></div>
								
							</div>
						</div>
					</div>

					<div class=" Logo">
					<div class="card card_profile">
						<div class="card-body ">
						<div className="djs">
								 Upload Logo
							</div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                            <input type="file" id="uploadImage" name="termek_file" class="file_input" multiple/><Tooltip title="Size Must be 200 x 50 px">
      <IconButton style={{"fontSize":"inherit"}}>
      <Icon icon="bi:question-diamond-fill" />
      </IconButton>
    </Tooltip>
                            </div>
  
    </div>
  

                            
 
							
							</div>
							</div>
							</div>
							<div class=" Logo">
					<div class="card card_profile">
						<div class="card-body ">
						<div className="djs" style={{"marginBottom":"2%"}}>
							Shop Description
							</div>
							
							<textarea  name=" Shop Description" className="text-area col-9" rows="5" cols="100" ></textarea>
							
							</div>
							</div>
							</div>
							<div class=" Logo">
					<div class="card card_profile">
						<div class="card-body ">
						<div className="djs" style={{"marginBottom":"2%"}}>
Bank Details							</div>
<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Bank Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Account Number</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> IFSC Code</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div><div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Branch Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>

							
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">xxx@upi</span>
  </div>
  <input type="text" class="form-control" placeholder="Upi Id" aria-label="Username" aria-describedby="basic-addon1"/>
</div>			
				
							</div>
							</div>
							
					<div class=" Logo">
					<div class="card card_profile">
						<div class="card-body ">
						<div className="djs">
Upload ID Proof
							</div>
							
							<form action="/action_page.php" className="logo_choose">
  <input type="file" id="myFile" name="filename" />

</form>
							
							</div>
							</div>
							</div>
							</div>
							<div class="col-sm-9 text-secondary">
									<input type="button" class="btn btn-primary last_btn" value="Save Changes"/>
								</div>
				</div>
			</div>
	

        </>
    )

 }