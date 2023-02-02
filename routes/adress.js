const router = require("express").Router();
let Adress = require("../models/adress.model");

router.route("/").get((req, res) => {
  Adress.find()
    .then((adress) => res.json(adress))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const street = req.body.street;
  const city = req.body.city;
  const postcode = req.body.postcode;
  const country = req.body.country;

  const newAdress = new Adress({ street, city, postcode, country });

  newAdress
    .save()
    .then(() => res.json("Adress added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").put((req, res) => {
  Adress.findById(req.params.id)
    .then((adress) => {
      adress.street = req.body.street;
      adress.city = req.body.city;
      adress.postcode = req.body.postcode;
      adress.country = req.body.country;

      adress
        .save()
        .then(() => res.json("Adress updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
