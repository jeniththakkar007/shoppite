const country = require('./country');
const express = require('express');
const router = express.Router();

class countryController {
    constructor(app) {
      router.get('/all', country.getAllcountry);
      app.use('/api/country', router);
    }
}
module.exports = countryController;