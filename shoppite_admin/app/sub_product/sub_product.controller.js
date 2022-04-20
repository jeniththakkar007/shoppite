const subProduct = require('./sub_product');
const express = require('express');
const router = express.Router();
class subProductController {
    constructor(app) {
      router.get('/all', subProduct.getAllsubProduct);
      router.get('/get/:id',subProduct.getAllSubProduct_by_id)
      router.post('/getserachdata',subProduct.search_Sub_Data)
      router.post('/add', subProduct.addsubProduct);
      router.put('/update/:id', subProduct.updatesubProduct);
      router.delete('/:id', subProduct.deletesubProduct);
      app.use('/api/sub_products', router);
    }
 }
module.exports = subProductController;