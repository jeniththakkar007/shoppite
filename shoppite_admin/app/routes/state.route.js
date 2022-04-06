module.exports = app => {
    const state = require("../controllers/state.controllers");
  
    var router = require("express").Router();
  
    // Create a new Products
    router.post("/create", state.create);
  
    // Retrieve all Products
    router.get("/allstate", state.findAll);
  
 
  
    app.use("/api/state", router);
  };
  