const category = require('./category');
const express = require('express');
const router = express.Router();
class categoryController {
    constructor(app) {
      router.get('/', category.getAllcategory);
      router.post('/add', category.addCategory);
      router.put('/update', category.updateCategory);
      router.delete('/:id', category.deleteCategory);
      app.use('/api/category', router);
    }
 }
module.exports = categoryController;