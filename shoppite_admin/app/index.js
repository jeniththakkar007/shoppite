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

    const userController = require('./user/user.controller');
    new userController(this.app);

    const stateController = require('./states/state.controller');
    new stateController(this.app);
    
    const countryController = require('./counties/country.controller');
    new countryController(this.app);

    const cityController = require('./cities/city.controller');
    new cityController(this.app);

    const roleController = require('./roles/role.controller');
    new roleController(this.app);
    
    
   }
  }
  module.exports = Module;