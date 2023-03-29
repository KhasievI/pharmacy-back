const Pharmacy = require("../models/Pharmacy");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");

const generateAccesToken = (id, name) => {
  const payload = {
    id,
    name,
  };
  return jwt.sign(payload, secret, { expiresIn: "30d" });
};

module.exports.pharmacyController = {
  registration: async (req, res) => {
    try {
      const { name, password, address, license, ogrn, inn } = req.body;
      const candidate = await Auth.findOne({ name });
      if (candidate) {
        return res.status(400).json({ message: "пользователь с таким именем уже существует" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new Auth({
        name,
        password: hashPassword,
        address,
        license,
        ogrn,
        inn
      });
      if (!name) {
        return res.status(400).json({ message: "Имя пользователя не может быть пустым" });
      }
      if (password.length >= 12 || password.length < 4) {
        return res.status(400).json({
          message: "Пароль не может быть меньше 4 или больше 12 символов",
        });
      }
      await user.save();
      const token = generateAccesToken(user._id, user.name);
      return res.json({ token });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ message: "registration error" });
    }
  },
  login: async (req, res) => {
    try {
      const { name, password } = req.body;
      const user = await Auth.findOne({ name });
      if (!user) {
        return res.status(400).json({ message: `пользователь ${name} не найден` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Введен неверный пароль" });
      }
      const token = generateAccesToken(user._id, user.name);
      return res.json({ token });
    } catch (error) {
      return res.status(400).json({ message: "Login error" });
    }
  },
  editPharmacy: async (req, res) => {
    try {
      const pharmacy = await Pharmacy.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        password: req.body.password,
        address: req.body.address,
        License: req.body.License,
        ogrn: req.body.ogrn,
        inn: req.body.inn,
      })
      return res.json(pharmacy);
    } catch (error) {
      console.log(error.massage);
      return res.status(400).json({ message: error.message });
    }
  },
  deletePharmacy: async (req, res) => {
    try {
      const pharmacy = Pharmacy.findByIdAndDelete(req.params.id);
      return res.json(pharmacy);
    } catch (error) {
      console.log(error.massage);
      return res.status(400).json({ message: error.message });
    }
  },
  getPharmacies: async (req, res) => {
    try {
      const pharmacy = await Pharmacy.find();
      res.json(pharmacy);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },
  getPharmacyById: async (req, res) => {
    try {
      const pharmacy = await Pharmacy.findById(req.params.id);
      res.json(pharmacy);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  }
};