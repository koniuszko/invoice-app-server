const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adressSchema = new Schema(
  {
    street: {
      type: String,
      required: true,
      trim: true,
      minLength: 5,
    },
    city: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
    },
    postcode: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 6,
    },
    country: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
    },
  },
  { timestamps: true }
);

const Adress = mongoose.model("Adress", adressSchema);

module.exports = Adress;
