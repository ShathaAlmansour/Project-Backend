const userModel = require("../../DB/models/userSchema");
const mongoose = require("mongoose");

const creatUser = (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new userModel({
    name,
    email,
    password,
  });
  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAlluser = (req, res) => {
  userModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { creatUser, getAlluser };
