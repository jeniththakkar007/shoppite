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
    .input("product_type_name", prod.product_type_name)
    .input("product_type_discription", prod.product_type_discription)
    .input("product_created_date", prod.product_created_date)
    .input("product_updated_date", prod.product_updated_date)
    .execute("addcategory");
    return res;
 }
  async updatecategory(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("category_id", prod.category_id)
    .input("product_type_name", prod.product_type_name)
    .input("product_type_discription", prod.product_type_discription)
    .input("product_created_date", prod.product_created_date)
    .input("product_updated_date", prod.product_updated_date)
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