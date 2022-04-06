const db = require("../models");
const Sub_products = db.sub_products;

// Create and Save a new Products
exports.create = (req, res) => {
    // Validate request
    if (!req.body.sub_product_name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Products and store data
    const sub_products = new Sub_products({
        sub_product_name: req.body.sub_product_name,
        sub_product_discription: req.body.sub_product_discription,
        sub_product_price:req.body.sub_product_price,
        sub_product_discount:req.body.sub_product_discount,
        sub_product_quantity:req.body.sub_product_quantity,
        product_id:req.body.product_id,
        company_name:req.body.company_name,
        is_available:req.body.is_available
        
      
    });
  
    // Save Products in the database
    sub_products
      .save(sub_products)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Products."
        });
      });
  };
  
  // Retrieve all Products from the database.
  exports.findAll = (req, res) => {
    const sub_product_name = req.query.sub_product_name;
    
  
    Sub_products.find(sub_product_name)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Products."
        });
      });
  };
  

// Find all Product Id
exports.findAllProductID = (req, res) => {
  const id = req.params.product_id;
  Sub_products.find({ product_id: id})
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