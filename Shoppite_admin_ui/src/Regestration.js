import React from "react";
import './Reg.css';
 export const Regestration=()=>{
    return(
        <>
       



<div class="main main_reg">  	
    <input className="input_reg" type="checkbox" id="chk" aria-hidden="true"/>

        <div class="signup">
          
                <label  className="lable_reg" for="chk" aria-hidden="true">Sign up</label>
                <input className="input_reg" type="text" name="txt" placeholder="User name" required=""/>
                <input className="input_reg" type="email" name="email" placeholder="Email" required=""/>
                <input  className="input_reg" type="password" name="pswd" placeholder="Password" required=""/>
                <button className="butn_reg">Sign up</button>
           
        </div>

        <div class="login">
         
                <label className="lable_reg" for="chk" aria-hidden="true">Login</label>
                <input className="input_reg" type="email" name="email" placeholder="Email" required=""/>
                <input  className="input_reg" type="password" name="pswd" placeholder="Password" required=""/>
                <button className="butn_reg" >Login</button>
        
        </div>
</div>
        
        </>
    )
}