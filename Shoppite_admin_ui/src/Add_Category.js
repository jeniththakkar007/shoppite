import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import * as Endpoint from './End_point';
 export const Add_Category=()=>{
	let iconList=[{id:"simple-icons:homeassistant",value:"Home"},
	{id:"map:electrician",value:"Electronics"},
	{id:"fluent:food-grains-24-filled",value:"foods"},
	{id:"ic:round-kitchen",value:"kitchen"},
	{id:"mdi:face-woman-shimmer",value:"Beauty Product"},
	{id:"map:clothing-store",value:"Clothes"},
	{id:"file-icons:ring",value:"Jwellary"},
	{id:"emojione-monotone:high-heeled-shoe",value:"Footwear"},
	{id:"bi:bag-plus-fill",value:"Other"}];
	const navigate = useNavigate();
	// Post-call for addCategory
	const PostCategory = () => {
		(async () => {
			// POST request using fetch with async/await
			const requestCOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					"org_id": 1,
					"category_code": document.getElementById('c_code').value,
					"category_name": document.getElementById('c_name').value,
					"category_description": document.getElementById('c_desc').value,
					"category_image": document.getElementById('ctg_type').value
				}
				  )
			};
			const responseC = await fetch(Endpoint.CATEGORYADD, requestCOptions).then(navigate('/category', {replace: true}));

			// const dataU = await responseV.json();
			// myAlertTop();
			
		})();
	  }
	useEffect(()=>{
		//pic();
	   },[])
	   // selected pic show on selected location
	 function pic() {
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
								Add New Category
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Category Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="c_name"/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Category Description</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="c_desc"/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Category Code</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="c_code" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Category Type</h6>
								</div>
								<div class="col-sm-9 text-secondary">
								<select class="form-select" id="ctg_type"  aria-label="Default select example">
									{iconList.map((icon)=>(<>
										<option value={icon.id}>{icon.value}</option>
										</>
									))}
								</select>
								</div>
							</div>
				
						</div>
                        <div class="col-sm-9 text-secondary" style={{"marginBottom":"1%"}}>
									<button type="button" class="btn btn-primary last_btn" onClick={PostCategory}>Add Category</button> 
								</div> 
					</div>
        </>
    )
}