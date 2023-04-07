import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  pharmacyName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: '',
  },
  medName: {
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
    type: String,
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
    type: String,
    required: true,
    },
});

export default mongoose.model("Medicine", medicineSchema);