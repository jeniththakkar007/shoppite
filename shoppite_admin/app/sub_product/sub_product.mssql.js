const mssqlcon = require('../../dbconnection');
class subProductMSSql { 
   async getAllsubProduct() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("proc_getallsub_products");
    return res.recordset;
  }
  async getAllSubProduct_by_id(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("id", id)
    .execute("proc_getsubProduct_by_id");
    return res;
  }

  async addsubProduct(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("category_id", prod.category_id)
    .input("product_id", prod.product_id)
    .input("sub_product_name", prod.sub_product_name)
    .input("sub_product_description", prod.sub_product_description)
    .input("sub_product_price", prod.sub_product_price)
    .input("sub_product_discount", prod.sub_product_discount)
    .input("sub_product_quantity", prod.sub_product_quantity)
    .input("is_available", prod.is_available)
    .execute("addsubProduct");
    return res;
 }

 async updatesubProduct(prod,id) {
  const conn = await mssqlcon.getConnection();
  const res = await conn.request()
  .input("id", id)
  .input("category_id", prod.category_id)
  .input("product_id", prod.product_id)
  .input("sub_product_name", prod.sub_product_name)
  .input("sub_product_description", prod.sub_product_description)
  .input("sub_product_price", prod.sub_product_price)
  .input("sub_product_discount", prod.sub_product_discount)
  .input("sub_product_quantity", prod.sub_product_quantity)
  .input("is_available", prod.is_available)
  .execute("updatesubProduct");
  return res;
}

async search_Sub_Data(sProduct) {
  const conn = await mssqlcon.getConnection();
  const res = await conn.request()
  .input("category_id", sProduct.category_id)
  .input("product_id", sProduct.product_id)
  .input("sub_product_name", sProduct.sub_product_name)
  .execute("proc_search_Sub_Product_by_code");
  return res;
}

async deletesubProduct(id) {
  const conn = await mssqlcon.getConnection();
  console.log(id);
  const res = await conn.request()
  .input("id", id)
  .execute("deletesub_products");
  return res;
}
}
module.exports = new subProductMSSql();