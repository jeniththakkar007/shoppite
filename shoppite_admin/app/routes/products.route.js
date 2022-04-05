module.exports = app => {
  const products = require("../controllers/products.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", products.create);

  // Retrieve all Tutorials
  router.get("/", products.findAll);

  // Retrieve all published Tutorials
  router.get("/:product_category_id", products.findAllResult);

  // Retrieve a single Tutorial with id
//   router.get("/:id", products.findOne);  

  // Update a Tutorial with id
//   router.put("/:id", clg.update);   ...

  // Delete a Tutorial with id
//   router.delete("/:id", clg.delete);   ...

  // Create a new Tutorial
//   router.delete("/", clg.deleteAll);   ...

//   router.post("/auth", clg.Authentcation);

//   router.post("/reg",clg.Reg);

  app.use("/api/products", router);
};
