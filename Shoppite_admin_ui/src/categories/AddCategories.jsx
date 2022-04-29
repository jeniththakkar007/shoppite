import React from "react";
import { ReactDOM } from "react";
import { Card, Form } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import "./add.css";
import { createCategory } from "../services/Category.service";
import ReactFormValidation from "react-form-input-validation";

class AddCategories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {
                category_code: "",
                category_name: "",
                category_description: ""

            },
            errors: {}
        };
        this.form = new ReactFormValidation(this, { locale: "en" });
        this.form.useRules({
            category_code: "required",
            category_name: "required",
            category_description: "required",
            //our data is done
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
            data.category_name = document.getElementById('name-id').value;
            data.category_code = document.getElementById('code-id').value;
            data.category_description = document.getElementById('description-id').value;
            // createCategory(data).then(
            //   navigate('/category')
            // )
            createCategory(data).then(window.location = "http://localhost:3000/category/");

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

    // const navigate = useNavigate();
    //  Save_add(){ 
    //     var data = new Object();
    //     data.category_name =  document.getElementById('name-id').value;
    //     data.category_code =  document.getElementById('code-id').value; 
    //     data.category_description =  document.getElementById('description-id').value;
    //     // createCategory(data).then(
    //     //   navigate('/category')
    //     // )
    //     createCategory(data).then(window.location="http://localhost:3000/category/");
    // }
    render() {
        return (
            <>
                <div>
                    <div className="row head">
                        <div className="col-6">
                            <span className="title"><b>Add a new category</b> </span>
                        </div>

                    </div>
                    <Card style={{ width: '98%' }}>
                        <Card.Body>
                            <Card.Title><Icon icon="mdi:information-variant" color="black" /> Category info </Card.Title>
                            <div className="container-fuild">
                                <Form className="myForm"
                                    noValidate
                                    autoComplete="off"
                                    onSubmit={this.form.handleSubmit}>
                                    {/* category-name  */}
                                    <div className="row add-row">
                                        <div className="col-3 add-text">
                                            Category Name <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </div>
                                        <div className="col-9">
                                            <Form.Control name="category_name"
                                                onBlur={this.form.handleBlurEvent}
                                                onChange={this.form.handleChangeEvent}
                                                value={this.state.fields.category_name}
                                                data-attribute-name="Category Name"
                                                data-async
                                                type="text" placeholder="Category name"
                                                id="name-id" className="category-name" />
                                            <label className="error">
                                                {this.state.errors.category_name
                                                    ? this.state.errors.category_name
                                                    : ""}
                                            </label>
                                        </div>
                                    </div>
                                    {/* category-code  */}
                                    <div className="row add-row">
                                        <div className="col-3 add-text">
                                            Category Code <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </div>
                                        <div className="col-9">
                                            <Form.Control name="category_code"
                                                onBlur={this.form.handleBlurEvent}
                                                onChange={this.form.handleChangeEvent}
                                                value={this.state.fields.category_code}
                                                data-attribute-name="Category Code"
                                                data-async
                                                type="text" placeholder="Category code"
                                                id="code-id" className="category-code" />
                                                <label className="error">
                                                {this.state.errors.category_code
                                                    ? this.state.errors.category_code
                                                    : ""}
                                            </label>
                                        </div>
                                    </div>
                                    {/* category-description  */}
                                    <div className="row add-row">
                                        <div className="col-3 add-text">
                                            Category Description <Icon icon="line-md:question-circle-twotone" color="black" />
                                        </div>
                                        <div className="col-9">
                                            <Form.Control  name="category_description"
                                                onBlur={this.form.handleBlurEvent}
                                                onChange={this.form.handleChangeEvent}
                                                value={this.state.fields.category_description}
                                                data-attribute-name="Category description"
                                                data-async
                                                type="text" placeholder="Category description"
                                                id="description-id" className="Category-description" />
                                                <label className="error">
                                                {this.state.errors.category_description
                                                    ? this.state.errors.category_description
                                                    : ""}
                                            </label>
                                        </div>
                                    </div>
                                    {/* save-btn  */}
                                    <div className="row btn-row">
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary search-btn"><Icon icon="fluent:save-16-regular" /> Save</button>
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

export default AddCategories;