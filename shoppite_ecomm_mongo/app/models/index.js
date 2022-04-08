const dbConfig = require("../configration/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;


const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.Categry = require("./categry.model")(mongoose);
db.Products = require("./products.model")(mongoose);
db.Sub_product = require("./sub_product.model")(mongoose);
db.Auth=require("./auth.model")(mongoose);


module.exports = db;