const express = require("express");
const recyclingController = require("./../Controllers/recyclingController");
const authRouter = require("./../Controllers/authController");

const router = express.Router();

router
  .route("/status")
  .get(
    authRouter.protect,
    authRouter.restrictToRecycle,
    recyclingController.getAircraftsStatus
  )
  .patch(
    authRouter.protect,
    authRouter.restrictToRecycle,
    recyclingController.updateStatusOfAircraft
  );

module.exports = router;
