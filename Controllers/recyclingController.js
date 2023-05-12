const recyclingpart = require("./../models/PartsForRecycling");
const aircraftpart = require("./../models/AircraftPartsDataTable");

const getAircraftsStatus = async (req, res) => {
  const aircrafts = await recyclingpart.find();
  res.status(200).json({
    status: "success",
    data: aircrafts,
  });
};

const updateStatusOfAircraft = async (req, res) => {
  await recyclingpart.deleteOne({ _id: req.body._id });
  
  req.body.age = 0;
  req.body.condition = "New"

  const aircraft = await aircraftpart.create(req.body);

  res.status(200).json({
    status: "success",
    message: "status updated",
  });
};

module.exports = {
  getAircraftsStatus,
  updateStatusOfAircraft,
};
