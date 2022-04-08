module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
        first_name:String,
        last_name:String,
        password:String,
        email_id:String,
        phone_number:Number,
        address_1:String,
        address_2:String,
        pincode:Number,
        state:String,
        city:String,
        user_role:String,
        user_address_type:String
     
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Auth = mongoose.model("auth", schema);
  return Auth;
};