const db = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Products = db.Products;


//creates
exports.create = (req, res) => {

    if (!req.body.product_name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Authentication
    const products = new Products({
        product_name: req.body.product_name,
        product_discription: req.body.product_discription,
        product_category_id: req.body.product_category_id,
        created_date: req.body.created_date,
        updated_date: req.body.updated_date
        

    });

    // Save Authentication in the database
    products
        .save(products)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({

                message:
                    err.message || "Some error occurred while creating the login"
            });
        });
};
//Get All products_data
exports.findAllProduct = (req, res) => {
    const product_name = req.query.product_name;

    Products.find(product_name)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving products."
            });
        });
};

//Get All products_categrised_id
exports.findAllcategrized = (req, res) => {
    const product_category_id = req.query.product_category_id;

    Products.find(product_category_id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving products."
            });
        });
};
// Find all published Tutorials
exports.findAllcategry_id = (req, res) => {
    const id = req.params.product_category_id;
    Products.find({ product_category_id: id})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  }; 