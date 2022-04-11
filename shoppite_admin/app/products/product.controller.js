const product = require('./product');
const express = require('express');
const router = express.Router();
class ProductController {
    constructor(app) {
      router.get('/all', product.getAllProducts);
      router.post('/add', product.addproduct);
      router.put('/update', product.updateProduct)
      router.delete('/:id', product.deleteProduct);
      app.use('/api/products', router);
      
    }
    
 }
module.exports = ProductController;