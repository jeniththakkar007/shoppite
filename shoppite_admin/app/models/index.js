const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.products = require("./products.model")(mongoose);
db.categry = require("./categry.model")(mongoose);
db.sub_products = require("./sub_products.model")(mongoose);
db.state = require("./state.model")(mongoose);
db.city = require("./city.model")(mongoose);
module.exports = db;
