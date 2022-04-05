const dbConfig = require("../configration/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
// db.Authentication = require("./auth.model")(mongoose);
db.Categry = require("./categry.model")(mongoose);
db.Products = require("./products.model")(mongoose);



module.exports = db;