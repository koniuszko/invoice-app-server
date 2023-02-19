const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  item_name: {
    type: String,
    trim: true,
    default: "",
  },
  quantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
});
const invoiceSchema = new Schema(
  {
    status: {
      type: String,
      enum: ["draft", "pending", "paid"],
      default: "draft",
    },
    street: {
      type: String,
      trim: true,
      default: "",
    },
    city: {
      type: String,
      required: true,
      default: "",
    },
    postcode: {
      type: String,
      trim: true,
      default: "",
    },
    country: {
      type: String,
      trim: true,
      default: "",
    },
    client_name: {
      type: String,
      trim: true,
      default: "",
    },
    client_email: {
      type: String,
      trim: true,
      default: "",
    },
    client_street: {
      type: String,
      trim: true,
      default: "",
    },
    client_city: {
      type: String,
      trim: true,
      default: "",
    },
    client_postcode: {
      type: String,
      trim: true,
      default: "",
    },
    client_country: {
      type: String,

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
