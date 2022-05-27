import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';

import './Deal.css';
import { NavLink } from "react-router-dom";
import Footer from "../Footer";

export const Deal = () => {
  const [data ,setData]=useState([]);
  const [loading ,setLoading]=useState(undefined);
  const [completed ,setCompleteds]=useState(undefined);


  useEffect(()=>{
   setTimeout(()=>{
       
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then((response) => response.json())
   .then((json) =>{ 
   // console.log(json);
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
                  
                <img src={window.location.origin + '/cart_loder.gif'}  className="img_loader"/>
              
                  </div>
               
                  </div>


          ):''}
              </>
            ):(

               
               <>

      <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6  col-sm-6 col-xs-12 col-12  deal">
          <img src={window.location.origin + '/deal_1630.gif'} className="deal_gif" />
        </div>

        <div className="col-md-6 col-xl-6 col-lg-6 col-sm-6 col-xs-12 col-12 deal">
          <img src={window.location.origin + '/deal_2.png'} className="deal_gif" />
        </div>
        <div class="card-group row women_page">
          {/* <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 deal_cards">
            <img src={window.location.origin + '/repro_102.png'} alt="" />
          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 deal_cards">
            <img src={window.location.origin + '/re_103.png'} alt="" />
          </div> */}
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 deal_cards">
            <img src={window.location.origin + '/103.png'} alt="" />

          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 deal_cards">
            <img src={window.location.origin + '/105.png'} alt="" />
          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 deal_cards">
            <img src={window.location.origin + '/repro_102.png'} alt="" />

          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-6 col-xs-6 col-6 deal_cards">
            <img src={window.location.origin + '/re_103.png'} alt="" />
          </div>
        </div>

        <div class="card-group row women">
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_1.png'} alt="" className="flipcard" />
            <NavLink to="./boys"><div class="card-body row ">
              <div className="col-12 compny_name">Trends</div>
              <div className="col-12 pro_name">Hat</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />799<s><Icon icon="fa6-solid:indian-rupee-sign" /></s>899</span></div>
              <div className="col-12 offer_price"></div>

            </div></NavLink>

          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_2.png'} alt="" className="flipcard" />
            <div class="card-body row ">
              <div className="col-12 compny_name">Boy Corner</div>
              <div className="col-12 pro_name">Custmized Purse</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 987</span></div>
              <div className="col-12 offer_price"></div>

            </div>
          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_3.png'} alt="" className="flipcard" />
            <div class="card-body row " >
              <div className="col-12 compny_name">Forest Essensional</div>
              <div className="col-12 pro_name">Boy's Perfume</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />999<s><Icon icon="fa6-solid:indian-rupee-sign" />1599  </s></span></div>
              <div className="col-12 offer_price">10% Off</div>

            </div>
          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_4.png'} alt="" className="flipcard" />
            <div class="card-body row " >
              <div className="col-12 compny_name">Mockup</div>
              <div className="col-12 pro_name">Custmized  Named Kitchen</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />899<s><Icon icon="fa6-solid:indian-rupee-sign" /> 999 </s></span></div>
              <div className="col-12 offer_price">2% Off</div>

            </div>
          </div> <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_5.png'} alt="" className="flipcard" />
            <div class="card-body row " >
              <div className="col-12 compny_name">The Messy Corner</div>
              <div className="col-12 pro_name">Side Pocket Bag </div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />1599<s><Icon icon="fa6-solid:indian-rupee-sign" /> 1799 </s></span></div>
              <div className="col-12 offer_price">5% Off</div>

            </div>
          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_6.png'} alt="" className="flipcard" />
            <div class="card-body row ">
              <div className="col-12 compny_name">TiTan</div>
              <div className="col-12 pro_name">Silver Watch</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />1999 </span></div>
              <div className="col-12 offer_price"></div>

            </div>
          </div>
        </div>
        <div class="card-group row women">
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_8.png'} alt="" className="flipcard" />
            <NavLink to="./shoes"><div class="card-body row ">
              <div className="col-12 compny_name">FootWear</div>
              <div className="col-12 pro_name">Shoes For Mens</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />1799<s><Icon icon="fa6-solid:indian-rupee-sign" /></s>1899</span></div>
              <div className="col-12 offer_price"></div>

            </div></NavLink>

          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_9.png'} alt="" className="flipcard" />
            <div class="card-body row ">
              <div className="col-12 compny_name">Boy Corner</div>
              <div className="col-12 pro_name">Sandles For Mens</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 1987</span></div>
              <div className="col-12 offer_price"></div>

            </div>
          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_10.png'} alt="" className="flipcard" />
            <div class="card-body row " >
              <div className="col-12 compny_name">Forest Wear</div>
              <div className="col-12 pro_name">Boy's FlipFlop</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />999<s><Icon icon="fa6-solid:indian-rupee-sign" />1599  </s></span></div>
              <div className="col-12 offer_price">10% Off</div>

            </div>
          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_11.png'} alt="" className="flipcard" />
            <div class="card-body row " >
              <div className="col-12 compny_name">FootWear </div>
              <div className="col-12 pro_name">Shoes For Mens</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />1399<s><Icon icon="fa6-solid:indian-rupee-sign" /> 1999 </s></span></div>
              <div className="col-12 offer_price">20% Off</div>

            </div>
          </div> <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_12.png'} alt="" className="flipcard" />
            <div class="card-body row " >
              <div className="col-12 compny_name">The Messy Corner</div>
              <div className="col-12 pro_name">Causal Wear</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />1599<s><Icon icon="fa6-solid:indian-rupee-sign" /> 1799 </s></span></div>
              <div className="col-12 offer_price">5% Off</div>

            </div>
          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_13.png'} alt="" className="flipcard" />
            <div class="card-body row ">
              <div className="col-12 compny_name">FootWear</div>
              <div className="col-12 pro_name">Causal Wear</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />1999 </span></div>
              <div className="col-12 offer_price"></div>

            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-xs-12 col-12">
          <img src={window.location.origin + '/boy_try_1.png'} alt="dsd" className="redeal_3"/>
        </div>
        <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-xs-12 col-12">
          <img src={window.location.origin + '/boy_try_2.png'} alt="dsd" className="redeal_3"/>
        </div>
        <div class="card-group row women">
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_14.png'} alt="" className="flipcard" />
            <NavLink to="./boys"><div class="card-body row ">
              <div className="col-12 compny_name">SofaPatato</div>
              <div className="col-12 pro_name">Water Reed moon Basket</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />258</span></div>
              <div className="col-12 offer_price"></div>

            </div></NavLink>

          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_15.png'} alt="" className="flipcard" />
            <div class="card-body row ">
              <div className="col-12 compny_name">FNP</div>
              <div className="col-12 pro_name">Leafy Lucky Plants Combo</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" /> 599</span></div>
              <div className="col-12 offer_price"></div>

            </div>
          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_16.png'} alt="" className="flipcard" />
            <div class="card-body row " >
              <div className="col-12 compny_name">Meta Fresh</div>
              <div className="col-12 pro_name"> Dream Catcher White Color</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />499</span></div>
              {/* <div className="col-12 offer_price">10% Off</div> */}

            </div>
          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_17.png'} alt="" className="flipcard" />
            <div class="card-body row " >
              <div className="col-12 compny_name">Alibaba </div>
              <div className="col-12 pro_name">Nordic  Small  Tea Table</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />1399</span></div>
              {/* <div className="col-12 offer_price">20% Off</div> */}

            </div>
          </div> <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_18.png'} alt="" className="flipcard" />
            <div class="card-body row " >
              <div className="col-12 compny_name">Decorrizz</div>
              <div className="col-12 pro_name">Designer Wall Mirror</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />4,150</span></div>
              {/* <div className="col-12 offer_price">5% Off</div> */}

            </div>
          </div>
          <div class="card col-md-12 col-xl-12 col-lg-12 col-sm-4 col-xs-4 col-6 ">
            <img src={window.location.origin + '/boy_19.png'} alt="" className="flipcard" />
            <div class="card-body row ">
              <div className="col-12 compny_name">Designer Home</div>
              <div className="col-12 pro_name"> Simple Terrarium</div>
              <div className="col-12 price"><span><Icon icon="fa6-solid:indian-rupee-sign" />1,400 </span></div>
              <div className="col-12 offer_price"></div>

            </div>
          </div>
        </div>
        





      </div>
      <Footer/>
    </>
               
            )
        }
         
         
        </>
    )
}
