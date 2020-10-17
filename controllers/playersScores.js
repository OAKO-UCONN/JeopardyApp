const db = require("../models");
module.exports = {
  finadAll: function (req, res) {
    db.Players.find(req.query);
  },
};
