const recyclingpart = require("./../Models/PartsForRecycling");
const aircraftpart = require("./../Models/AircraftPartsDataTable");

const getAllAircraft = async (req, res) => {
  const aircrafts = await aircraftpart.find();
  res.status(200).json({
    status: "success",
    data: aircrafts,
  });
};

const addAircraftToRecycle = async (req, res) => {
  const aircraft = await recyclingpart.create(req.body);
  await aircraftpart.deleteOne({ _id: req.body._id });

  res.status(200).json({ message: "post recycle" });
};

module.exports = {
  getAllAircraft,
  addAircraftToRecycle,
};
