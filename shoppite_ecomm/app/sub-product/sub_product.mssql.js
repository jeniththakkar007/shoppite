const mssqlcon = require('../../dbconnection');
class sub_productsMssql { 
   async getAllsub_products() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("proc_getallsub_products");
    return res.recordset;
  }
  async addsub_products(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("product_id", prod.product_id)
    .input("company_name", prod.company_name)
    .input("sub_product_name", prod.sub_product_name)
    .input("sub_product_discription", prod.sub_product_discription)
    .input("sub_product_price", prod.sub_product_price)
    .input("sub_product_discount", prod.sub_product_discount)
    .input("sub_product_quantity", prod.sub_product_quantity)
    .input("is_available", prod.is_available)
    .execute("addsub_products");
    return res;
 }

 async updatesub_products(prod) {
  const conn = await mssqlcon.getConnection();
  console.log(prod);
  const res = await conn.request()
    .input("sub_product_id", prod.sub_product_id)
    .input("product_id", prod.product_id)
    .input("company_name", prod.company_name)
    .input("sub_product_name", prod.sub_product_name)
    .input("sub_product_discription", prod.sub_product_discription)
    .input("sub_product_price", prod.sub_product_price)
    .input("sub_product_discount", prod.sub_product_discount)
    .input("sub_product_quantity", prod.sub_product_quantity)
    .input("is_available", prod.is_available)
  .execute("updatesub_products");
  return res;
}

async deletesub_products(id) {
  const conn = await mssqlcon.getConnection();
  const res = await conn.request()
  .input("sub_product_id", id)
  .execute("deletesub_products");
  return res;
}


}
module.exports = new sub_productsMssql();