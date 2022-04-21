const state = require('./state');
const express = require('express');
const router = express.Router();

class stateController {
    constructor(app) {
      router.get('/all', state.getAllstate);
      app.use('/api/state', router);
    }
}
module.exports = stateController;