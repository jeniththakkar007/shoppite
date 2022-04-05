const db = require("../models");
const Products = db.products;

// Create and Save a new Products
exports.create = (req, res) => {
    // Validate request
    if (!req.body.product_name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Products and store data
    const products = new Products({
        product_name: req.body.product_name,
        product_discription: req.body.product_discription,
        product_category_id:req.body.product_category_id,
        created_date:req.body.created_date,
        updated_date:req.body.updated_date
        
      
    });
  
    // Save Products in the database
    products
      .save(products)
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
    const product_name = req.query.product_name;
    
  
    Products.find(product_name)
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
  
  // Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
 
  Products.find(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(req.query.product_name);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

// Find all published Tutorials
exports.findAllResult = (req, res) => {
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