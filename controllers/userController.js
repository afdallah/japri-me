const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../models/users");

exports.getAll = async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    status: true,
    data: users
  });
};

exports.create = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);

  const user = await User.create({ ...req.body, password: hash });

  res.status(201).json({
    status: true,
    data: user
  });
};

exports.update = async (req, res) => {
  console.log(req.params.id);
  const user = await User.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  );

  res.status(200).json({
    status: true,
    data: user
  });
};

exports.delete = async (req, res) => {
  const user = await User.findByIdAndDelete({ _id: req.params.id });

  res.status(200).json({
    status: true,
    data: user
  });
};

// Authentication
exports.login = async(req, res) => {
  const user = await User.findOne(req.email);
  const token = jwt.sign({ _id: user.id }, process.env.SECRET_KEY);

  res.status(200).json({
    status: true,
    data: token
  })
 }
