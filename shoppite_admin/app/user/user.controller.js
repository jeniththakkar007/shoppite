const user = require('./user');
const express = require('express');
const router = express.Router();

class userController {
    constructor(app) {
      router.get('/all', user.getAlluser);
      router.post('/add', user.adduser);
      router.put('/update/:id', user.updateuser);
      router.delete('/:id', user.deleteuser);
      app.use('/api/user', router);
    }
}
module.exports = userController;