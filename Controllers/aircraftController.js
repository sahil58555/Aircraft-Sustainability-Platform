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

  res.status(200).json({ message: "post recycle" });
};

const addAircraftToAircraftParts = async (req, res) => {

  console.log(typeof req.body);
  console.log("Data is importing.....");

  // const newObj = {
  //   partName: aircraft.partName,
  //   materialComposition: aircraft.materialComposition,
  //   age: aircraft.age,
  //   condition: aircraft.condition,
  //   location: aircraft.location,
  //   manufacturer: aircraft.manufacturer,
  //   aircraftModel: aircraft.aircraftModel,
  //   potentialUseCases: aircraft.potentialUseCases,
  //   remanufacturingPotential: aircraft.remanufacturingPotential,
  //   lifeCycleAssessmentScore: aircraft.lifeCycleAssessmentScore
  // }

  const newObj = {
    partName: "Engine",
    materialComposition: "Aluminum",
    age: 42,
    condition: "New",
    location: "North America",
    manufacturer: "Boeing",
    aircraftModel: "Citation X",
    potentialUseCases: "Furniture",
    remanufacturingPotential: 0.236313346216994,
    lifeCycleAssessmentScore: 26.1286084487724,
    abcd: 12121
  }

  const data = await aircraftpart.create(newObj);

  console.log("Data imported");

  res.status(200).json({
    status: "imported"
  })
}

const importData = async (aircraft) => {

  const data = await aircraftpart.create(aircraft);
}

module.exports = {
  getAllAircraft,
  addAircraftToRecycle,
  addAircraftToAircraftParts,
  importData
};
