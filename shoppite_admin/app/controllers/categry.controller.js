const db = require("../models");
const Categry = db.categry;

// Create and Save a new Products
exports.create = (req, res) => {
    // Validate request
    if (!req.body.product_type_name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Categry and store data
    const categry = new Categry({
        product_type_name:req.body.product_type_name,
        product_type_discription:req.body.product_type_discription,
        product_create_date:req.body.product_create_date,
        product_updated_date:req.body.product_updated_date
      
    });
  
    // Save Categry in the database
    categry
      .save(categry)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Categry."
        });
      });
  };
  
  // Retrieve all Products from the database.
  exports.findAll = (req, res) => {
    const product_type_name = req.query.product_type_name;
    
  
    Categry.find(product_type_name)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Categry."
        });
      });
  };
  