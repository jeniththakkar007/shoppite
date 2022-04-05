module.exports = app => {
    const categry = require("../controllers/categry.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", categry.create);
  
    // Retrieve all Tutorials
    router.get("/", categry.findAll);
  
    // Retrieve all published Tutorials
  //   router.get("/result", clg.findAllResult);
  
    // Retrieve a single Tutorial with id
  //   router.get("/:id", clg.findOne);  ...
  
    // Update a Tutorial with id
  //   router.put("/:id", clg.update);   ...
  
    // Delete a Tutorial with id
  //   router.delete("/:id", clg.delete);   ...
  
    // Create a new Tutorial
  //   router.delete("/", clg.deleteAll);   ...
  
  //   router.post("/auth", clg.Authentcation);
  
  //   router.post("/reg",clg.Reg);
  
    app.use("/api/categry", router);
  };
  