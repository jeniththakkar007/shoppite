const mssqlcon = require('../../dbconnection');

class countryMSSql { 
    async getAllcountry() {
     const conn = await mssqlcon.getConnection();   //connetion
     const res = await conn.request().execute("proc_getallcountry"); //procedure
     return res.recordset;
   }

}
module.exports = new countryMSSql();