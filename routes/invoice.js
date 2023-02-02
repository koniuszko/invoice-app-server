const router = require("express").Router();
let Invoice = require("../models/invoice.model");

router.route("/").get((req, res) => {
  Invoice.find()
    .then((invoices) => res.json(invoices))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
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

// router.route("/update/:id").put((req, res) => {
//   Adress.findById(req.params.id)
//     .then((adress) => {
//       adress.street = req.body.street;
//       adress.city = req.body.city;
//       adress.postcode = req.body.postcode;
//       adress.country = req.body.country;

//       adress
//         .save()
//         .then(() => res.json("Adress updated!"))
//         .catch((err) => res.status(400).json("Error: " + err));
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// });

module.exports = router;
