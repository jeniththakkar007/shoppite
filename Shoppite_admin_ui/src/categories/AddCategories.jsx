import React from "react";
import { ReactDOM } from "react";
import { Card, Form } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import "./add.css";
import { createCategory } from "../services/Category.service";

const AddCategories=()=>
{
    
    const navigate = useNavigate();
    function Save_add(){ 
        var data = new Object();
        data.category_name =  document.getElementById('name-id').value;
        data.category_code =  document.getElementById('code-id').value; 
        data.category_description =  document.getElementById('description-id').value;
        createCategory(data).then(
          navigate('/category')
        )
    }

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
                        <Card.Title><Icon icon="mdi:information-variant" color="black"/> Category info </Card.Title>
                        <div className="container-fuild">
                        <Form>
                            <div className="row add-row">
                                <div className="col-3 add-text">
                                    Category Name <Icon icon="line-md:question-circle-twotone" color="black" />
                                </div>
                                <div className="col-9">
                                <Form.Control type="text" placeholder="Category name" id="name-id" className="category-name" />
                                </div>
                            </div>
                            <div className="row add-row">
                                <div className="col-3 add-text">
                                    Category Code <Icon icon="line-md:question-circle-twotone" color="black" />
                                </div>
                                <div className="col-9">
                                <Form.Control type="text" placeholder="Category code" id="code-id" className="category-code" />
                                </div>
                            </div>
                            <div className="row add-row">
                                <div className="col-3 add-text">
                                    Category Description <Icon icon="line-md:question-circle-twotone" color="black" />
                                </div>
                                <div className="col-9">
                                <Form.Control type="text" placeholder="Category description" id="description-id" className="Category-description" />
                                </div>
                            </div>
                            <div className="row btn-row">
                                <div className="col-12">
                                <button type="submit" className="btn btn-primary search-btn" onClick={Save_add}><Icon icon="fluent:save-16-regular" /> Save</button>
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

export default AddCategories;