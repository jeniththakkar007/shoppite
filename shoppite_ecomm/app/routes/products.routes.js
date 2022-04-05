module.exports = app => {
    const products = require("../controllers/products.controller");
  
    var router = require("express").Router();
// Create 
router.post("/create", products.create);

//get all product_data
router.get("/allproduct_data", products.findAllProduct);

//get all product_categrised_id
router.get("/categrized_product", products.findAllcategrized);


app.use("/api/products", router);
};