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
  const id = req.params.id;
   try {
    console.log(id);
    console.log(req.body);
     const output = await categoryMssql.updatecategory(req.body,id);
     res.send(output);
  }
  catch (error) {
  console.log(error);
 }
}
async getcategory_by_id(req, res) {
  const id = req.params.id;
  try {
   if (!id) {
    console.log('id is not passed');
   }
   const output = await categoryMssql.getcategory_by_id(id);
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