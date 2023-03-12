const router = require("express").Router();
let Address = require("../models/adress.model");

router.route("/").get((req, res) => {
  Address.find()
    .then((address) => res.json(address))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const street = req.body.street;
  const city = req.body.city;
  const postcode = req.body.postcode;
  const country = req.body.country;

  const newAddress = new Address({ street, city, postcode, country });

  newAddress
    .save()
    .then(() => res.json("Address added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").put((req, res) => {
  Address.findById(req.params.id)
    .then((address) => {
      address.street = req.body.street;
      address.city = req.body.city;
      address.postcode = req.body.postcode;
      address.country = req.body.country;

      address
        .save()
        .then(() => res.json("Address updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
