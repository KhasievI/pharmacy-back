const Pharmacy = require("../models/Pharmacy");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");

const generateAccesToken = (id, pharmacyName) => {
  const payload = {
    id,
    pharmacyName,
  };
  return jwt.sign(payload, secret, { expiresIn: "7d" });
};

module.exports.pharmacyController = {
  registration: async (req, res) => {
    try {
      const { pharmacyName, password, address, license, ogrn, inn } = req.body;
      const candidate = await Pharmacy.findOne({ pharmacyName });
      if (candidate) {
        return res.status(400).json({ message: "пользователь с таким именем уже существует" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const pharmacy = new Pharmacy({
        pharmacyName,
        password: hashPassword,
        address,
        license,
        ogrn,
        inn
      });
      if (!pharmacyName) {
        return res.status(400).json({ message: "Имя пользователя не может быть пустым" });
      }
      if (password.length >= 12 || password.length < 4) {
        return res.status(400).json({
          message: "Пароль не может быть меньше 4 или больше 12 символов",
        });
      }
      await pharmacy.save();
      const token = generateAccesToken(pharmacy._id, pharmacy.pharmacyName);
      return res.json({ token });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ message: "registration error" });
    }
  },

  login: async (req, res) => {
    try {
      const { pharmacyName, password } = req.body;
      const user = await Pharmacy.findOne({ pharmacyName });
      if (!user) {
        return res.status(400).json({ message: `пользователь ${pharmacyName} не найден` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Введен неверный пароль" });
      }
      const token = generateAccesToken(user._id, user.pharmacyName);
      return res.json({ token });
    } catch (error) {
      return res.status(400).json({ message: "Login error" });
    }
  },

  editPharmacy: async (req, res) => {
    try {
      const user = await Pharmacy.findByIdAndUpdate(req.params.id, {
        pharmacyName: req.body.pharmacyName,
        password: req.body.password,
        address: req.body.address,
        license: req.body.license,
        ogrn: req.body.ogrn,
        inn: req.body.inn,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  getPharmacies: async (req, res) => {
    try {
      const users = await Pharmacy.find();
      res.json({ users });
    } catch (error) { }
  },

  getPharmacyById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await Pharmacy.findById(id);
      console.log(user);
      res.json({ user });
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({ message: error.message });
    }
  },

  deletePharmacy: async (req, res) => {
    try {
      const userId = req.params;
      const user = await Pharmacy.findOneAndDelete({ userId });
      res.json(user);
    } catch (error) {
      res.json({ message: error.message });
    }
  }
}