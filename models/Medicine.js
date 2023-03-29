const mongoose = require("mongoose");

const medicineSchema = mongoose.Schema({
  nameOfThePharmacy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Pharmacy",
  },
  pharmacyAaddress: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Pharmacy",
  },
  img: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  methodOfAdministrationAndDose: {
    type: String,
    required: true,
  },
  typeOfDosageForm: {
    type: Number,
    required: true,
  },
  dateOfManufacture: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: String,
    required: true,
  },
  series: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  barcode: {
    type: String,
    required: false,
  },
  storageConditions: {
    type: String,
    required: false,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
    },
});

const Medicine = mongoose.model("Medicine", medicineSchema);

module.exports = Medicine;
