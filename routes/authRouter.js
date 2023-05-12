const express = require("express");
const authController = require("./../Controllers/authController");

const router = express.Router();
router.route("/").post(authController.login);

module.exports = router;
