const mssqlcon = require('../../dbconnection');

class stateMSSql { 
    async getAllstate() {
     const conn = await mssqlcon.getConnection();   //connetion
     const res = await conn.request().execute("proc_getallstate"); //procedure
     return res.recordset;
   }

}
module.exports = new stateMSSql();