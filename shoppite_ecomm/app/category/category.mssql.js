const mssqlcon = require('../../dbconnection');
class categoryMssql { 
   async getAllcategory() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("proc_getallcategory");
    return res.recordset;
  }
  async addCategory(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("product_type_name", prod.product_type_name)
    .input("product_type_discription", prod.product_type_discription)
    .input("product_created_date", prod.product_created_date)
    .input("product_updated_date", prod.product_updated_date)
    .execute("addCategory");
    return res;
 }

 async updateCategory(prod) {
  const conn = await mssqlcon.getConnection();
  const res = await conn.request()
  .input("category_id", prod.category_id)
  .input("product_type_name", prod.product_type_name)
    .input("product_type_discription", prod.product_type_discription)
    .input("product_created_date", prod.product_created_date)
    .input("product_updated_date", prod.product_updated_date)
  .execute("updateCategory");
  return res;
}

async deleteCategory(id) {
  const conn = await mssqlcon.getConnection();
  const res = await conn.request()
  .input("category_id", id)
  .execute("deleteCategory");
  return res;
}

}
module.exports = new categoryMssql();