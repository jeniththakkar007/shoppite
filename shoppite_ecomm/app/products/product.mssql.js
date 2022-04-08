const mssqlcon = require('../../dbconnection');
class ProductMSSql { 
   async getAllProducts() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("proc_getallproducts");
    return res.recordset;
  }
}
module.exports = new ProductMSSql();