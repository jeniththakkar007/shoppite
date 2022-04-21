const city = require('./city');
const express = require('express');
const router = express.Router();

class cityController {
    constructor(app) {
      router.get('/all', city.getAllcity);
      app.use('/api/city', router);
    }
}
module.exports = cityController;