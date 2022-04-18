import React, { useEffect } from "react";
import { ReactDOM } from "react";
import { Card, Form } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import "./edit.css";
import  {getCategory, updateCategory} from '../services/Category.service'

const EditCategories=()=>
{
    const params = useParams();
    const navigate = useNavigate();
    function Save(){ 
        var data = new Object();
        data.category_name =  document.getElementById('name-id').value;
        data.category_code =  document.getElementById('code-id').value; 
        data.category_description =  document.getElementById('description-id').value;
        updateCategory(params.id,data).then(
          navigate('/category')
        )
    }
  
    useEffect(()=> { 
        getCategory(params.id)
        .then(res => {
         console.log(res.data)
            document.getElementById("name-id").setAttribute("value",res.data.category_name);
            document.getElementById("code-id").setAttribute("value",res.data.category_code);
            document.getElementById("description-id").setAttribute("value",res.data.category_description);

        })
        .catch(err =>{
            console.log(err.messeage)
        })
    }, [params.id])
    return (
        <>
        <div>
        <div className="row head">
                <div className="col-6">
                 <span className="title"><b>Edit Category</b> </span>
                  </div>
                  
            </div>
                <Card style={{ width: '98%' }}>
                    <Card.Body>
                        <Card.Title><Icon icon="dashicons:edit-page"  color="black"/>  Edit Field </Card.Title>
                        <div className="container-fuild">
                        <Form>
                            <div className="row edit-row">
                                <div className="col-3 edit-text">
                                    Category Name <Icon icon="line-md:question-circle-twotone" color="black" />
                                </div>
                                <div className="col-9">
                                <Form.Control type="text" placeholder="Category name" id="name-id"  className="category-name" />
                                </div>
                            </div>
                            <div className="row edit-row">
                                <div className="col-3 edit-text">
                                    Category Code <Icon icon="line-md:question-circle-twotone" color="black" />
                                </div>
                                <div className="col-9">
                                <Form.Control type="text" placeholder="Category code "id="code-id" className="category-code" />
                                </div>
                            </div>
                            <div className="row edit-row">
                                <div className="col-3 edit-text">
                                    Category Description <Icon icon="line-md:question-circle-twotone" color="black" />
                                </div>
                                <div className="col-9">
                                <Form.Control type="text" placeholder="Category description "  id="description-id" className="Category-description" />
                                </div>
                            </div>
                            <div className="row btn-row">
                                <div className="col-12">
                                <button type="submit" className="btn btn-primary search-btn" onClick={Save}><Icon icon="fluent:save-16-regular" /> Save</button>
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

export default EditCategories;