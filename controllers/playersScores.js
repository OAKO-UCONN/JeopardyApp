const db = require("../models");
module.exports = {
  findAll: function (req, res) {
    db.Players.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        res.status(422).json(err);
      });
  },
  findById: function (req, res) {
    db.Players.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Players.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
