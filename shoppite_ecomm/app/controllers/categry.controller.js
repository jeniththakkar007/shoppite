const db = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Categry = db.Categry;


//creates
exports.create = (req, res) => {

    if (!req.body.product_type_name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Authentication
    const categry = new Categry({
        product_type_name: req.body.product_type_name,
        product_type_discription: req.body.product_type_discription,
        created_date: req.body.created_date,
        updated_date: req.body.updated_date
    });

    // Save Authentication in the database
    categry
        .save(categry)
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
exports.findAllCategry = (req, res) => {
    const product_type_name = req.query.product_type_name;

    Categry.find(product_type_name)

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