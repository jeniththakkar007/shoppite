const db = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Sub_product = db.Sub_product;


//creates
exports.create = (req, res) => {

    if (!req.body.sub_product_name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Authentication
    const sub_product = new Sub_product({
        sub_product_name:req.body.sub_product_name,
        sub_product_discription:req.body.sub_product_discription,
        sub_product_price:req.body.sub_product_price,
        sub_product_discount:req.body.sub_product_discount,
        sub_product_quantity:req.body.sub_product_quantity,
        product_id:req.body.product_id,
        company_name:req.body.company_name,
        is_available:req.body.is_available
    });

    // Save Authentication in the database
    sub_product
        .save(sub_product)
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
//Get All sub_products_data
exports.findAllProduct = (req, res) => {
    const sub_product_name = req.query.sub_product_name;

    Sub_product.find(sub_product_name)
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

// Find all product_id
exports.findAllproduct_id = (req, res) => {
    const id = req.params.product_id;
    Sub_product.find({ product_id: id})
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