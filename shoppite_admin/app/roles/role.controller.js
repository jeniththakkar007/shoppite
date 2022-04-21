const role = require('./role');
const express = require('express');
const router = express.Router();

class roleController {
    constructor(app) {
      router.get('/all', role.getAllrole);
      app.use('/api/role', router);
    }
}
module.exports = roleController;