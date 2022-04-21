const mssqlcon = require('../../dbconnection');

class cityMSSql { 
    async getAllcity() {
     const conn = await mssqlcon.getConnection();   //connetion
     const res = await conn.request().execute("proc_getallcity"); //procedure
     return res.recordset;
   }

}
module.exports = new cityMSSql();