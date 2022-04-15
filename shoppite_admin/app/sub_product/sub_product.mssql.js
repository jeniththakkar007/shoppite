const mssqlcon = require('../../dbconnection');
class subProductMSSql { 
   async getAllsubProduct() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("proc_getallsubProduct");
    return res.recordset;
  }
  async addsubProduct(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("id",prod.id)
    .input("product_id", prod.product_id)
    .input("company_name", prod.company_name)
    .input("sub_product_name", prod.sub_product_name)
    .input("sub_product_discription", prod.sub_product_discription)
    .input("sub_product_price", prod.sub_product_price)
    .input("sub_product_discount", prod.sub_product_discount)
    .input("sub_product_quantity", prod.sub_product_quantity)
    .input("is_available", prod.is_available)
    .execute("addsubProduct");
    return res;
 }

 async updatesubProduct(prod) {
  const conn = await mssqlcon.getConnection();
  const res = await conn.request()
  .input("id",prod.id)
  .input("product_id", prod.product_id)
  .input("company_name", prod.company_name)
  .input("sub_product_name", prod.sub_product_name)
  .input("sub_product_discription", prod.sub_product_discription)
  .input("sub_product_price", prod.sub_product_price)
  .input("sub_product_discount", prod.sub_product_discount)
  .input("sub_product_quantity", prod.sub_product_quantity)
  .input("is_available", prod.is_available)
  .execute("updatesubProduct");
  return res;
}

async deletesubProduct(id) {
  const conn = await mssqlcon.getConnection();
  const res = await conn.request()
  .input("sub_product_id", id)
  .execute("deletesubProduct");
  return res;
}
}
module.exports = new subProductMSSql();