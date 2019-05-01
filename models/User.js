const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is Required"
      },
      password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
          function(input) {
            return input.length >= 6;
          },
          "Password should be longer."
        ]
      },
      userCreated: {
        type: Date,
        default: Date.now
      },
      
      products: [{
          type: Schema.type.ObjectId,
          ref: "Product"
      }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
