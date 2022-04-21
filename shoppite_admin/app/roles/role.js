const roleMSSql = require('./role.mssql');

class role {
    async getAllrole(req, res) {
      try {
         const output = await roleMSSql.getAllrole();
         res.send(output);
         console.log(output);
      }
      catch (error) {
      console.log(error);
    }
 }
}
module.exports = new role();