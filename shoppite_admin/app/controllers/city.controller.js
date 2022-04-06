const { city } = require("../models");
const db = require("../models");
const City = db.city;

// Create and Save a new State
exports.create = (req, res) => {
    // Validate request
    if (!req.body.city_name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a State and store data
    const city = new City({
        city_name: req.body.city_name,
        state_id:req.body.state_id
        
    });
  
    // Save State in the database
    city
      .save(city)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the State."
        });
      });
  };
  
  // Retrieve all Products from the database.
  exports.findAll = (req, res) => {
    const city_name = req.query.city_name;
    
  
    City.find(city_name)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving State."
        });
      });
  };
  

// Find all Product Id
exports.findAllStateID = (req, res) => {
  const id = req.params.state_id;
  City.find({ state_id: id})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving State."
      });
    });
};