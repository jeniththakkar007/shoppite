module.exports = mongoose => {
    
    var schema = mongoose.Schema(
      {
        city_name :String,
        state_id:String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const City = mongoose.model("city", schema);
    return City;
  };
  