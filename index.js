const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4001;
const NAME = process.env.NAME;
const PASSWORD = process.env.PASSWORD;

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static("uploads"));

app.use(require("./routes/category.route"));
app.use(require("./routes/medicine.route"));
app.use(require("./routes/pharmacy.route"));

async function start() {
  try {
    await mongoose.connect(`mongodb+srv://${NAME}:${PASSWORD}@cluster0.w5uga6x.mongodb.net/pharmacy`);
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
start();
