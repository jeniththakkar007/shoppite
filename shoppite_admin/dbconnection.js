const mssql = require('mssql');
class DBConnection {
  async getConnection() {
     try {
       return await mssql.connect({
              user: 'sqluser',
              password: 'sa2022',
              server: 'localhost',
              database: 'Shoppite',
              port: 1433,
              synchronize: true,
              trustServerCertificate: true
       });
    }
    catch(error) {
      console.log(error);
    }
  }
}
module.exports = new DBConnection();