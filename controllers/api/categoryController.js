// Import required models
const { Category, Inventory } = require('../../models');

// Define controller function to fetch all categories and their associated inventory items
exports.getAllCategories = async () => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Inventory }]
    });
    return categories;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// Define controller function to fetch a category and its associated inventory items by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Inventory }]
    });

    if (!category) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// Define controller function to create a new category
exports.createCategory = async (req, res) => {
  try {
    const { category_name } = req.body;

    if (!category_name) {
      res.status(400).json({ message: 'Category name cannot be null!' });
      return;
    }

    const category = await Category.create({
      category_name
    });

    res.status(201).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// Define controller function to update a category by ID
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    await category.update(req.body);
    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// Define controller function to delete a category by ID
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    await category.destroy();
    res.json({ message: 'Category deleted successfully!' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};