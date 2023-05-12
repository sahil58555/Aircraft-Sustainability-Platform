const express = require("express");
const aircraftController = require("./../Controllers/aircraftController");
const authRouter = require("./../Controllers/authController");

const router = express.Router();

router
  .route("/recycle")
  .get(authRouter.protect, aircraftController.getAllAircraft)
  .post(authRouter.protect, aircraftController.addAircraftToRecycle);

router.route("/import").post(aircraftController.addAircraftToAircraftParts);

module.exports = router;
