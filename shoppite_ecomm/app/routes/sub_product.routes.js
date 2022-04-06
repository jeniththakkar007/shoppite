module.exports = app => {
    const sub_product = require("../controllers/sub_product.controller");
  
    var router = require("express").Router();

    
//create sub_product    
router.post("/sub_product_create", sub_product.create);
//find all data of sub product
router.get("/allsub_product_data", sub_product.findAllProduct);
//find by product id 
router.get("/:product_id",sub_product.findAllproduct_id);

app.use("/api/sub_product", router);
};
