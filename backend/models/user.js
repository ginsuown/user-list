const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fName: String,
    lName: String,
    sex: String,
    age: Number,
    password: String
  },
  { collection: "users" }
);

module.exports = mongoose.model("user", UserSchema);
