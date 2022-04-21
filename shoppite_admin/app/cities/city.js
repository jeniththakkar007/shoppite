const cityMSSql = require('./city.mssql');

class city {
    async getAllcity(req, res) {
      try {
         const output = await cityMSSql.getAllcity();
         res.send(output);
         console.log(output);
      }
      catch (error) {
      console.log(error);
    }
 }
}
module.exports = new city();