// Import required dependencies
const express = require('express');
const router = express.Router();
const withAuth = require('../../utils/auth');
// const { Inventory, Category } = require('../../Models');
// const { getInventoryByCategory } = require('../../controllers/api/inventoryController');

// Import category-related controller functions
const {
  getAllInventories,
  getInventoryById,
  getInventoryByCategory,
  getInventoryByCategoryId,
  createInventory,
  updateInventory,
  deleteInventory,
  getInventoryItemForEditing,
} = require('../../controllers/api/inventoryController');

// const { getInventoryItemForEditing } = require('../../controllers/api/inventoryController');

// Add route handler for the inventory landing page
router.get('/inventory-landing', withAuth, async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.render('inventory-landing', { categories, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/inventory-landing', withAuth, async (req, res) => {
//   try {
//     // Fetch inventory data from the database
//     const inventoryData = await Inventory.findAll();

//     // Convert inventory data to a format suitable for rendering
//     const inventories = inventoryData.map((inventory) => inventory.get({ plain: true }));

//     // Render the inventory landing page
//     res.render('inventory', { inventories });

//     // Log that the inventory route is being called
//     console.log("Inventory route is being called");

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Define routes for category-related API endpoints
// router.get('/inventories', getAllInventories);
router.get('/', getAllInventories);
router.get('/inventories/:id', getInventoryById);
router.get('/inventories/category/:id', getInventoryByCategoryId);
// router.get('/inventories/category', getInventoryByCategory);
router.get('/category', getInventoryByCategory);
// router.get('/edit/:id', getInventoryItemForEditing);
router.get('/edit/:id', withAuth, getInventoryItemForEditing);
// router.post('/inventories', createInventory);
router.post('/', createInventory);
router.put('/inventories/:id', updateInventory);
router.delete('/inventories/:id', deleteInventory);


// Export the router for use in other modules
module.exports = router;