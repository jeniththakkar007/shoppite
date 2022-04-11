const sub_products = require('./sub_product')
const express = require('express');
const router = express.Router();
class sub_productsController {
    constructor(app) {
      router.get('/all', sub_products.getAllsub_products);
      router.post('/add', sub_products.addsub_products);
      router.put('/update', sub_products.updatesub_products);
      router.delete('/:id', sub_products.deletesub_products);
      app.use('/api/sub_products', router);
    }
 }
module.exports = sub_productsController;