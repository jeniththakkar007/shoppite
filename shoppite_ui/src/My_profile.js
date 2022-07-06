import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './My_profile.css';
import * as Endpoint from './End_point';
export const My_profile=()=>{
    const [userinfoData, setuserinfoData]= useState([]);
    useEffect(() =>{
      
        // fetchcartList();
        fetchuserprofile();
        
      },[1,1]);

      const fetchuserprofile = async() =>{
        await fetch(Endpoint.USERINFO+"/"+localStorage.getItem('org_id') +"/"+ localStorage.getItem('id'))
        .then(ui => ui.json())
        .then((userInfo) => setuserinfoData(userInfo));
      }
      console.log(userinfoData[0].f_name);
    return(
        <>
        <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src={window.location.origin + '/girl_profile.png'}/><span>Yesha Mehta</span><span class="text-black-50">yesha.mehta@ashokinfotech.in</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name"/></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="Mehta" placeholder="surname"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value="9726323302"/></div>
                    <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" value="A/703 Antilia"/></div>
                    <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" value="Nirnaynagar"/></div>
                    <div class="col-md-12"><label class="labels">Pincode</label><input type="text" class="form-control" placeholder="enter address line 2" value="382481"/></div>
                    <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter address line 2" value="Gujarat"/></div>
                    <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="enter address line 2" value="Nirnaynagar"/></div>
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value="yesha.mehta@ashokinfotech.in"/></div>
                    {/* <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value=""/></div> */}
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="India"/></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="Gujarat" placeholder="state"/></div>
                </div>
                <div class="mt-5 text-center">  <NavLink to="../" className="submit_btn"><button type="button" class="btn btn-outline-dark">Submit</button></NavLink>
</div>
            </div>
        </div>
        {/* <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div>
                <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value=""/></div> 
                <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""/></div>
            </div>
        
        </div> */}
    </div>
</div>
        
        </>
    )
}