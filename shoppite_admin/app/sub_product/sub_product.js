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

 async getAllSubProduct_by_id(req, res) {
  const id = req.params.id;
  try {
   if (!id) {
    console.log('id is not passed');
   }
   const output = await subProductMssql.getAllSubProduct_by_id(id);
   res.send(output);
  }
  catch (error) {
   console.log(error);
  }
}

async search_Sub_Data(req, res) {
  const product_id = req.body.product_id;
  const category_id = req.body.category_id;
  const sub_product_name = req.body.sub_product_name;
  console.log(req.body);
  try {
   const output = await subProductMssql.search_Sub_Data(req.body);
   res.send(output);
  }
  catch (error) {
   console.log(error);
  }
}

 async updatesubProduct(req, res) {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);
  try {
    const output = await subProductMssql.updatesubProduct(req.body,id);
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