    import React, { useState, useEffect } from "react";
    // import "./styles.css";

    export default function Newfile() {
    const [mounted, setMounted] = useState(false)

    if(!mounted){
    
        console.log("before Render");
    }

    useEffect(() =>{
        setMounted(true)
    })

    return (
        <div className="App">
            <h1>something

            </h1>
        {console.log("after render")}
        </div>
    );
    }