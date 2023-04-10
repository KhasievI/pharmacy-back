import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";

import cartRoute from './routes/cart.route.js'
import catsRoute from './routes/category.route.js'
import medRoute from './routes/medicine.route.js'
import pharmRoute from './routes/pharmacy.route.js'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4001;
const NAME = process.env.NAME;
const PASSWORD = process.env.PASSWORD;

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static("uploads"));

app.use("/", cartRoute);
app.use("/", catsRoute);
app.use("/", medRoute);
app.use("/", pharmRoute);

async function start() {
  try {
    await mongoose.connect(`mongodb+srv://${NAME}:${PASSWORD}@cluster0.w5uga6x.mongodb.net/pharmacy`);
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
start();
