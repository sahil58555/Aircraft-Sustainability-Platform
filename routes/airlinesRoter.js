const express = require("express");
const airlinesController = require('./../Controllers/airlinesController')
const router = express.Router();

router
  .route("/aircraft")
  .get(airlinesController.getAllAircraft)
  .post(airlinesController.addAircraftToRecycle);

router
  .route("/buyAircraft")
  .post(airlinesController.buyAndRemoveAircraft);

module.exports = router;
