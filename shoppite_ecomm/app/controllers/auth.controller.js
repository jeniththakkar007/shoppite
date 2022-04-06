const db = require("../models");
const Auth = db.Auth;
//creates


exports.create = (req, res) => {
    this.user_role(req,res)
  
    if (!req.body.first_name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Authentication
    const auth = new Auth({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        email_id:req.body.email_id,
        phone_number:req.body.phone_number,
        address_1:req.body.address_1,
        address_2:req.body.address_2,
        pincode:req.body.pincode,
        state:req.body.state,
        city:req.body.city,
        user_role:req.body.user_role,
        user_address_type:req.body.user_address_type
    });
  
    // Save Authentication in the database
    auth
      .save(auth)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
     
          message:
            err.message || "Some error occurred while creating the login"
        });
      });
  };

//registration

exports.registration = (req, res) => {
  const email = req.body.email_id;
  Auth.find({email_id:email})
      .then(data => {
        if(data.length>0)
        {
         res.send("alredy email_id exist")
        }
        else
        {
          this.create(req,res)
         
        }
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Authentication with Error" +err.message });
      });
  };

//login

exports.Login = (req, res) => {
  const email_id = req.body.email_id;
  const password = req.body.password;
 
  Auth.
  find({email_id:email_id,password:password})
      .then(data => {
        if(data.length>0)
        {
            res.send("successfully login")
        }
        else
        {
          res.send("Not Authenticated!!!")
        }
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Authentication with Error" + err.message });
      });
  };
 