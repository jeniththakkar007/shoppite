const product = require('./product');
const express = require('express');
const router = express.Router();
class ProductController {
    constructor(app) {
      router.get('/all', product.getAllProducts);
      router.get('/get/:id',product.getAllProduct_by_id);
      router.post('/getserachdata',product.search_Pro_Data);
      router.post('/add', product.addproduct);
      router.put('/update/:id', product.updateProduct);
      router.delete('/:id', product.deleteProduct);
      app.use('/api/products', router);
      
    }
    
 }
module.exports = ProductController;