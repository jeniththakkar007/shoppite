import React, { useEffect,useState } from "react";
import { Icon } from '@iconify/react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import * as Endpoint from './End_point';
 export const Add_Subcategory=()=>{
	const [category, setcategoryList]= useState([]);
	useEffect(() =>{
			  
	  fetchCategoryList();
	  
	},[1,1]);
	const fetchCategoryList = async() => {
	  await fetch(Endpoint.GETCATEGORY+"/"+1)
	  .then(cl => cl.json())
	  .then((categories) => setcategoryList(categories));  
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
	  const PostSubcategory = () => {
            
		(async () => {
			// POST request using fetch with async/await
			const requestCOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					"id": 0,
					"org_id": 1,
					"category_id": document.getElementById('ctg_id').value,
					"sub_ctg_name": document.getElementById('sub_ctg_name').value,
					"sub_ctg_description": document.getElementById('sub_ctg_description').value,
					"sub_ctg_code": document.getElementById('sub_ctg_code').value,
					"sub_ctg_image": document.getElementById('uploadImage').value
				}
				  )
			};
			const responseC = await fetch(Endpoint.SUBCATEGORYADD, requestCOptions);
			// const dataU = await responseV.json();
			// myAlertTop();
			
		})();
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
								<select class="form-select" id="ctg_id" aria-label="Default select example">
								<option>Category</option>
									{category.map((categories)=>(<>
										<option value={categories.id}>{categories.category_name}</option>
										</>
									))}
</select>
								</div>
							</div>
						
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Subcategory Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="sub_ctg_name" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Subcategory Description</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="sub_ctg_description" />
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Subcategory Code</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="sub_ctg_code" />
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
									<button type="button" class="btn btn-primary last_btn" onClick={PostSubcategory}>Add Subcategory</button>
								</div> 
					</div>
        </>
    )
}