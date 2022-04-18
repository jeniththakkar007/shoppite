const mssqlcon = require('../../dbconnection');
class categoryMSSql { 
   async getAllcategory() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("proc_getallcategory");
    return res.recordset;
  }
  async getcategory_by_id(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("id", id)
    .execute("proc_getcategory_by_id");
    return res;
  }

  async addcategory(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("category_name", prod.category_name)
    .input("category_code", prod.category_code)
    .input("category_description", prod.category_description)
    .input("category_created_date", prod.category_created_date)
    .input("category_updated_date", prod.category_updated_date)
    .execute("addcategory");
    return res;
 }
  async updatecategory(prod,id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("id",id)
    .input("category_name", prod.category_name)
    .input("category_code", prod.category_code)
    .input("category_description", prod.category_description)
    .execute("proc_getcategory_by_id");
    return res;
  }
  async deletecategory(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("id", id)
    .execute("deletecategory");
    return res;
  }
}
module.exports = new categoryMSSql();