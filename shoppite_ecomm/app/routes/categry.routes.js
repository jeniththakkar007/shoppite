module.exports = app => {
    const categry = require("../controllers/categry.controller");
  
    var router = require("express").Router();

    //create categry
    router.post("/create_categry", categry.create);
//find all data
router.get("/allcategry", categry.findAllCategry);

app.use("/api/categry", router);
};
