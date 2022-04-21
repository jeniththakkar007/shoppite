const stateMSSql = require('./state.mssql');

class state {
    async getAllstate(req, res) {
      try {
         const output = await stateMSSql.getAllstate();
         res.send(output);
        //  console.log(output); CHECK FOR DATA FOR RETURN OR NOT
      }
      catch (error) {
      console.log(error);
    }
 }
}
module.exports = new state();