const express = require("express");
const recyclingController = require('./../Controllers/recyclingController')
const authRouter = require("./../Controllers/authController");

const router = express.Router();

router
  .route("/status")
  .get(authRouter.protect, recyclingController.getAircraftsStatus)
  .patch(authRouter.protect, recyclingController.updateStatusOfAircraft)

module.exports = router;
