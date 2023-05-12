const User = require("./../Models/UserTable");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      result: users.length,
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(200).json({
      status: "user created",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ email: req.body.email });
    res.status(204).json({ message: "user deleted" });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const newUser = await User.updateOne({ email: req.body.email }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      message: "role updated",
      data: newUser,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

module.exports = {
  getAllUser,
  addUser,
  deleteUser,
  updateUser,
};
