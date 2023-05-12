const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DATABSE CONNECTED"));

app.listen(3000, () => {
  console.log("Server is running");
});
