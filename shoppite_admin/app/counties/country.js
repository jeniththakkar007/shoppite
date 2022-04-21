const countryMSSql = require('./country.mssql');

class country {
    async getAllcountry(req, res) {
      try {
         const output = await countryMSSql.getAllcountry();
         res.send(output);
        //  console.log(output);
      }
      catch (error) {
      console.log(error);
    }
 }
}
module.exports = new country();