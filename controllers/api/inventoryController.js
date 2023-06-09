// Import required dependencies and models
const { Category, Inventory } = require('../../models');
const { Op } = require('sequelize');

// Define controller functions for inventory operations
// GET all inventory items
exports.getAllInventories = async (req, res) => {
    try {
      const inventories = await Inventory.findAll();
      res.status(200).json(inventories);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

// GET one inventory item by ID
exports.getInventoryById = async (req, res) => {
    try {
      const inventory = await Inventory.findByPk(req.params.id);
      if (!inventory) {
        return res.status(404).json({ error: 'Inventory item not found' });
      }
      res.json(inventory);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Server error' });
    }
  };

  // Get inventory items by category
  exports.getInventoryByCategory = async (req, res) => {
  try {
    const category = req.query.category;

    const inventoryItems = await Inventory.findAll({
      where: {
        category_id: category,
      },
      include: [Category],
    });

    const inventory = inventoryItems.map((item) => item.get({ plain: true }));
    res.render('inventory', { inventory });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching the inventory data.' });
  }
};

  // Get inventory items by category Id
  exports.getInventoryByCategoryId = async (req, res) => {
    try {
      const inventoryItems = await Inventory.findAll({
        where: {
          category_id: req.params.id,
        },
        include: [Category],
      });
  
      const inventory = inventoryItems.map((item) => item.get({ plain: true }));
      res.render('inventory', { inventory });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching the inventory data.' });
    }
  };

  // Get all inventory items
  exports.getAllInventory = async (req, res) => {
    try {
      const inventory = await Inventory.findAll({
        include: [Category],
      });
      res.render('inventory', { inventory: inventory });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching the inventory data.' });
    }
  };

  // Get inventory item for editing
  exports.getInventoryItemForEditing = async (id) => {
    try {
      const inventoryItem = await Inventory.findByPk(id, {
        include: [Category],
      });
  
      if (!inventoryItem) {
        throw new Error('Inventory item not found');
      }
  
      return inventoryItem.get({ plain: true });
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

// POST a new inventory item
exports.createInventory = async (req, res) => {
  try {
    const inventory = await Inventory.create(req.body);
    if (req.headers.accept.includes('application/json')) {
      res.status(200).json(inventory);
    } else {
      res.redirect('/inventory');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// PUT an update to an inventory item
exports.updateInventory = async (req, res) => {
  try {
    const inventory = await Inventory.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (req.headers.accept.includes('application/json')) {
      res.status(200).json(inventory);
    } else {
      res.redirect('/inventory');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// DELETE an inventory item
exports.deleteInventory = async (req, res) => {
    try {
      const inventory = await Inventory.destroy({
        where: {
          id: req.params.id
        }
      });
      if (!inventory) {
        return res.status(404).json({ error: 'Inventory item not found' });
      }
      res.status(200).json({ message: 'Inventory item deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

// Search for inventory items by query
exports.searchInventory = async (req, res) => {
  const query = req.query.query;
  
  try {
    const searchResults = await Inventory.findAll({
      where: {
        [Op.or]: [
          { item_name: { [Op.like]: '%' + query + '%' } },
           { id: { [Op.like]: '%' + query + '%' } }
        ]
   },
    include: [Category]
  });
    const inventory = searchResults.map((item) => item.get({ plain: true }));
      res.render('inventory', { inventory });
  } catch (err) {
      console.error('Search error:', err); // Add this line
      res.status(500).json({ error: 'An error occurred while searching the inventory.' });
    }
  };

  // Render inventory landing page with fetched categories
  exports.renderInventoryLandingPage = async (req, res) => {
    try {
      const categories = await Category.findAll({});
      res.render('inventory-landing', { categories });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching the categories.' });
    }
  };

