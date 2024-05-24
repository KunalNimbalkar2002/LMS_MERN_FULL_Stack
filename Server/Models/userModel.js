const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: "lms-userData",
  }
);

User.index({ email: 1 }, { unique: true });

const model = mongoose.model("LMSUserData", User);

module.exports = model;
