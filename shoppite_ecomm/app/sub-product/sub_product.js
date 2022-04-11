const sub_productsMssql = require('./sub_product.mssql');
class sub_products {
    async getAllsub_products(req, res) {
      try {
         const output = await sub_productsMssql.getAllsub_products();
         res.send(output);
      }
      catch (error) {
      console.log(error);
    }
    
 }
 async addsub_products(req, res) {
   try {
     const output = await sub_productsMssql.addsub_products(req.body);
     res.send(output);
   }
   catch (error) {
    console.log(error);
   }
 }

 async updatesub_products(req, res) {
   try {
     const output = await sub_productsMssql.updatesub_products(req.body);
     res.send(output);
  }
  catch (error) {
  console.log(error);
 }
}

async deletesub_products(req, res) {
   const id = req.params.id;
   try {
    if (!id) {
     console.log('id is not passed');
    }
    const output = await sub_productsMssql.deletesub_products(id);
    res.send(output);
   }
   catch (error) {
    console.log(error);
   }
 }
}
module.exports = new sub_products();