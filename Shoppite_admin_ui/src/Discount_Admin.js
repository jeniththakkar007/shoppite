import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const Discount = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setendDate] = useState(new Date());
	return (
		<>
			<div class="row profile ">
				<div class=" vendor">
					<div class="card card_profile">
						<div class="card-body best_row_css">
							<div className="djs">
								Discount Product
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Select Category</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<select class="form-select" aria-label="Default select example">
										<option selected>Category</option>
										<option value="1">Home Decore</option>
										<option value="2">Electronic</option>
										<option value="3">Grocery</option>
										<option value="4">Clothing</option>
										<option value="5">Beauty Products</option>
									</select>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0"> Select Subcategory </h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<select class="form-select" aria-label="Default select example">
										<option selected>Subcategory</option>
										<option value="1">Laptop</option>
										<option value="2">Mobile</option>
										<option value="3">Headphone</option>
										<option value="4">Kitchen Product</option>
										<option value="5">Speaker</option>
									</select>
								</div>
							</div>

							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Select Product </h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<select class="form-select" aria-label="Default select example">
										<option selected>Subcategory</option>
										<option value="1">Laptop</option>
										<option value="2">Mobile</option>
										<option value="3">Headphone</option>
										<option value="4">Kitchen Product</option>
										<option value="5">Speaker</option>
									</select>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3 cat_search">
									<h6 class="mb-0">Discount (In %)</h6>
								</div>
								<div class="col-sm-9  text-secondary">
									<input type="text" class="form-control" />
								</div>

							</div>
							<div class="row date_!" style={{ "display": "flex" }}>
								<div class="col-sm-6 cat_search date">StartDate
									<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
								</div>
								<div class="col-sm-6 date  cat_search ">
									EndDate
									<DatePicker selected={endDate} onChange={(date) => setendDate(date)} />
								</div>

							</div>
							<div class="col-sm-9 text-secondary" style={{ "marginBottom": "1%" }}>
								<NavLink to="./demo"><input type="button" class="btn btn-primary last_btn" value="Select " /></NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}