const mssqlcon = require('../../dbconnection');
class ProductMSSql { 
   async getAllProducts() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("proc_getallproducts");
    return res.recordset;
  }
  async getAllProduct_by_id(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("id", id)
    .execute("proc_getproduct_by_id");
    return res;
  }

  async search_Pro_Data(productData) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("category_id", productData.category_id)
    .input("product_type_name", productData.product_type_name)
    .input("product_code", productData.product_code)
    .execute("proc_searchProduct_by_code");
    return res;
  }

  async addproduct(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("category_id", prod.category_id)
    .input("product_type_name", prod.product_type_name)
    .input("product_type_description", prod.product_type_description)
    .input("product_code", prod.product_code)
    .execute("addproduct");
    return res;
 }
  async updateProduct(prod,id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("id", id)
    .input("category_id", prod.category_id)
    .input("product_type_name", prod.product_type_name)
    .input("product_type_description", prod.product_type_description)
    .input("product_code", prod.product_code)
    .execute("updateProduct");
    return res;
  }
  async deleteProduct(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("id", id)
    .execute("deleteProduct");
    return res;
  }

}
module.exports = new ProductMSSql();