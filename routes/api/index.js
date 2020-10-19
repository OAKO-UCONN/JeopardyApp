const router = require("express").Router();
const scoreRoutes = require("./players");

router.use("/players", scoreRoutes);
module.exports = router;
