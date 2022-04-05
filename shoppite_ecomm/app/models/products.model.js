const { Double } = require("mongodb");


module.exports = mongoose => {
  require('mongoose-double')(mongoose);
  var schema = mongoose.Schema(
    {
      product_name: String,
      product_discription: String,
      product_category_id: String,
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

  const Products = mongoose.model("products", schema);
  return Products;
};