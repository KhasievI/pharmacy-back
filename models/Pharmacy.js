import mongoose from "mongoose";

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
  logo: {
    type: String,
    default: ''
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

export default mongoose.model("Pharmacy", pharmacySchema);