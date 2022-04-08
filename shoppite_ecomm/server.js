const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};


app.use(cors(corsOptions));


app.use(express.json()); 


app.use(express.urlencoded({ extended: true }));  

async function init() {
  const approuting = require('./app');
  const appmodules = new approuting(app);
  appmodules.init();
}
init();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to shoppite application." });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

