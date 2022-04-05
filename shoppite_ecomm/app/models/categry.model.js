const { Double } = require("mongodb");


module.exports = mongoose => {
  require('mongoose-double')(mongoose);
  var schema = mongoose.Schema(
    {
      product_type_name: String,
      product_type_discription: String,
      created_date: Date,
      updated_date: Date
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Categry = mongoose.model("Categry", schema);
  return Categry;
};