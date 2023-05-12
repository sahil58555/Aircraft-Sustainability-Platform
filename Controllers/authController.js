const User = require("./../Models/UserTable");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const createJWTToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user || password != user.password) {
    return res.status(401).json({
      status: "failed",
      message: "invalid user email or password",
    });
  }

  const token = createJWTToken(user._id);
  req.userType = user.userType;

  res.cookie("jwtToken", token);

  res.status(201).json({
    message: "login successful",
    token,
  });
};

const protect = async (req, res, next) => {
  const token = req.cookies.jwtToken;

  if (!token) {
    return res.status(401).json({
      status: "failed",
      message: "plz login again",
    });
  }

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const user = await User.findById({ _id: decoded.id });
    req.userType = user.userType;
  } catch (err) {
    return res.status(401).json({
      status: "failed",
      message: "token not verify",
    });
  }

  next();
};

const restrictToAdmin = (req, res, next) => {
  if (req.userType != "admin") {
    return res.status(401).json({
      status: "failed",
      message: "You are not authorized",
    });
  }
  next();
};

const restrictToAirline = (req, res, next) => {
  if (req.userType != "airline") {
    return res.status(401).json({
      status: "failed",
      message: "You are not authorized",
    });
  }
  next();
};

const restrictToManufacturer = (req, res, next) => {
  if (req.userType != "manufacturer") {
    return res.status(401).json({
      status: "failed",
      message: "You are not authorized",
    });
  }
  next();
};

const restrictToRecycle = (req, res, next) => {
  if (req.userType != "recycle") {
    return res.status(401).json({
      status: "failed",
      message: "You are not authorized",
    });
  }
  next();
};

module.exports = {
  login,
  protect,
  restrictToAdmin,
  restrictToAirline,
  restrictToManufacturer,
  restrictToRecycle,
};
