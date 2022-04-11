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
    .input("product_category_id", prod.product_category_id)
    .input("product_name", prod.product_name)
    .input("product_discription", prod.product_discription)
    .input("created_date", prod.created_date)
    .input("updated_date", prod.updated_date)
    .execute("addproduct");
    return res;
 }

 async updateProduct(prod) {
  const conn = await mssqlcon.getConnection();
  const res = await conn.request()
  .input("product_id", prod.product_id)
  .input("product_category_id", prod.product_category_id)
  .input("product_name", prod.product_name)
  .input("product_discription", prod.product_discription)
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