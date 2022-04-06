const { Double } = require("mongodb");

module.exports = mongoose => {
    require('mongoose-double')(mongoose);
    var schema = mongoose.Schema(
      {
        sub_product_name:String,
        sub_product_discription:String,
        sub_product_price:Double,
        sub_product_discount:Number,
        sub_product_quantity:Number,
        product_id:String,
        company_name:String,
        is_available:Boolean
       
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Sub_products = mongoose.model("sub_products", schema);
    return Sub_products;
  };
  