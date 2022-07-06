import React, { Component } from "react";
import { Icon } from '@iconify/react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import './Profile_Admin.css';
import * as Endpoint from './End_point';
 export const Profile_Admin=()=>{
	const PostVendor = () => {
            
		(async () => {
			// POST request using fetch with async/await
			const requestVOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					"org_name": document.getElementById('org_name').value,
					"org_logo": document.getElementById('uploadImage').value,
					"vender_name": document.getElementById('v_name').value,
					"v_email": document.getElementById('v_email').value,
					"v_phone": document.getElementById('v_phone').value,
					"v_mobile": document.getElementById('v_mobile').value,
					"state": document.getElementById('v_state').value,
					"city": document.getElementById('v_city').value,
					"pincode": document.getElementById('v_pincode').value,
					"org_address": document.getElementById('org_address').value,
					"org_description": document.getElementById('org_description').value,
					"v_bank_name": document.getElementById('v_bank_name').value,
					"v_account_number": document.getElementById('v_account_number').value,
					"v_ifsc_code": document.getElementById('v_ifsc_code').value,
					"v_bank_branch_name": document.getElementById('v_bank_branch_name').value,
					"v_upi_id": document.getElementById('v_upi_id').value,
					"v_id_proof": document.getElementById('myFile').value
				}
				  )
			};
			const responseV = await fetch(Endpoint.VENDORDATA, requestVOptions);
			// const dataU = await responseV.json();
			// myAlertTop();
			
		})();
	  }
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
									<input type="text" class="form-control" id="v_name" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Vendor's Email</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="v_email" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Vendor's Phone</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="v_phone" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Vendor's Mobile</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="v_mobile" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Vendor's Shop Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="org_name" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Vendor's Shop Address</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="org_address" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> State</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="v_state" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> City</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="v_city" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Pin Code</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="v_pincode" />
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
							
							<textarea id="org_description"  name=" Shop Description" className="text-area col-9" rows="5" cols="100" ></textarea>
							
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
									<input type="text" class="form-control" id="v_bank_name" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Account Number</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="v_account_number" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> IFSC Code</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="v_ifsc_code" />
								</div>
							</div><div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Branch Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="v_bank_branch_name" />
								</div>
							</div>

							
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">xxx@upi</span>
  </div>
  <input type="text" id="v_upi_id" class="form-control" placeholder="Upi Id" aria-label="Username" aria-describedby="basic-addon1"/>
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
  <input type="file" id="myFile" name="filename"  />

</form>
							
							</div>
							</div>
							</div>
							</div>
							<div class="col-sm-9 text-secondary">
									<button class="btn btn-primary last_btn" onClick={PostVendor}>Save Changes</button>
								</div>
				</div>
			</div>
	

        </>
    )

 }