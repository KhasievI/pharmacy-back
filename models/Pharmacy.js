const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema({
  pharmacyName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  license: {
    type: String,
    required: true,
  },
  ogrn: {
    type: String,
    required: true,
  },
  inn: {
    type: String,
    required: true,
  },
});

const Pharmacy = mongoose.model("Pharmacy", pharmacySchema);

module.exports = Pharmacy;
