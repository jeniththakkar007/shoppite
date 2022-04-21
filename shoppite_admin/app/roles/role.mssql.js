const mssqlcon = require('../../dbconnection');

class roleMSSql { 
    async getAllrole() {
     const conn = await mssqlcon.getConnection();   //connetion
     const res = await conn.request().execute("proc_getallrole"); //procedure
     return res.recordset;
   }

}
module.exports = new roleMSSql();