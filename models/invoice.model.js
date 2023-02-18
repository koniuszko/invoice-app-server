const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  item_name: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});
const invoiceSchema = new Schema(
  {
    status: {
      type: String,
      // required: true,
      enum: ["draft", "pending", "paid"],
      default: "draft",
    },
    street: {
      type: String,
      required: true,
      // trim: true,

      default: "",
    },
    city: {
      type: String,
      required: true,
      // trim: true,

      default: "",
    },
    postcode: {
      type: String,
      // required: true,
      trim: true,

      default: "",
    },
    country: {
      type: String,
      // required: true,
      trim: true,

      default: "",
    },
    client_name: {
      type: String,
      // required: true,
      trim: true,

      default: "",
    },
    client_email: {
      type: String,
      // required: true,
      trim: true,

      default: "",
    },
    client_street: {
      type: String,
      // required: true,
      trim: true,

      default: "",
    },
    client_city: {
      type: String,
      // required: true,
      trim: true,

      default: "",
    },
    client_postcode: {
      type: String,
      // required: true,
      trim: true,

      default: "",
    },
    client_country: {
      type: String,
      // required: true,
      trim: true,

      default: "",
    },
    invoice_date: {
      type: Date,
      required: true,
    },
    payment_date: {
      type: Date,
      required: true,
    },
    project_description: {
      type: String,
      // required: true,
      trim: true,

      default: "",
    },
    item_list: {
      type: [itemSchema],
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
