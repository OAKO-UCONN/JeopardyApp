const db = require("../models");
module.exports = {
  finadAll: function (req, res) {
    db.Players.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        res.status(422).json(err);
      });
  },
};
