import React from "react";
import { ReactDOM } from "react";
import { Card, Form } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import { adduser, getAllcity, getAllcountry, getAllrole, getAllstate } from "../services/customers.service";
import ReactFormValidation from "react-form-input-validation";
import "./addCustomer.css";



class AddCustomer extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            states: [],
            countries: [],
            cities: [],
            roles: [],
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
                role: ""           //our data is done 
                // customer_name: "",
                // email_address: "",
                // phone_number: "",
                // pickup_time: "",
                // taxi: "",
                // pickup_place: "",
                // comments: "",
                // dropoff_place: "",
                // extras: []
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
            role: "required"               //our data is done
            // customer_name: "required|username_available",
            // email_address: "required|email",
            // phone_number: "required|numeric|digits_between:10,12",
            // pickup_time: "required|date",
            // taxi: "required",
            // pickup_place: "required",
            // comments: "required|max:20",
            // dropoff_place: "required",
            // extras: "required|array"
        });

        this.form.onformsubmit = (fields) => {
            console.log(fields);
            var data = new Object();
            data.user_name =  document.getElementById('user-name').value;
            data.f_name =  document.getElementById('f-name').value; 
            data.l_name =  document.getElementById('l-name').value;
            data.email =  document.getElementById('email').value;
            data.password =  document.getElementById('password').value;   
            data.phone_number =  document.getElementById('phone_number').value;
            data.address_1 =  document.getElementById('ad1').value;
            data.address_2 =  document.getElementById('ad2').value;
            data.city =  document.getElementById('select-city').value; 
            data.state =  document.getElementById('select-state').value;
            data.country =  document.getElementById('select-country').value;
            data.pincode =  document.getElementById('pincode').value; 
           if(document.getElementById('is_active').value)
           {
            data.is_active = 1;
           }
           else
           {
            data.is_active = 0;
           }
            data.role =  document.getElementById('select-role').value;
            console.log(data);
            adduser(data).then(window.location="http://localhost:3000/customer/");
            
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
        getAllstate().then(res => this.setState({ states: res.data }));
        getAllcountry().then(res => this.setState({ countries: res.data }));
        getAllcity().then(res => this.setState({ cities: res.data }));
        getAllrole().then(res => this.setState({ roles: res.data }));
    }


    render() {
        return (
            <><div>
            <Card style={{ width: '98%' }}>
                <Card.Body>
                    <Card.Title><Icon icon="mdi:information-variant" color="black"/> User info </Card.Title>
                    <div className="container-fuild">
            
                <Form className="myForm"
                    noValidate
                    autoComplete="off"
                    onSubmit={this.form.handleSubmit}>
                    {/* User Name */}
                    <div className="row add-row">
                        <div className="col-3 add-text">
                            User Name <Icon icon="line-md:question-circle-twotone" color="black" />
                        </div>
                        <div className="col-9">
                            <Form.Control type="text"
                                name="user_name"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.user_name}
                                // To override the attribute name
                                data-attribute-name="User Name"
                                data-async placeholder="User name" id="user-name" className="category-code" />
                            <label className="error">
                                {this.state.errors.user_name
                                    ? this.state.errors.user_name
                                    : ""}
                            </label>
                        </div>
                    </div>
                    {/* First-Name  */}
                    <div className="row add-row">
                        <div className="col-3 add-text">
                            First Name <Icon icon="line-md:question-circle-twotone" color="black" />
                        </div>
                        <div className="col-9">

                            <Form.Control type="text"
                                name="f_name"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.f_name}
                                // To override the attribute name
                                data-attribute-name="First Name"
                                data-async placeholder="First name" id="f-name" className="category-code" />
                            <label className="error">
                                {this.state.errors.f_name
                                    ? this.state.errors.f_name
                                    : ""}
                            </label>
                        </div>
                    </div>
                    {/* Last-Name  */}
                    <div className="row add-row">
                        <div className="col-3 add-text">
                            Last Name <Icon icon="line-md:question-circle-twotone" color="black" />
                        </div>
                        <div className="col-9">

                            <Form.Control type="text"
                                name="l_name"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.l_name}
                                // To override the attribute name
                                data-attribute-name="Last Name"
                                data-async placeholder="Last name" id="l-name" className="category-code" />
                            <label className="error">
                                {this.state.errors.l_name
                                    ? this.state.errors.l_name
                                    : ""}
                            </label>
                        </div>

                    </div>
                    {/* email */}
                    <div className="row add-row">
                        <div className="col-3 add-text">
                            Email Address <Icon icon="line-md:question-circle-twotone" color="black" />
                        </div>
                        <div className="col-9">
                            <Form.Control type="email"
                                name="email"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.email}
                                // To override the attribute name
                                data-attribute-name="Email"
                                data-async placeholder="Email" id="email" />
                            <label className="error">
                                {this.state.errors.email
                                    ? this.state.errors.email
                                    : ""}
                            </label>
                        </div>

                    </div>
                    {/* password */}
                    <div className="row add-row">
                        <div className="col-3 add-text">
                            Password <Icon icon="line-md:question-circle-twotone" color="black" />
                        </div>
                        <div className="col-9">
                            <Form.Control type="text"
                                name="password"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.password}
                                // To override the attribute name
                                data-attribute-name="Password"
                                data-async placeholder="Password" id="password" />
                            <label className="error">
                                {this.state.errors.password
                                    ? this.state.errors.password
                                    : ""}
                            </label>
                        </div>

                    </div>
                    {/* phone-number */}
                    <div className="row add-row">
                        <div className="col-3 add-text">
                            Phone Number <Icon icon="line-md:question-circle-twotone" color="black" />
                        </div>
                        <div className="col-9">
                            <Form.Control type="tel"
                                name="phone_number"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.phone_number}
                                // To override the attribute name
                                data-attribute-name="Phone number"
                                data-async placeholder="Phone number" id="phone_number" />
                            <label className="error">
                                {this.state.errors.phone_number
                                    ? this.state.errors.phone_number
                                    : ""}
                            </label>
                        </div>

                    </div>
                    {/* address-1 */}
                    <div className="row add-row">
                        <div className="col-3 add-text">
                            Address 1 <Icon icon="line-md:question-circle-twotone" color="black" />
                        </div>
                        <div className="col-9">
                            <textarea className="form-control" name="ad1"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.ad1}
                                // To override the attribute name
                                data-attribute-name="Address 1"
                                data-async id="ad1" rows="3"></textarea>
                            <label className="error">
                                {this.state.errors.ad1
                                    ? this.state.errors.ad1
                                    : ""}
                            </label>
                        </div>

                    </div>
                    {/* address-2 */}
                    <div className="row add-row">
                        <div className="col-3 add-text">
                            Address 2 <Icon icon="line-md:question-circle-twotone" color="black" />
                        </div>
                        <div className="col-9">
                            <textarea className="form-control" name="ad2"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.ad2}
                                // To override the attribute name
                                data-attribute-name="Address 2"
                                data-async id="ad2" rows="3"></textarea>
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
                                value={this.state.fields.country}
                                onChange={this.form.handleChangeEvent}
                                onBlur={this.form.handleBlurEvent}
                                className="select-category"
                                id="select-country">
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
                        <div className="col-md-9">
                            <Form.Select name="state"
                                value={this.state.fields.state}
                                onChange={this.form.handleChangeEvent}
                                onBlur={this.form.handleBlurEvent}
                                className="select-category"
                                id="select-state">
                                <option value="0"> Select State</option>
                                {this.state.states.map((p) => (
                                    <option value={p.id}>{p.name}</option>
                                ))}

                            </Form.Select>
                            <label className="error">
                                {this.state.errors.state
                                    ? this.state.errors.state
                                    : ""}
                            </label>
                        </div>
                    </div>
                    {/* city  */}
                    <div className="row add-row">
                        <div className="col-md-3 product-data">
                            <label>
                                Select City <Icon icon="line-md:question-circle-twotone" color="black" />
                            </label>
                        </div>
                        <div className="col-md-9">
                            <Form.Select name="city"
                                value={this.state.fields.city}
                                onChange={this.form.handleChangeEvent}
                                onBlur={this.form.handleBlurEvent}
                                className="select-category"
                                id="select-city">
                                <option value="0"> Select City</option>
                                {this.state.cities.map((c) => (
                                    <option value={c.id}>{c.city}</option>
                                ))}

                            </Form.Select>
                            <label className="error">
                                {this.state.errors.city
                                    ? this.state.errors.city
                                    : ""}
                            </label>
                        </div>
                    </div>
                    {/* pincode */}
                    <div className="row add-row">
                        <div className="col-3 add-text">
                            Pincode <Icon icon="line-md:question-circle-twotone" color="black" />
                        </div>
                        <div className="col-9">
                            <Form.Control type="text"
                                name="pincode"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.pincode}
                                // To override the attribute name
                                data-attribute-name="Pincode"
                                data-async placeholder="Pincode" id="pincode" />
                            <label className="error">
                                {this.state.errors.pincode
                                    ? this.state.errors.pincode
                                    : ""}
                            </label>
                        </div>

                    </div>
                    {/* is activte */}
                    <div className="row add-row">
                        <div className="col-3 add-text">
                            Is Active <Icon icon="line-md:question-circle-twotone" color="black" />
                        </div>
                        <div className="col-9">
                            <Form.Control type="checkbox" name="is_active"
                                    onChange={this.form.handleChangeEvent} className="form-check-input" id="is_active" />
                        </div>
                        <label className="error">
                            {this.state.errors.is_active
                                ? this.state.errors.is_active
                                : ""}
                        </label>
                    </div>
                     {/* role */}
                     <div className="row add-row">
                        <div className="col-md-3 product-data">
                            <label>
                                Select Role <Icon icon="line-md:question-circle-twotone" color="black" />
                            </label>
                        </div>
                        <div className="col-md-9">
                            <Form.Select className="select-category"name="role"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.role} id="select-role">
                                <option value="0"> Select Role</option>
                                {this.state.roles.map((r) => (
                                    <option value={r.id}>{r.role_type}</option>
                                ))}
                            </Form.Select>
                            <label className="error">
                                {this.state.errors.role
                                    ? this.state.errors.role
                                    : ""}
                            </label>
                            </div>
                    </div>             
                    {/* save bth  */}
                    <div className="row btn-row">
                            <div className="col-12">
                            <button type="submit" className="btn btn-primary search-btn" ><Icon icon="fluent:save-16-regular" /> Save</button>
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

export default AddCustomer;