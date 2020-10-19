const router = require("express").Router();
const scoreRoutes = require("./highscores");

router.use("/highscores", scoreRoutes);
module.exports = router;
