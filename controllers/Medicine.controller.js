import Medicines from "../models/Medicine.js";


export const addMedicine = async (req, res) => {
  try {
    const medicine = await Medicines.create({
      pharmacyName: req.body.pharmacyName,//наименование аптечной организации
      address: req.body.address,//адрес аптеки
      img: req.body.img,
      medName: req.body.medName,
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
    res.json({
      medicine,
      message: 'Succeeded'
    })
  } catch (error) {
    console.log(error.massage);
    return res.status(400).json({ message: error.message });
  }
}
export const editMedicine = async (req, res) => {
  try {
    const medicine = await Medicines.findByIdAndUpdate(req.params.id, {
      pharmacyName: req.body.pharmacyName,//наименование аптечной организации
      address: req.body.address,//адрес аптеки
      img: req.body.img,
      medName: req.body.medName,
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
    res.json({
      medicine,
      message: 'Succeeded'
    })
  } catch (error) {
    console.log(error.massage);
    return res.status(400).json({ message: error.message });
  }
}
export const deleteMedicine = async (req, res) => {
  try {
    const medicine = await Medicines.findByIdAndDelete(req.params.id);
    res.json({
      medicine,
      message: 'Succeeded'
    })
  } catch (error) {
    console.log(error.massage);
    return res.status(400).json({ message: error.message });
  }
}
export const getMedicines = async (req, res) => {
  try {
    const medicine = await Medicines.find();
    res.json({
      medicine,
      message: 'Succeeded'
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}
export const getMedicineById = async (req, res) => {
  try {
    const medicine = await Medicines.findById(req.params.id);
    res.json({
      medicine,
      message: 'Succeeded'
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}