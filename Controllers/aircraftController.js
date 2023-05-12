const recyclingpart = require("./../Models/PartsForRecycling");
const aircraftpart = require("./../Models/AircraftPartsDataTable");
const filterAircraft = require("./../utils/filterAircraft");

const getAllAircraft = async (req, res) => {
  const aircrafts = await aircraftpart.find();
  const filterAircrafts = filterAircraft(aircrafts);

  res.status(200).json({
    status: "success",
    data: filterAircrafts,
  });
};

const addAircraftToRecycle = async (req, res) => {
  const aircraft = await recyclingpart.create(req.body);
  await aircraftpart.deleteOne({ _id: req.body._id });

  res.status(200).json({ message: "aircraft added to recycle" });
};

const addAircraftToAircraftParts = async (req, res) => {

  const data = await aircraftpart.create(req.body);

  res.status(200).json({
    status: "aircraft imported",
  });
};

const importData = async (aircraft) => {
  const data = await aircraftpart.create(aircraft);
};

module.exports = {
  getAllAircraft,
  addAircraftToRecycle,
  addAircraftToAircraftParts,
  importData,
};
