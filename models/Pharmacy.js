const mongoose = require("mongoose");

const pharmacySchema = mongoose.Schema({
  name: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  license: { type: String, required: true },
  ogrn: { type: String, required: false },
  inn: { type: String, required: false },
});

const Pharmacy = mongoose.model("Pharmacy", pharmacySchema);

module.exports = Pharmacy;
