const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Replace with your React app's domain
    next();
  });

app.use(express.json());
app.use(cookieParser());

const adminRouter = require("./routes/adminRouter");
const aircraftManufacturersRouter = require("./routes/aircraftManufacturersRouter");
const airlinesRouter = require("./routes/airlinesRoter");
const recyclingRouter = require("./routes/recyclingRouter");
const authRouter = require("./routes/authRouter");

app.use("/login", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/aircraft", aircraftManufacturersRouter);
app.use("/api/airline", airlinesRouter);
app.use("/api/recycle", recyclingRouter);

module.exports = app;
