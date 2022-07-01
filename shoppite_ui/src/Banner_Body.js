import React, { useEffect, useState } from "react";
import Banner_desk from "./Banner_desk";
import Body_desktop from "./Body_desktop";
import Footer from "./Footer";

export const Banner_Body = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleteds] = useState(undefined);


    useEffect(() => {
        setTimeout(() => {

            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => {
                    // console.log(json);
                    setData(json);
                    setLoading(true);

                    setTimeout(() => {
                        setCompleteds(true)

                    }, 1000);
                });
        }, 2000);
    }, []);
    console.log("befor token:-");
    var token = localStorage.getItem('token');
    console.log("token:-",token);
    return (
        <>
            {!completed ? (
                <>
                    {!loading ? (
                        <div className="row img_css" >

                            <div className="back-blur" >

                                <img src={window.location.origin + '/cart_loder.gif'} className="img_loader" />

                            </div>

                        </div>


                    ) : ''}
                </>
            ) : (


                <>
                    <Banner_desk />
                    <Body_desktop />
                    <Footer />

                </>

            )
            }


        </>
    )
}



