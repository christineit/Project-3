const db = require("../models");


module.exports = {

  create: function (req, res) {
    db.Product
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getAll: function (req, res) {
    db.Product
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  getSellingProduct: function (req, res) {
    db.Product
      .findOne({ productname: "phone" })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }

};