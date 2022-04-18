const subProductMssql = require('./sub_product.mssql');
class subProduct {
    async getAllsubProduct(req, res) {
      try {
         const output = await subProductMssql.getAllsubProduct();
         res.send(output);
      }
      catch (error) {
      console.log(error);
    }
} 
    async addsubProduct(req, res) {
        try {
          const output = await subProductMssql.addsubProduct(req.body);
          res.send(output);
        }
        catch (error) {
         console.log(error);
        }
      
 }

 async updatesubProduct(req, res) {
  try {
    const output = await subProductMssql.updatesubProduct(req.body);
    res.send(output);
 }
 catch (error) {
 console.log(error);
}
}
async deletesubProduct(req, res) {
  const id = req.params.id;
  try {
   if (!id) {
    console.log('id is not passed');
   }
   const output = await subProductMssql.deletesubProduct(id);
   res.send(output);
  }
  catch (error) {
   console.log(error);
  }
}
}
module.exports = new subProduct();