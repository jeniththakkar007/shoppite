const category = require('./category');
const express = require('express');
const router = express.Router();
class categoryController {
    constructor(app) {
      router.get('/all', category.getAllcategory);
      router.post('/add', category.addcategory);
      router.put('/update', category.updatecategory)
      router.delete('/:id', category.deletecategory);
      app.use('/api/category', router);
    }
 }
module.exports = categoryController;