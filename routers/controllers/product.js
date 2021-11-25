const productModel = require("../../DB/models/productSchema");
const mongoose = require("mongoose");

const creatProduct = (req, res) => {
  const { name, img, price, kind, descrapion } = req.body;

  const newProduct = new productModel({
    name,
    img,
    price,
    kind,
    descrapion,
  });
  newProduct
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const getAllproduct = (req, res) => {
  productModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { creatProduct, getAllproduct };
