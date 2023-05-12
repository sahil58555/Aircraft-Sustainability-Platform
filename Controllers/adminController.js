const User = require("./../models/UserTable");

const getAllUser = async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    result: users.length,
    data: users,
  });
};

const addUser = async (req, res) => {
  const user = await User.create(req.body);

  res.status(200).json({
    status: "user created",
    data: user,
  });
};

const deleteUser = async (req, res) => {
  await User.deleteOne({ email: req.body.email });
  res.status(204).json({ message: "user deleted" });
};

const updateUser = async (req, res) => {
  const newUser = await User.updateOne({ email: req.body.email }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    message: "role updated",
    data: newUser,
  });
};

module.exports = {
  getAllUser,
  addUser,
  deleteUser,
  updateUser,
};
