const express = require("express");
const aircraftController = require("./../Controllers/aircraftController");
const authRouter = require("./../Controllers/authController");

const router = express.Router();

router
  .route("/recycle")
  .get(
    authRouter.protect,
    authRouter.restrictToManufacturer,
    aircraftController.getAllAircraft
  )
  .post(
    authRouter.protect,
    authRouter.restrictToManufacturer,
    aircraftController.addAircraftToRecycle
  );

router.route("/import").post(aircraftController.addAircraftToAircraftParts);

module.exports = router;
