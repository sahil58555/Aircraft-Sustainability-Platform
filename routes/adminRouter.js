const express = require("express");
const adminRouter = require("./../Controllers/adminController");
const authRouter = require("./../Controllers/authController");

const router = express.Router();

router
  .route("/user")
  .get(authRouter.protect, adminRouter.getAllUser)
  .post(authRouter.protect, adminRouter.addUser)
  .patch(authRouter.protect, adminRouter.updateUser)
  .delete(authRouter.protect, adminRouter.deleteUser);

module.exports = router;
