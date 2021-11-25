const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String },
  img: { type: String },
  price: { type: String },
  kind: { type: String },
  descrapion: { type: String },
});

module.exports = mongoose.model("product", productSchema);
