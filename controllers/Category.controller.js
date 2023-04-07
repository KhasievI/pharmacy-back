import Category from "../models/Category.js";

export const addCat = async (req, res) => {
  try {
    const cat = await Category.create({
      name: req.body.name,
    });
    return res.json(cat);
  } catch (error) {
    console.log(error.massage);
    return res.status(400).json({ message: error.message });
  }
}
export const deleteCat = async (req, res) => {
  try {
    const cat = await Category.findByIdAndDelete(req.params.id);
    return res.json(cat);
  } catch (error) {
    console.log(error.massage);
    return res.status(400).json({ message: error.message });
  }
}
export const editCat = async (req, res) => {
  try {
    const cat = await Category.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    });
    return res.json(cat);
  } catch (error) {
    console.log(error.massage);
    return res.status(400).json({ message: error.message });
  }
}
export const getCat = async (req, res) => {
  try {
    const cat = await Category.find();
    return res.json(cat);
  } catch (error) {
    console.log(error.massage);
    return res.status(400).json({ message: error.message });
  }
}
export const getCatById = async (req, res) => {
  try {
    const cat = await Category.findById(req.params.id);
    return res.json(cat);
  } catch (error) {
    console.log(error.massage);
    return res.status(400).json({ message: error.message });
  }
}
