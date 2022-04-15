const mssqlcon = require('../../dbconnection');
class categoryMSSql { 
   async getAllcategory() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("proc_getallcategory");
    return res.recordset;
  }
  async addcategory(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("id",prod.id)
    .input("category_name", prod.category_name)
    .input("category_discription", prod.category_discription)
    .input("category_created_date", prod.category_created_date)
    .input("category_updated_date", prod.category_updated_date)
    .execute("addcategory");
    return res;
 }
  async updatecategory(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("id",prod.id)
    .input("category_name", prod.category_name)
    .input("category_discription", prod.category_discription)
    .input("category_created_date", prod.category_created_date)
    .input("category_updated_date", prod.category_updated_date)
    .execute("updatecategory");
    return res;
  }
  async deletecategory(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("category_id", id)
    .execute("deletecategory");
    return res;
  }
}
module.exports = new categoryMSSql();