const aircraftpart = require("./../Models/AircraftPartsDataTable");

const {getAllAircraft, addAircraftToRecycle} = require("./aircraftController")

const buyAndRemoveAircraft = async (req, res) => {

  await aircraftpart.deleteOne({_id: req.body._id})
  res.status(200).json({ 
    status: "success",
    message: "aircraft buyed"
  });
};

module.exports = {
  getAllAircraft,
  addAircraftToRecycle,
  buyAndRemoveAircraft
};
