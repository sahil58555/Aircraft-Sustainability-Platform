const express = require("express");
const aircraftController = require("./../Controllers/aircraftController")

const router = express.Router();

router
  .route("/recycle")
  .get(aircraftController.getAllAircraft)
  .post(aircraftController.addAircraftToRecycle);

module.exports = router;
