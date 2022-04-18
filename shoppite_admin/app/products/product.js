const productMssql = require('./product.mssql');
class product {
    async getAllProducts(req, res) {
      try {
         const output = await productMssql.getAllProducts();
         res.send(output);
      }
      catch (error) {
      console.log(error);
    }
 }
 async getAllProduct_by_id(req, res) {
  const id = req.params.id;
  try {
   if (!id) {
    console.log('id is not passed');
   }
   const output = await productMssql.getAllProduct_by_id(id);
   res.send(output);
  }
  catch (error) {
   console.log(error);
  }
}
 async addproduct(req, res) {
   try {
     const output = await productMssql.addproduct(req.body);
     res.send(output);
   }
   catch (error) {
    console.log(error);
   }
 }

 async updateProduct(req, res) {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);
   try {
     const output = await productMssql.updateProduct(req.body,id);
     res.send(output);
  }
  catch (error) {
  console.log(error);
 }
 
}
async deleteProduct(req, res) {
   const id = req.params.id;
   try {
    if (!id) {
     console.log('id is not passed');
    }
    const output = await productMssql.deleteProduct(id);
    res.send(output);
   }
   catch (error) {
    console.log(error);
   }
}

}
module.exports = new product();