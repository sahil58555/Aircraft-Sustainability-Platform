const express = require("express");
const airlinesController = require("./../Controllers/airlinesController");
const router = express.Router();
const authRouter = require("./../Controllers/authController");

router
  .route("/aircraft")
  .get(
    authRouter.protect,
    authRouter.restrictToAirline,
    airlinesController.getAllAircraft
  )
  .post(
    authRouter.protect,
    authRouter.restrictToAirline,
    airlinesController.addAircraftToRecycle
  );

router
  .route("/buyAircraft")
  .post(
    authRouter.protect,
    authRouter.restrictToAirline,
    airlinesController.buyAndRemoveAircraft
  );

module.exports = router;
