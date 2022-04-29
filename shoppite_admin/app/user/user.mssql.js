const mssqlcon = require('../../dbconnection');
class userMSSql { 
    async getAlluser() {
     const conn = await mssqlcon.getConnection();   //connetion
     const res = await conn.request().execute("proc_getalluser"); //procedure
     return res.recordset;
   }

   async adduser(userD) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("user_name", userD.user_name)
    .input("f_name", userD.f_name)
    .input("l_name", userD.l_name)
    .input("email", userD.email)
    .input("password", userD.password)
    .input("phone_number", userD.phone_number)
    .input("address_1", userD.address_1)
    .input("address_2", userD.address_2)
    .input("city", userD.city)
    .input("state", userD.state)
    .input("country", userD.country)
    .input("pincode", userD.pincode)
    .input("is_active", userD.is_active)
    .input("role", userD.role)
    .execute("adduser");    //procedure
    return res;
 }

 async updateuser(userD,id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("id",id)
    .input("user_name", userD.user_name)
    .input("f_name", userD.f_name)
    .input("l_name", userD.l_name)
    .input("email", userD.email)
    .input("password", userD.password)
    .input("phone_number", userD.phone_number)
    .input("address_1", userD.address_1)
    .input("address_2", userD.address_2)
    .input("city", userD.city)
    .input("state", userD.state)
    .input("country", userD.country)
    .input("pincode", userD.pincode)
    .input("is_active", userD.is_active)
    .input("role", userD.role)
    .execute("updateuser");
    return res;
  }

  async deleteuser(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("id", id)
    .execute("deleteuser");
    return res;
  }
  async getUser_by_id(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("id", id)
    .execute("proc_getuser_by_id");
    return res;
  }

}
module.exports = new userMSSql();