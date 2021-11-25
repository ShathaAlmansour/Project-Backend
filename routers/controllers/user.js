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
const update = (req, res) => {
  const { id } = req.params;
  const { name, password, email } = req.body;
  userModel
    .findOneAndUpdate({ _id: id }, { name, password, email }, { new: true })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};



const removeUserCart = (req, res) => {
  const { email, _id } = req.params;
  userModel
    .findOneAndUpdate(
      { email: email },
      { $pull: { favoriteSchema: _id } },
      { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const cartUsercheck = (req, res) => {
  const { email, ObjectId } = req.params;
  console.log(email, ObjectId);
  userModel.findOne({ ObjectId: req.params.ObjectId }).then((user) => {
    userModel
      .findOneAndUpdate(
        { email: email },
        { $push: { favoriteSchema: ObjectId } },
        { new: true }
      )
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};
const getCart = (req, res) => {
  const { email } = req.params;
  userModel
    .find({ email: email })
    .populate("favoriteSchema")
    .exec()
    .then((result) => {
      res.send(result[0].favoriteSchema);
    })
    .catch((err) => {
      res.send(err);
    });
};
const remove = (req, res) => {
  const { id } = req.params;
  const { name, password, email } = req.body;
  userModel
    .findOneAndRemove({ _id: id }, { new: true })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { 
  creatUser, 
  getAlluser,
  update,
  removeUserCart,
  getCart,
  remove,
  cartUsercheck,

};
