const recyclingpart = require("./../Models/PartsForRecycling");
const aircraftpart = require("./../Models/AircraftPartsDataTable");
const filterAircraft = require("./../utils/filterAircraft");
const excelData = require("./../importAircraftData");

const getAllAircraft = async (req, res) => {
  const aircrafts = await aircraftpart.find();
  const filterAircrafts = (req.userType === 'manufacturer') ? filterAircraft(aircrafts) : aircrafts;

  res.status(200).json({
    status: "success",
    result: filterAircrafts.length,
    data: filterAircrafts,
  });
};

const addAircraftToRecycle = async (req, res) => {
  const aircraft = await recyclingpart.create(req.body);
  await aircraftpart.deleteOne({ _id: req.body._id });

  res.status(200).json({ message: "aircraft added to recycle" });
};

const addAircraftToAircraftParts = async (req, res) => {

  const limit = req.params.limit || 5;
  const data = await aircraftpart.create(excelData(limit));

  res.status(200).json({
    status: "aircraft imported",
  });
};

module.exports = {
  getAllAircraft,
  addAircraftToRecycle,
  addAircraftToAircraftParts,
};
