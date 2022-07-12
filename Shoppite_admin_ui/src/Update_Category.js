import React, { useEffect, useState  } from "react";
import { Icon } from '@iconify/react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import * as Endpoint from './End_point';
import { NavLink, useLocation,useNavigate } from "react-router-dom";
 export const Update_Category=()=>{
	let location = useLocation();
	const navigate = useNavigate();
	const [category, setcategoryList]= useState([]);
  useEffect(() =>{
            
    fetchcategoryinfo();
    
  },[1,1]);
  console.log(location.state.category_id);
	async function fetchcategoryinfo() {
		try{
		const response = await fetch(Endpoint.GETCATEGORYBYID+"/"+location.state.category_id);
		const json = await response.json();
		// setcategoryList(json);
		setcategorydata(json);
		}
		catch(err) {
		  throw err;
		  console.log(err);
		}
	  }
	  function setcategorydata(ui)
	  { 
		document.getElementById('ctg_name').value=ui[0].category_name;
		document.getElementById('ctg_code').value=ui[0].category_code;
		document.getElementById('ctg_desc').value=ui[0].category_description;
		
	  }
	


	const fetchCartUpdateQuantity = async(aa,bb,cc,dd)=>{
		await fetch(Endpoint.UPDATECATEGORY+"/"+location.state.category_id+"/"+1+"/"+aa+"/"+bb+"/"+cc+"/"+"update_path")
		// .then(uwl => uwl.json())
		.then(navigate('/category'));
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
									<input type="text" class="form-control" id="ctg_name"/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Category Description</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="ctg_desc"/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Category Code</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" id="ctg_code" />
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
									<button type="button" class="btn btn-primary last_btn"  onClick={()=>fetchCartUpdateQuantity(
									document.getElementById('ctg_code').value,
									document.getElementById('ctg_name').value,
									document.getElementById('ctg_desc').value,
									document.getElementById('uploadImage').value)}>Update Category</button>
								</div> 
					</div>
        </>
    )
}