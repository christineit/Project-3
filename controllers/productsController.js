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
      .findOne({ productname: "christine" })
      .then((dbModel) => {
        console.log('got this back from search!!', dbModel)
        res.json(dbModel)
      })
      .catch((err) => {
        console.log('error', err);
        res.status(422).json(err)
      })
  },
  sellProduct: function (req, res) {
    db.Product
      .findOneAndUpdate({ _id: req.params.id }, { $set: { selling: true } }, { new: true })
      .then((dbModel) => {
        console.log('got this back from search!!', dbModel)

      })
      .catch((err) => {
        console.log('error', err);
        res.status(422).json(err)
      })

  }

};