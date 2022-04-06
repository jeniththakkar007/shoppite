module.exports = mongoose => {
    
    var schema = mongoose.Schema(
      {
        state_name :String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const State = mongoose.model("state", schema);
    return State;
  };
  