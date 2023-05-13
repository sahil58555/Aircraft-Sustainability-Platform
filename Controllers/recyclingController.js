const recyclingpart = require("../Models/PartsForRecycling");
const aircraftpart = require("../Models/AircraftPartsDataTable");

const getAircraftsStatus = async (req, res) => {
  const query = {...req.query};
  const excludedFields = ['page', 'sort', 'limit', 'fields'];

  excludedFields.forEach(ele => delete query[ele]);

  let queryDB = recyclingpart.find(query);

  if(req.query.sort) {
    queryDB = queryDB.sort(req.query.sort.split(',').join(' '));
  }

  if(req.query.fields) {
    queryDB = queryDB.select(req.query.fields.split(',').join(' '));
  }

  if(req.query.page) {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 5;
    const skip = (page - 1) * limit;

    queryDB = queryDB.skip(skip).limit(limit);
  }

  const aircrafts = await queryDB;
  res.status(200).json({
    status: "success",
    result: aircrafts.length,
    data: aircrafts,
  });
};

const updateStatusOfAircraft = async (req, res) => {
  await recyclingpart.deleteOne({ _id: req.body._id });

  req.body.age = 0;
  req.body.condition = "New";

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
