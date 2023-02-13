const router = require("express").Router();
let Invoice = require("../models/invoice.model");

router.route("/").get((req, res) => {
  Invoice.find()
    .then((invoices) => res.json(invoices))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/preview/:id").get((req, res) => {
  Invoice.findById(req.params.id)
    .then((invoice) => res.json(invoice))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const status = req.body.status;
  const street = req.body.street;
  const city = req.body.city;
  const postcode = req.body.postcode;
  const country = req.body.country;
  const client_name = req.body.client_name;
  const client_email = req.body.client_email;
  const client_street = req.body.client_street;
  const client_city = req.body.client_city;
  const client_postcode = req.body.client_postcode;
  const client_country = req.body.client_country;
  const invoice_date = Date.parse(req.body.invoice_date);
  const payment_date = Date.parse(req.body.payment_date);
  const project_description = req.body.project_description;
  const item_list = req.body.item_list;

  const newInvoice = new Invoice({
    status,
    street,
    city,
    postcode,
    country,
    client_name,
    client_email,
    client_street,
    client_city,
    client_postcode,
    client_country,
    invoice_date,
    payment_date,
    project_description,
    item_list,
  });

  newInvoice
    .save()
    .then(() => res.json("Invoice added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add/draft").post((req, res) => {
  // const status = req.body.status;
  // const street = req.body.street;
  // const city = req.body.city;
  // const postcode = req.body.postcode;
  // const country = req.body.country;
  // const client_name = req.body.client_name;
  // const client_email = req.body.client_email;
  // const client_street = req.body.client_street;
  // const client_city = req.body.client_city;
  // const client_postcode = req.body.client_postcode;
  // const client_country = req.body.client_country;
  // const invoice_date = Date.parse(req.body.invoice_date);
  // const payment_date = Date.parse(req.body.payment_date);
  // const project_description = req.body.project_description;
  // const item_list = req.body.item_list;

  // const newInvoice = new Invoice({
  //   status,
  //   street,
  //   city,
  //   postcode,
  //   country,
  //   client_name,
  //   client_email,
  //   client_street,
  //   client_city,
  //   client_postcode,
  //   client_country,
  //   invoice_date,
  //   payment_date,
  //   project_description,
  //   item_list,
  // });

  // newInvoice
  //   .save()
  // .then(() => res.json("Draft!"))
  // .catch((err) => res.status(400).json("Error: " + err));
  console.log("draft", req);
});

router.route("/edit/:id").get((req, res) => {
  Invoice.findById(req.params.id)
    .then((invoice) => res.json(invoice))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/edit/:id").put((req, res) => {
  Invoice.findById(req.params.id)
    .then((invoice) => {
      invoice.street = req.body.street;
      invoice.city = req.body.city;
      invoice.postcode = req.body.postcode;
      invoice.country = req.body.country;
      invoice.client_name = req.body.client_name;
      invoice.client_email = req.body.client_email;
      invoice.client_street = req.body.client_street;
      invoice.client_city = req.body.client_city;
      invoice.client_postcode = req.body.client_postcode;
      invoice.client_country = req.body.client_country;
      invoice.invoice_date = Date.parse(req.body.invoice_date);
      invoice.payment_date = Date.parse(req.body.payment_date);
      invoice.project_description = req.body.project_description;
      invoice.item_list = req.body.item_list;

      invoice
        .save()
        .then(() => res.json("Invoice updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/status/:id").put((req, res) => {
  Invoice.findById(req.params.id)
    .then((invoice) => {
      invoice.status = req.body.status;

      invoice
        .save()
        .then(() => res.json("Invoice status updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Invoice.findByIdAndDelete(req.params.id)
    .then(() => res.json("Invoice deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
