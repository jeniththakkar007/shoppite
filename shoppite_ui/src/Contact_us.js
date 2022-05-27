import React from "react";
import { NavLink } from "react-router-dom";
import './Contact_us.css';
import { Icon } from '@iconify/react';
export const Contact_us=()=>{
    return(
        <>

<section class="jumbotron text-center">
    <div class="container">
        <h1 >SHOPPITE CONTACT</h1>
    </div>
</section>
<div class="container">
    <div class="row">
        <div class="col">
            
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header bg-primary text-white"><Icon icon="fluent:chat-mail-20-filled" /> Contact us.
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required/>
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" id="message" rows="6" required></textarea>
                        </div>
                        <div class="mx-auto">
                        <button type="button" class="btn btn-outline-dark submit_btn"  style={{"background":"aliceBlue" ,"color":"black" ,"borderColor":"black"}}>Submit</button></div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-4">
            <div class="card bg-light mb-3">
                <div class="card-header bg-primary text-white " ><Icon icon="fa:address-card" /> Address</div>
                <div class="card-body">
                    <p>C/807 Titanium City Center ,</p>
                    <p>Satelite ,</p>
                    <p>Ahmedabad</p>
                    <p>Email : admin@ashokinfotech.in</p>
                    <p>Tel. +91 82004 08816</p>

                </div>

            </div>
        </div>
    </div>
</div>
        </>
    )
}