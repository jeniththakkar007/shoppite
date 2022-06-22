import React, { useEffect } from "react";
import { Icon } from '@iconify/react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
 export const Add_Subcategory=()=>{
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
								Add New Subcategory
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
									<h6 class="mb-0"> Subcategory Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Subcategory Description</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Subcategory Code</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" />
								</div>
							</div>
						
							<div class=" Logo">
					<div class="card card_profile">
						<div class="card-body ">
						<div className="djs">
								 Upload Subcategory Picture
							</div>
                            <div className="row mb-3">
                                <div className="col-sm-3">
                            <input type="file" id="uploadImage" name="termek_file" class="file_input" multiple/><Tooltip title="Size Must be 223 x 240 px">
      <IconButton style={{"fontSize":"inherit"}}>
      <Icon icon="bi:question-diamond-fill" />
      </IconButton>
    </Tooltip>
                            </div>
                            <div className="col-sm-9">
<div id="result" class="uploadPreview">
    </div>
    </div>
    </div>
  

                            
 
							
							</div>
							</div>
							</div>
						</div>
                        <div class="col-sm-9 text-secondary" style={{"marginBottom":"1%"}}>
									<input type="button" class="btn btn-primary last_btn" value="Add Subcategory "/>
								</div> 
					</div>
        </>
    )
}