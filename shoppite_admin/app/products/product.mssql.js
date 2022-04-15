const mssqlcon = require('../../dbconnection');
class ProductMSSql { 
   async getAllProducts() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("proc_getallproducts");
    return res.recordset;
  }

  async addproduct(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("id",prod.id)
    .input("category_id", prod.category_id)
    .input("category_value", prod.category_value)
    .input("product_type_name", prod.product_type_name)
    .input("product_type_discription", prod.product_type_discription)
    .input("product_code", prod.product_code)
    .input("created_date", prod.created_date)
    .input("updated_date", prod.updated_date)
    .execute("addproduct");
    return res;
 }
  async updateProduct(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("id", prod.id)
    .input("category_id", prod.category_id)
    .input("category_value", prod.category_value)
    .input("product_type_name", prod.product_type_name)
    .input("product_type_discription", prod.product_type_discription)
    .input("product_code", prod.product_code)
    .input("created_date", prod.created_date)
    .input("updated_date", prod.updated_date)
    .execute("updateProduct");
    return res;
  }
  async deleteProduct(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("product_id", id)
    .execute("deleteProduct");
    return res;
  }
}
module.exports = new ProductMSSql();