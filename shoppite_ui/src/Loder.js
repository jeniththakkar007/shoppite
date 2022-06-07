import React, { useEffect, useState } from "react";

export const Loder = () => {

    const [data ,setData]=useState([]);
    const [loading ,setLoading]=useState(undefined);
    const [completed ,setCompleteds]=useState(undefined);
    useEffect(()=>{
        setTimeout(()=>{
            
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) =>{ 
        console.log(json);
        setData(json);
        setLoading(true);
    
        setTimeout(() => {
            setCompleteds(true)
            
        }, 1000);
       });
    },2000);
       },[]);
       return (
        <>
        
        { !completed ? ( 
          <>
          {! loading ? ( 
              <div className="row img_css" >
                  
                  <div  className="back-blur" >
                  {console.log("loder page render")}
                <img src={window.location.origin + '/cart_loder.gif'}  className="img_loader"/>
              
                  </div>
               
                  </div>


          ):''}
              </>
            ):(

               
               <>


                </>
               
            )
        }
         
         
        </>
    )
} 
