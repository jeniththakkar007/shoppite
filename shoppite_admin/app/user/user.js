const userMSSql = require('./user.mssql');

class user {
    async getAlluser(req, res) {
      try {
         const output = await userMSSql.getAlluser();
         res.send(output);
      }
      catch (error) {
      console.log(error);
    }
 }
 async adduser(req, res) {
    try {
      const output = await userMSSql.adduser(req.body);
      res.send(output);
    }
    catch (error) {
     console.log(error);
    }
  }
  async getUser_by_id(req, res) {
    const id = req.params.id;
    try {
     if (!id) {
      console.log('id is not passed');
     }
     const output = await userMSSql.getUser_by_id(id);
     res.send(output);
    }
    catch (error) {
     console.log(error);
    }
  }

  async updateuser(req, res) {
    const id = req.params.id;
     try {
    //   console.log(id);           //FOR CHECK ID IS PASS or NOT
    //   console.log(req.body);
       const output = await userMSSql.updateuser(req.body,id);
       res.send(output);
    }
    catch (error) {
    console.log(error);
   }
  }

  async deleteuser(req, res) {
    const id = req.params.id;   // url ID stroe in other ID var and use 
    try {
 
     if (!id) {
      console.log('id is not passed');
     }
     const output = await userMSSql.deleteuser(id);
     res.send(output);
    }
    catch (error) {
     console.log(error);
    }
 }
}
module.exports = new user();