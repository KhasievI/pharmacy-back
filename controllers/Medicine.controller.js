const Medicines = require("../models/Medicine");

module.exports.medicineController = {
  addMedicine: async (req, res) => {
    try {
      const medicine = await Medicines.create({
        nameOfThePharmacy: req.body.nameOfThePharmacy,//наименование аптечной организации
        pharmacyAaddress: req.body.pharmacyAaddress,//адрес аптеки
        img: req.body.img,
        name: req.body.name,
        weight: req.body.weight, //вес
        methodOfAdministrationAndDose: req.body.methodOfAdministrationAndDose, // способ применения и дозы
        typeOfDosageForm: req.body.typeOfDosageForm,//вид лекарственной формы (гранулы гомеопатические, капли гомеопатические, мазь гомеопатическая, тритурация гомеопатическая и т.д.)
        dateOfManufacture: req.body.dateOfManufacture, //дата изготовления
        expirationDate: req.body.expirationDate,// дата окончания срока
        series: req.body.series,// серия
        price: req.body.price,// цена
        barcode: req.body.barcode,// штрих-код
        storageConditions: req.body.storageConditions,// условия хранения
        countInStock: req.body.countInStock, //количество в наличии
        category: req.body.category,
      })
      return res.json(medicine);
    } catch (error) {
      console.log(error.massage);
      return res.status(400).json({ message: error.message });
    }
  },
  editMedicine: async (req, res) => {
    try {
      const medicine = await Medicines.findByIdAndUpdate(req.params.id, {
        nameOfThePharmacy: req.body.nameOfThePharmacy,//наименование аптечной организации
        pharmacyAaddress: req.body.pharmacyAaddress,//адрес аптеки
        img:req.body.img,
        name: req.body.name,
        weight: req.body.weight, //вес
        methodOfAdministrationAndDose: req.body.methodOfAdministrationAndDose, // способ применения и доза
        typeOfDosageForm: req.body.typeOfDosageForm,//вид лекарственной формы (гранулы гомеопатические, капли гомеопатические, мазь гомеопатическая, тритурация гомеопатическая и т.д.)
        dateOfManufacture: req.body.dateOfManufacture, //дата изготовления
        expirationDate: req.body.expirationDate,// дата окончания срока
        series: req.body.series,// серия
        price: req.body.price,// цена
        barcode: req.body.barcode,// штрих-код
        storageConditions: req.body.storageConditions,// условия хранения
        countInStock: req.body.countInStock, //количество в наличии
        category: req.body.category,
      })
      return res.json(medicine);
    } catch (error) {
      console.log(error.massage);
      return res.status(400).json({ message: error.message });
    }
  },
  deleteMedicine: async (req, res) => {
    try {
      const medicine = Medicines.findByIdAndDelete(req.params.id);
      return res.json(medicine);
    } catch (error) {
      console.log(error.massage);
      return res.status(400).json({ message: error.message });
    }
  },
  getMedicines: async (req, res) => {
    try {
      const medicines = await Medicines.find();
      res.json(medicines);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },
  getMedicineById: async (req, res) => {
    try {
      const medicine = await Medicines.findById(req.params.id);
      res.json(medicine);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  }
};