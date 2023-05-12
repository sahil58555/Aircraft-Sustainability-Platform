const express = require("express");
const adminRouter = require("./../Controllers/adminController");
const authRouter = require("./../Controllers/authController");

const router = express.Router();

router
  .route("/user")
  .get(authRouter.protect, authRouter.restrictToAdmin, adminRouter.getAllUser)
  .post(authRouter.protect, authRouter.restrictToAdmin, adminRouter.addUser)
  .patch(authRouter.protect, authRouter.restrictToAdmin, adminRouter.updateUser)
  .delete(
    authRouter.protect,
    authRouter.restrictToAdmin,
    adminRouter.deleteUser
  );

module.exports = router;
