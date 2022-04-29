import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import { getUser_by_id, updateuser } from "../services/customers.service";
import { adduser, getAllcity, getAllcountry, getAllrole, getAllstate } from "../services/customers.service";
import { render } from "@testing-library/react";
import ReactFormValidation from "react-form-input-validation";


class EditCustomer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            states: [],
            countries: [],
            cities: [],
            roles: [],
            param: "",
            fields: {
                user_name: "",
                f_name: "",
                l_name: "",
                email: "",
                password: "",
                phone_number: "",
                ad1: "",
                ad2: "",
                city: "",
                state: "",
                country: "",
                pincode: "",
                is_active: false,
                role: ""           
            },
            errors: {}
        };
        this.form = new ReactFormValidation(this, { locale: "en" });
        this.form.useRules({
            user_name: "required|username_available",
            f_name: "required",
            l_name: "required",
            email: "required|email",
            password: "required",
            phone_number: "required|numeric|digits_between:10,12",
            ad1: "required|max:20",
            ad2: "required|max:20",
            city: "required",
            state: "required",
            country: "required",
            pincode: "required",
            is_active: "required",
            role: "required"             
        });

        this.form.onformsubmit = (fields) => {
            console.log(fields);
            var data = new Object();
            data.user_name = document.getElementById('user-name').value;
            data.f_name = document.getElementById('f-name').value;
            data.l_name = document.getElementById('l-name').value;
            data.email = document.getElementById('email').value;
            data.password = document.getElementById('password').value;
            data.phone_number = document.getElementById('phone_number').value;
            data.address_1 = document.getElementById('ad1').value;
            data.address_2 = document.getElementById('ad2').value;
            data.city = document.getElementById('select-city').value;
            data.state = document.getElementById('select-state').value;
            data.country = document.getElementById('select-country').value;
            data.pincode = document.getElementById('pincode').value;
            if (document.getElementById('is_active').value) {
                data.is_active = 1;
            }
            else {
                data.is_active = 0;
            }
            data.role = document.getElementById('select-role').value;
            console.log(data);
            updateuser(this.state.param, data).then(window.location = "http://localhost:3000/customer/");

        }

        ReactFormValidation.registerAsync('username_available', function (username, attribute, req, passes) {
            setTimeout(() => {
                if (username === "foo")
                    passes(false, 'Username has already been taken.'); // if username is not available
                else
                    passes();
            }, 1000);
        });
        /* let messages = ReactFormValidation.getMessages('en');
        messages.required = 'Whoops, :attribute field is required.';
        ReactFormValidation.setMessages('en', messages);
        ReactFormValidation.useLang('en') */
    }

    componentWillMount() {
        this.getQueryStringParams(window.location.href);
        getAllstate().then(res => this.setState({ states: res.data }));
        getAllcountry().then(res => this.setState({ countries: res.data }));
        getAllcity().then(res => this.setState({ cities: res.data }));
        getAllrole().then(res => this.setState({ roles: res.data }));
        console.log(this.state.param);
    }

    getQueryStringParams = query => {
        return this.setState({ param: query.substring(query.lastIndexOf('/') + 1) });
    };
    componentDidMount() {
        console.log(this.state.param);
        getUser_by_id(this.state.param)
            .then(res => {
                console.log(res.data)
                this.state.fields.user_name=res.data.recordset[0].user_name;
                this.state.fields.f_name=res.data.recordset[0].f_name;
                this.state.fields.l_name=res.data.recordset[0].l_name;
                this.state.fields.email=res.data.recordset[0].email;
                this.state.fields.password=res.data.recordset[0].password;
                this.state.fields.phone_number=res.data.recordset[0].phone_number;
                this.state.fields.pincode=res.data.recordset[0].pincode;
                this.state.fields.ad1=res.data.recordset[0].address_1;
                this.state.fields.ad2=res.data.recordset[0].address_2;
                this.state.fields.country=res.data.recordset[0].country;
                this.state.fields.state=res.data.recordset[0].state;
                this.state.fields.city=res.data.recordset[0].city;

                // if (res.data.recordset[0].is_active) {
                //     this.state.fields.is_active= true;
                // }
                // else {
                //     this.state.fields.is_active= false;
                // }

                // document.getElementById("user-name").setAttribute("value", res.data.recordset[0].user_name);
                // document.getElementById("f-name").setAttribute("value", res.data.recordset[0].f_name);
                // document.getElementById("l-name").setAttribute("value", res.data.recordset[0].l_name);
                // document.getElementById("email").setAttribute("value", res.data.recordset[0].email);
                // document.getElementById("password").setAttribute("value", res.data.recordset[0].password);
                // document.getElementById("p-number").setAttribute("value", res.data.recordset[0].phone_number);
                // document.getElementById("pincode").setAttribute("value", res.data.recordset[0].pincode);
                // document.getElementById("ad1").innerText = res.data.recordset[0].address_1;
                // document.getElementById("ad2").innerText = res.data.recordset[0].address_2;
                // if (res.data.recordset[0].is_active) {
                //     document.getElementById("is-active").checked = true;
                // }
                // else {
                //     document.getElementById("is-active").checked = false;
                // }

                let element_s = document.getElementById('select-state');
                element_s.value = res.data.recordset[0].state;

                let element_c = document.getElementById('select-city');
                element_c.value = res.data.recordset[0].city;

                let element_cun = document.getElementById('select-country');
                element_cun.value = res.data.recordset[0].country;

                let element_r = document.getElementById('select-role');
                element_r.value = res.data.recordset[0].role;

            })
            .catch(err => {
                console.log(err.messeage)
            })
    }
    //      Save(){ 
    //         console.log("click is run")
    //        var data = new Object();
    //        data.user_name =  document.getElementById('user-name').value;
    //        data.f_name =  document.getElementById('f-name').value; 
    //        data.l_name =  document.getElementById('l-name').value;
    //        data.email =  document.getElementById('email').value;
    //        data.password =  document.getElementById('password').value; 
    //        data.phone_number =  document.getElementById('p-number').value;
    //        data.address_1 =  document.getElementById('ad1').value;
    //        data.address_2 =  document.getElementById('ad2').value;
    //        data.city =  document.getElementById('select-city').value; 
    //        data.state =  document.getElementById('select-state').value;
    //        data.country =  document.getElementById('select-country').value;
    //        data.pincode =  document.getElementById('pincode').value; 
    //       if(document.getElementById('is-active').value)
    //       {
    //        data.is_active = 1;
    //       }
    //       else
    //       {
    //        data.is_active = 0;
    //       }
    //        data.role =  document.getElementById('select-role').value;
    //        updateuser(this.state.param,data).then(window.location="http://localhost:3000/customer/");
    //    }


    render() {
        return (
            <>
                <div>
                    <div className="row head">
                        <div className="col-6">
                            <span className="title"><b>Add a new User</b> </span>
                        </div>
                    </div>
                    <Card style={{ width: '98%' }}>
                        <Card.Body>
                            <Card.Title><Icon icon="mdi:information-variant" color="black" /> User info </Card.Title>
                            <div className="container-fuild">
                                <Form className="myForm"
                                    noValidate
                                    autoComplete="off"
                                    onSubmit={this.form.handleSubmit}>
                                    {/* username */}
                                    <div className="row add-row">
                                        <div className="col-3 add-text">
                                            User Name <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </div>
                                        <div className="col-9">
                                            <Form.Control name="user_name"
                                                onBlur={this.form.handleBlurEvent}
                                                onChange={this.form.handleChangeEvent}
                                                value={this.state.fields.user_name}
                                                // To override the attribute name
                                                data-attribute-name="User Name"
                                                data-async
                                                type="text" placeholder="User name"
                                                id="user-name" className="category-name" />
                                            <label className="error">
                                                {this.state.errors.user_name
                                                    ? this.state.errors.user_name
                                                    : ""}
                                            </label>
                                        </div>
                                    </div>
                                    {/* F-name */}
                                    <div className="row add-row">
                                        <div className="col-3 add-text">
                                            First Name <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </div>
                                        <div className="col-9">
                                            <Form.Control name="f_name"
                                                onBlur={this.form.handleBlurEvent}
                                                onChange={this.form.handleChangeEvent}
                                                value={this.state.fields.f_name}
                                                // To override the attribute name
                                                data-attribute-name="First Name"
                                                data-async type="text" placeholder="First name" id="f-name" className="category-code" />
                                            <label className="error">
                                                {this.state.errors.f_name
                                                    ? this.state.errors.f_name
                                                    : ""}
                                            </label>
                                        </div>
                                    </div>
                                    {/* l-name  */}
                                    <div className="row add-row">
                                        <div className="col-3 add-text">
                                            Last Name <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </div>
                                        <div className="col-9">
                                            <Form.Control name="l_name"
                                                onBlur={this.form.handleBlurEvent}
                                                onChange={this.form.handleChangeEvent}
                                                value={this.state.fields.l_name}
                                                // To override the attribute name
                                                data-attribute-name="Last Name"
                                                data-async type="text" placeholder="Last name" id="l-name" className="Category-description" />
                                            <label className="error">
                                                {this.state.errors.l_name
                                                    ? this.state.errors.l_name
                                                    : ""}
                                            </label>
                                        </div>
                                    </div>
                                    {/* email  */}
                                    <div className="row add-row">
                                        <div className="col-3 add-text">
                                            Email Address <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </div>
                                        <div className="col-9">
                                            <Form.Control name="email"
                                                onBlur={this.form.handleBlurEvent}
                                                onChange={this.form.handleChangeEvent}
                                                value={this.state.fields.email}
                                                // To override the attribute name
                                                data-attribute-name="Email"
                                                data-async type="email" placeholder="Email address" id="email" className="Category-description" />
                                            <label className="error">
                                                {this.state.errors.email
                                                    ? this.state.errors.email
                                                    : ""}
                                            </label>
                                        </div>
                                    </div>
                                    {/* password  */}
                                    <div className="row add-row">
                                        <div className="col-3 add-text">
                                            Password <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </div>
                                        <div className="col-9">
                                            <Form.Control name="password"
                                                onBlur={this.form.handleBlurEvent}
                                                onChange={this.form.handleChangeEvent}
                                                value={this.state.fields.password}
                                                // To override the attribute name
                                                data-attribute-name="Password"
                                                data-async
                                                type="text" placeholder="Password" 
                                                id="password" className="Category-description" />
                                                <label className="error">
                                                {this.state.errors.password
                                                    ? this.state.errors.password
                                                    : ""}
                                            </label>
                                        </div>
                                    </div>
                                    {/* phone-number*/}
                                    <div className="row add-row">
                                        <div className="col-3 add-text">
                                            Phone Number <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </div>
                                        <div className="col-9">
                                            <Form.Control name="phone_number"
                                                onBlur={this.form.handleBlurEvent}
                                                onChange={this.form.handleChangeEvent}
                                                value={this.state.fields.phone_number}
                                                // To override the attribute name
                                                data-attribute-name="Phone number"
                                                data-async
                                                type="tel" placeholder="Phone number" 
                                                id="p-number" className="category-code" />
                                                <label className="error">
                                                {this.state.errors.phone_number
                                                    ? this.state.errors.phone_number
                                                    : ""}
                                            </label>
                                        </div>
                                    </div>
                                    {/* addresss-1  */}
                                    <div className="row add-row">
                                        <div className="col-3 add-text">
                                            Address 1 <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </div>
                                        <div className="col-9">

                                            <textarea name="ad1"
                                                onBlur={this.form.handleBlurEvent}
                                                onChange={this.form.handleChangeEvent}
                                                value={this.state.fields.ad1}
                                                // To override the attribute name
                                                data-attribute-name="Address 1"
                                                data-async
                                                className="form-control" id="ad1" rows="3"></textarea>
                                                 <label className="error">
                                                {this.state.errors.ad1
                                                    ? this.state.errors.ad1
                                                    : ""}
                                            </label>
                                        </div>
                                    </div>
                                    {/* address-2  */}
                                    <div className="row add-row">
                                        <div className="col-3 add-text">
                                            Address 2 <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </div>
                                        <div className="col-9">
                                            <textarea name="ad2"
                                                onBlur={this.form.handleBlurEvent}
                                                onChange={this.form.handleChangeEvent}
                                                value={this.state.fields.ad2}
                                                // To override the attribute name
                                                data-attribute-name="Address 2"
                                                data-async class="form-control" id="ad2" rows="3"></textarea>
                                                <label className="error">
                                                {this.state.errors.ad2
                                                    ? this.state.errors.ad2
                                                    : ""}
                                            </label>
                                        </div>
                                    </div>
                                    {/* country  */}
                                    <div className="row add-row">
                                        <div className="col-md-3 product-data">
                                            <label>
                                                Select Country <Icon icon="line-md:question-circle-twotone" color="black" />
                                            </label>
                                        </div>
                                        <div className="col-md-9">
                                            <Form.Select name="country"
                                                onBlur={this.form.handleBlurEvent}
                                                onChange={this.form.handleChangeEvent}
                                                value={this.state.fields.country}
                                                // To override the attribute name
                                                data-attribute-name="Country"
                                                data-async className="select-category" id="select-country">
                                                <option value="0"> Select Country</option>
                                                {this.state.countries.map((c) => (
                                                    <option value={c.id}>{c.name}</option>
                                                ))}
                                            </Form.Select>
                                            <label className="error">
                                                {this.state.errors.country
                                                    ? this.state.errors.country
                                                    : ""}
                                            </label>
                                            </div>
                                    </div>
                                    {/* state  */}
                                    <div className="row add-row">
                                        <div className="col-md-3 product-data">
                                            <label>
                                                Select State <Icon icon="line-md:question-circle-twotone" color="black" />
                                            </label>
                                        </div>
                                        <div className="col-md-9"><Form.Select className="select-category" id="select-state">
                                            <option value="0"> Select State</option>
                                            {this.state.states.map((p) => (
                                                <option value={p.id}>{p.name}</option>
                                            ))}
                                        </Form.Select>

                                        </div>
                                    </div>
                                    {/* city */}
                                    <div className="row add-row">
                                        <div className="col-md-3 product-data">
                                            <label>
                                                Select City <Icon icon="line-md:question-circle-twotone" color="black" />
                                            </label>
                                        </div>
                                        <div className="col-md-9">
                                            <Form.Select className="select-category" id="select-city">
                                                <option value="0"> Select City</option>
                                                {this.state.cities.map((c) => (
                                                    <option value={c.id}>{c.city}</option>
                                                ))}
                                            </Form.Select></div>
                                    </div>
                                    {/* pincode  */}
                                    <div className="row add-row">
                                        <div className="col-3 add-text">
                                            PinCode <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </div>
                                        <div className="col-9">
                                            <Form.Control type="number" placeholder="Pincode" id="pincode" className="Category-description" />
                                        </div>
                                    </div>
                                    {/* is activte */}
                                    <div className="row add-row">
                                        <div className="col-3 add-text">
                                            Is Active <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </div>
                                        <div className="col-9">
                                            <input type="checkbox" className="form-check-input" id="is-active" />
                                        </div>
                                    </div>
                                    {/* role */}
                                    <div className="row add-row">
                                        <div className="col-md-3 product-data">
                                            <label>
                                                Select Role <Icon icon="line-md:question-circle-twotone" color="black" />
                                            </label>
                                        </div>
                                        <div className="col-md-9">
                                            <Form.Select className="select-category" id="select-role">
                                                <option value="0"> Select Role</option>
                                                {this.state.roles.map((r) => (
                                                    <option value={r.id}>{r.role_type}</option>
                                                ))}
                                            </Form.Select></div>
                                    </div>
                                    {/* save bth  */}
                                    <div className="row btn-row">
                                        <div className="col-12">
                                            <button type="button" onClick={() => this.Save(this.state.param)} className="btn btn-primary search-btn" ><Icon icon="fluent:save-16-regular" /> Save</button>
                                        </div>

                                    </div>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>

                </div>
            </>
        );
    }
}
export default EditCustomer