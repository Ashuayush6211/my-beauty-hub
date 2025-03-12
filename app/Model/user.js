const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: String,
  userName: { type: String, unique: true },
  mobile: String,
  email: { type: String, unique: true },
  location: String,
  password: String,
});

module.exports = mongoose.model("User", UserSchema);
