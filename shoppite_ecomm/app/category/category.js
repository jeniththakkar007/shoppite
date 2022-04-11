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
 async addCategory(req, res) {
   try {
     const output = await categoryMssql.addCategory(req.body);
     res.send(output);
   }
   catch (error) {
    console.log(error);
   }
 }

 async updateCategory(req, res) {
   try {
     const output = await categoryMssql.updateCategory(req.body);
     res.send(output);
  }
  catch (error) {
  console.log(error);
 }
}

async deleteCategory(req, res) {
   const id = req.params.id;
   try {
    if (!id) {
     console.log('id is not passed');
    }
    const output = await categoryMssql.deleteCategory(id);
    res.send(output);
   }
   catch (error) {
    console.log(error);
   }
 }
}
module.exports = new category();