import React from "react";
import  './MyOrder.css';
 export const MyOrder=()=>{
    return(
        <>
        <div class="container-fluid my-5  d-flex  justify-content-center">
        <div class="card card-12 " style={{"width" :"70%"}}>
            <div class="card-header bg-white">
                <div class="media flex-sm-row flex-column-reverse justify-content-between  ">
                    <div class="col my-auto"> <h4 class="mb-0">Your Order History Dear<span class="change-color"> Name</span> !</h4> </div>
                    {/* <div class="col-auto text-center  my-auto pl-0 pt-sm-4"> <img class="img-fluid my-auto align-items-center mb-0 pt-3"  src="https://i.imgur.com/7q7gIzR.png" width="115" height="115"/> <p class="mb-4 pt-0 Glasses">Glasses For Everyone</p>  </div> */}
                </div>
            </div>
            <div class="card-body">
                <div class="row justify-content-between mb-3">
                    <div class="col-auto"> <h6 class="color-1 mb-0 change-color"></h6> </div>
                    <div class="col-auto  "> <small className="small_cls">Order Number : 1KAU9-84UIL</small> </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card card-22">
                            <div class="card-body">
                                <div class="media">
                                    <div class="sq align-self-center "> <img class="img-fluid  my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0" src="https://i.imgur.com/RJOW4BL.jpg" width="135" height="135" /> </div>
                                    <div class="media-body my-auto text-right">
                                        <div class="row  my-auto flex-column flex-md-row">
                                            {/* <div class="col my-auto"> <h6 class="mb-0"> Jack Jacs</h6>  </div> */}
                                            <div class="col my-auto"> <small className="small_cls">Golden Rim </small></div>
                                            {/* <div class="col my-auto"> <small className="small_cls">Size : M</small></div> */}
                                            <div class="col my-auto"> <small className="small_cls">Qty : 1</small></div>
                                            <div class="col my-auto"><h6 class="mb-0">&#8377;3,600.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-3 hr_order"/>
                                <div class="row">
                                    <div class="col-md-3 mb-3"> <small className="small_cls"> Track Order <span><i class=" ml-2 fa fa-refresh"  aria-hidden="true"></i></span></small> </div>
                                    <div class="col mt-auto">
                                        <div class="progress my-auto"> <div class="progress-bar progress-bar  rounded_plus" style={{"width": "62%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0"  aria-valuemax="100"></div> </div>
                                        <div class="media row justify-content-between ">
                                            <div class="col-auto text-right"><span> <small  class="text-right mr-sm-2 small_cls"></small> <i class="fa fa-circle active"></i> </span></div>
                                            <div class="flex-col"> <span> <small class="text-right mr-sm-2 small_cls">Out for delivary</small><i class="fa fa-circle active"></i></span></div>
                                            <div class="col-auto flex-col-auto"><small  class="text-right mr-sm-2 small_cls">Delivered</small><span> <i  class="fa fa-circle"></i></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <div class="card card-22">
                            <div class="card-body">
                                <div class="media">
                                    <div class="sq align-self-center "> <img class="img-fluid  my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0" src="https://i.imgur.com/fUWWpRS.jpg" width="135" height="135" /> </div>
                                    <div class="media-body my-auto text-right">
                                        <div class="row  my-auto flex-column flex-md-row">
                                            {/* <div class="col-auto my-auto "> <h6 class="mb-0"> Michel Mark</h6> </div> */}
                                            <div class="col my-auto  "> <small className="small_cls">Black Rim </small></div>
                                            {/* <div class="col my-auto  "> <small className="small_cls">Size : L</small></div> */}
                                            <div class="col my-auto  "> <small className="small_cls">Qty : 1</small></div>
                                            <div class="col my-auto ">  <h6 class="mb-0">&#8377;1,235.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-3 hr_order"/>
                                <div class="row ">
                                    <div class="col-md-3 mb-3">  <small className="small_cls"> Track Order <span><i class=" ml-2 fa fa-refresh" aria-hidden="true"></i></span></small> </div>
                                    <div class="col mt-auto">
                                        <div class="progress"><div class="progress-bar progress-bar  rounded_plus" style={{"width": "18%"}}  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> </div>
                                        <div class="media row justify-content-between ">
                                            <div class="col-auto text-right"><span> <small  class="text-right mr-sm-2 small_cls"></small> <i class="fa fa-circle active"></i> </span></div>
                                            <div class="flex-col"> <span> <small class="text-right mr-sm-2 small_cls">Out for delivary</small><i class="fa fa-circle"></i></span></div>
                                            <div class="col-auto flex-col-auto"><small class="text-right mr-sm-2 small_cls">Delivered</small><span> <i class="fa fa-circle"></i></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                    <div class="row justify-content-between">
                            <div class="flex-sm-col text-right col"><p class="mb-1"><b className="b_cls">Delivery Charges</b></p></div>
                            <div class="flex-sm-col col-auto"><p class="mb-1">Free</p></div>
                        </div>
                        <div class="row justify-content-between">
                            {/* <div class="col-auto"><p class="mb-1 text-dark"><b className="b_cls">Order Details</b></p></div> */}
                            <div class="flex-sm-col text-right col"> <p class="mb-1"><b>Total</b></p> </div>
                            <div class="flex-sm-col col-auto"> <p class="mb-1">&#8377;4,835</p> </div>
                        </div>
                        {/* <div class="row justify-content-between">
                            <div class="flex-sm-col text-right col"><p class="mb-1"> <b className="b_cls">Discount</b></p> </div>
                            <div class="flex-sm-col col-auto"><p class="mb-1">&#8377;150</p></div>
                        </div> */}
                        {/* <div class="row justify-content-between">
                            <div class="flex-sm-col text-right col"><p class="mb-1"><b className="b_cls">GST 18%</b></p></div>
                            <div class="flex-sm-col col-auto"><p class="mb-1">843</p></div>
                        </div> */}
                       
                    </div>
                </div>
                {/* <div class="row invoice ">
                    <div class="col" style={{"marginTop":"8rem"}}><p class="mb-1"> Invoice Number : 788152</p> */}
                    {/* <p class="mb-1">Invoice Date : 22 Dec,2019</p> */}
                    {/* <p class="mb-1">Recepits Voucher:18KU-62IIK</p> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
            {/* <div class="card-footer">
                <div class="jumbotron-fluid">
                    <div class="row justify-content-between ">
                        <div class="col-sm-auto col-auto my-auto"><img class="img-fluid my-auto align-self-center " src="https://i.imgur.com/7q7gIzR.png" width="115" height="115"/></div>
                        <div class="col-auto my-auto "><h2 class="mb-0 font-weight-bold h2_class">TOTAL PAID</h2></div>
                        <div class="col-auto my-auto ml-auto"><h1 class="display-3 ">&#8377; 5,528</h1></div>
                    </div>
                    <div class="row mb-3 mt-3 mt-md-0">
                        <div class="col-auto border-line"> <small class="text-white small_cls">PAN:AA02hDW7E</small></div>
                        <div class="col-auto border-line"> <small class="text-white small_cls">CIN:UMMC20PTC </small></div>
                        <div class="col-auto "><small class="text-white small_cls">GSTN:268FD07EXX </small> </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
        </>
    )
}