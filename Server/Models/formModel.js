const mongoose = require("mongoose");

const FormData = new mongoose.Schema(
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
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    isStudent: {
      type: Boolean,
    },
    file: {
      type: String,
    },
  },
  {
    collection: "lms-formData",
  }
);

FormData.index({ email: 1 });

const modell = mongoose.model("LMSFormData", FormData);

module.exports = modell;
