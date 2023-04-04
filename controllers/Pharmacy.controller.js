const Pharmacy = require("../models/Pharmacy");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");
const { dirname } = require("path");
const { fileURLToPath } = require("url");
const path = require("path");

module.exports.pharmacyController = {
  registration: async (req, res) => {
    try {
      const { pharmacyName, password, logo, address, license, ogrn, inn } = req.body;
      if (!pharmacyName) {
        return res.status(400).json({ message: "Имя пользователя не может быть пустым" });
      }
      if (password.length < 4 || password.length > 12) {
        return res.status(400).json({
          message: "Пароль не может быть меньше 4 или больше 12 символов",
        });
      }
      const candidate = await Pharmacy.findOne({ pharmacyName });
      if (candidate) {
        return res.status(400).json({ message: "Пользователь с таким именем уже существует" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);

      // let fileName = Date.now().toString() + req.files.logo.name;
      // req.files.logo.mv(path.join(__dirname, '..', 'uploads', fileName));

      const pharmacy = new Pharmacy({
        pharmacyName,
        password: hashPassword,
        logo: req.files && req.files.logo ? fileName : "",
        address,
        license,
        ogrn,
        inn,
      });
      await pharmacy.save();
      const token = jwt.sign(
        {
          id: pharmacy._id,
        },
        secret,
        { expiresIn: '30d' },
      )
      return res.json({
        token,
        pharmacy,
        message: 'Регистрация прошла успешно',
      });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ message: "Ошибка регистрации" });
    }
  },

  login: async (req, res) => {
    try {
      const { pharmacyName, password } = req.body;
      const pharmacy = await Pharmacy.findOne({ pharmacyName });
      if (!pharmacy) {
        return res.status(400).json({ message: `Пользователь ${pharmacyName} не найден` });
      }
      const validPassword = bcrypt.compareSync(password, pharmacy.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Введен неверный пароль" });
      }
      const token = jwt.sign(
        {
          id: pharmacy._id,
        },
        secret,
        { expiresIn: '30d' },
      )
      return res.json({
        token,
        pharmacy,
        message: 'Вы вошли в систему.',
      })
    } catch (error) {
      return res.status(400).json({ message: "Ошибка входа" });
    }
  },

  editPharmacy: async (req, res) => {
    try {
      const pharmacy = await Pharmacy.findByIdAndUpdate(req.params.id, {
        pharmacyName: req.body.pharmacyName,
        password: req.body.password,
        logo: req.body.logo,
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
      const pharmacies = await Pharmacy.find();
      return res.json({ pharmacies });
    } catch (error) { }
  },

  getPharmacyById: async (req, res) => {
    try {
      const pharmacy = await Pharmacy.findById(req.pharmacyId)
      if (!pharmacy) {
        return res.status(404).json({
          message: 'Такого юзера не существует.',
        })
      }

      const token = jwt.sign(
        {
          id: pharmacy._id,
        },
        secret,
        { expiresIn: '30d' },
      )
      return res.json({
        token,
        pharmacy,
      })
    } catch (error) {
      res.status(500).json({ message: 'Нет доступа.' })
    }
  },

  deletePharmacy: async (req, res) => {
    try {
      const pharmacyId = req.params;
      const pharmacy = await Pharmacy.findOneAndDelete({ pharmacyId });
      res.json({
        pharmacy,
        message: 'Удалено'
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  }
}