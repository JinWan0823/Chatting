const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User muse type name"],
    unique: true,
  },
  pwd: {
    type: String,
    required: [true, "User use type pwd"],
  },
  token: {
    type: String,
  },
  online: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
