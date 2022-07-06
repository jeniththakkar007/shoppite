import React, { useEffect } from "react";
import { Icon } from '@iconify/react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
 export const Update_Category=()=>{
	const fetchCartUpdateQuantity = async(item_id,setQuantity)=>{
		await fetch(Endpoint.UPDATECARTQUANTITY+"/"+localStorage.getItem('org_id')+"/"+localStorage.getItem('id')+"/"+item_id+"/"+setQuantity+"/")
		.then(uwl => uwl.json())
		.then((uwish) => setcartList(uwish));
	  }
	useEffect(()=>{
		pic();
	   },[])
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
								Update New Category
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Category Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Category Description</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Category Code</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class=" Logo">
					<div class="card card_profile">
						<div class="card-body ">
						<div className="djs">
								 Upload Category Picture
							</div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                            <input type="file" id="uploadImage" name="termek_file" class="file_input" multiple/><Tooltip title="Size Must be 223 x 240 px">
      <IconButton style={{"fontSize":"inherit"}}>
      <Icon icon="bi:question-diamond-fill" />
      </IconButton>
    </Tooltip>
                            </div>
  
    </div>
  

                            
 
							
							</div>
							</div>
							</div>
						</div>
                        <div class="col-sm-9 text-secondary" style={{"marginBottom":"1%"}}>
									<input type="button" class="btn btn-primary last_btn" value="Update Category "/>
								</div> 
					</div>
        </>
    )
}