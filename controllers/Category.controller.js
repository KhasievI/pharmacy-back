const Category = require("../models/Category");

module.exports.categoryController = {
  addCat: async (req, res) => {
    try {
      const cat = await Category.create({
        name: req.body.name,
      });
      return res.json(cat);
    } catch (error) {
      console.log(error.massage);
      return res.status(400).json({ message: error.message });
    }
  },
  deleteCat: async (req, res) => {
    try {
      const cat = Category.findByIdAndDelete(req.params.id);
      return res.json(cat);
    } catch (error) {
      console.log(error.massage);
      return res.status(400).json({ message: error.message });
    }
  },
  editCat: async (req, res) => {
    try {
      const cat = await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      return res.json(cat);
    } catch (error) {
      console.log(error.massage);
      return res.status(400).json({ message: error.message });
    }
  },
  getCat: async (req, res) => {
    try {
      const cat = await Category.find();
      return res.json(cat);
    } catch (error) {
      console.log(error.massage);
      return res.status(400).json({ message: error.message });
    }
  },
  getCatById: async (req, res) => {
    try {
      const cat = await Category.findById(req.params.id);
      return res.json(cat);
    } catch (error) {
      console.log(error.massage);
      return res.status(400).json({ message: error.message });
    }
  },
};
