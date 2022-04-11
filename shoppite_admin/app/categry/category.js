const categoryMssql = require('./category.mssql');
class category {
    async getAllcategory(req, res) {
      try {
         const output = await categoryMssql.getAllcategory();
         res.send(output);
      }
      catch (error) {
      console.log(error);
    }
 }
 async addcategory(req, res) {
   try {
     const output = await categoryMssql.addcategory(req.body);
     res.send(output);
   }
   catch (error) {
    console.log(error);
   }
 }

 async updatecategory(req, res) {
   try {
     const output = await categoryMssql.updatecategory(req.body);
     res.send(output);
  }
  catch (error) {
  console.log(error);
 }
 
}
async deletecategory(req, res) {
   const id = req.params.id;
   try {
    if (!id) {
     console.log('id is not passed');
    }
    const output = await categoryMssql.deletecategory(id);
    res.send(output);
   }
   catch (error) {
    console.log(error);
   }
}
}
module.exports = new category();