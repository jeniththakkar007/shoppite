const { Router } = require("express");
const { route } = require("express/lib/application");
module.exports = app => {
    const Auth = require("../controllers/auth.controller");
  
    var router = require("express").Router();
    //registration
    router.post("/reg" , Auth.registration);
    //authentication-login
    router.post("/authenticate", Auth.Login);

    
    app.use("/api/auth", router);
  
}