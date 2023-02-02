const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

const invoicesRouter = require("./routes/invoice");
const adressRouter = require("./routes/adress");

app.use("/invoices", invoicesRouter);
app.use("/adress", adressRouter);

app.listen(port, () => {
  console.log(`Server is runing on port: ${port}`);
});
