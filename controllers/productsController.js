const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.Product.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getAll: function (req, res) {
    db.Product.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getSellingProduct: function (req, res) {
    db.Product.findOne({ productname: "christine" })
      .then(dbModel => {
        console.log("got this back from search!!", dbModel);
        res.json(dbModel);
      })
      .catch(err => {
        console.log("error", err);
        res.status(422).json(err);
      });
  },
  sellProduct: function (req, res) {
    console.log("WE HIT THE SELL PRODUCTS!!!!", req.params, req.body);

    var testProduct = {
      type: 22,
      description: "toms test product",
      price: 100,
      images: [],
      keywords: ["shoes", "running"],
      selling: false,
      category: "Shoes",
      size: 12,
      productname: "Toms Shoe Sporty!!"
    };

    // db.Product.create(testProduct).then(function(data) {
    //   console.log("saved this", data);
    // });

    var mongoose = require("mongoose");
    var id = mongoose.Types.ObjectId(req.params.id);

    db.Product.findById(req.params.id, function (err, user) {

      console.log('hellooooo', user)
    });

    // db.Product.findOneAndUpdate(
    //   { "_id": "15cd1fe499c40973250018025" },
    //   { selling: true },
    //   { upsert: true }
    // )
    //   .then(dbModel => {
    //     console.log("got this back from search!!", dbModel);
    //   })
    //   .catch(err => {
    //     console.log("error", err);
    //     res.status(422).json(err);
    //   });
  }
};
