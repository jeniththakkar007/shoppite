const db = require("../models");
const State = db.state;

// Create and Save a new State
exports.create = (req, res) => {
    // Validate request
    if (!req.body.state_name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a State and store data
    const state = new State({
        state_name: req.body.state_name,
        
    });
  
    // Save State in the database
    state
      .save(state)
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
    const state_name = req.query.state_name;
    
  
    State.find(state_name)
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
  

