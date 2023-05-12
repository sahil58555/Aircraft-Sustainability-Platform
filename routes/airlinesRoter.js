const express = require("express");
const airlinesController = require('./../Controllers/airlinesController')
const router = express.Router();
const authRouter = require("./../Controllers/authController");

router
  .route("/aircraft")
  .get(authRouter.protect, airlinesController.getAllAircraft)
  .post(authRouter.protect, airlinesController.addAircraftToRecycle);

router
  .route("/buyAircraft")
  .post(authRouter.protect, airlinesController.buyAndRemoveAircraft);

module.exports = router;
