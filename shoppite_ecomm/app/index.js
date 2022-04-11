class Module {
    constructor(app) {
       this.app = app;
    }
   init() {
    const productcontroller = require('./products/product.controller');
    new productcontroller(this.app);
   
  
    const categrycontroller = require('./category/category.controller');
    new categrycontroller(this.app);
    
    const sub_productsController = require('./sub-product/sub_product.controller');
    new sub_productsController(this.app);
   }

  }
  module.exports = Module;