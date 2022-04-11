const subProduct = require('./sub_product');
const express = require('express');
const router = express.Router();
class subProductController {
    constructor(app) {
      router.get('/all', subProduct.getAllsubProduct);
      router.post('/add', subProduct.addsubProduct);
      router.put('/update', subProduct.updatesubProduct);
      router.delete('/:id', subProduct.deletesubProduct);
      app.use('/api/sub_products', router);
    }
 }
module.exports = subProductController;