module.exports = app => {
    const city = require("../controllers/city.controller");
  
    var router = require("express").Router();
  
    // Create 
    router.post("/create_city", city.create);
  
    // Retrieve all city
    router.get("/allcity", city.findAll);

    //find by state_id
    router.get("/:state_id",city.findAllStateID)

    app.use("/api/city", router);
};
