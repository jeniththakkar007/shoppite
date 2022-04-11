class Module {
    constructor(app) {
       this.app = app;
    }
   init() {
    const productcontroller = require('./products/product.controller');
    new productcontroller(this.app);

    const categorycontroller = require('./categry/category.controller');
    new categorycontroller(this.app);

    
    const subProductController = require('./sub_product/sub_product.controller');
    new subProductController(this.app);

    
    
   }
  }
  module.exports = Module;