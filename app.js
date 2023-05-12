const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const express = require("express");
const app = express();

app.use(express.json());

const adminRouter = require("./routes/adminRouter");
const aircraftManufacturersRouter = require("./routes/aircraftManufacturersRouter");
const airlinesRouter = require("./routes/airlinesRoter");
const recyclingRouter = require("./routes/recyclingRouter");

app.use("/api/admin", adminRouter);
app.use("/api/aircraft", aircraftManufacturersRouter);
app.use("/api/airline", airlinesRouter);
app.use("/api/recycle", recyclingRouter);

module.exports = app;
