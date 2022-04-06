module.exports = app => {
    const sub_products = require("../controllers/sub_products.controllers");
  
    var router = require("express").Router();
  
    // Create a new Products
    router.post("/", sub_products.create);
  
    // Retrieve all Products
    router.get("/", sub_products.findAll);
  
    // Retrieve all Id Products
    router.get("/:product_id", sub_products.findAllProductID);
  
    // Retrieve a single Tutorial with id
  //   router.get("/:id", products.findOne);  
  
    // Update a Tutorial with id
  //   router.put("/:id", clg.update);   ...
  
    // Delete a Tutorial with id
  //   router.delete("/:id", clg.delete);   ...
  
    // Create a new Tutorial
  //   router.delete("/", clg.deleteAll);   ...
  
    app.use("/api/sub_products", router);
  };
  