const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  username: { type: String, required: true },
  score: { type: Number },
});

const Players = mongoose.models("Players", playerSchema);

module.exports = Players;
