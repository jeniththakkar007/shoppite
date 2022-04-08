const express = require("express");

const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};


app.use(cors(corsOptions));


app.use(express.json()); 


app.use(express.urlencoded({ extended: true }));  

const db = require("./app/models");
//connection 
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1 
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to shoppite application." });
});

require("./app/routes/products.routes")(app);
require("./app/routes/categry.routes")(app);
require("./app/routes/sub_product.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

