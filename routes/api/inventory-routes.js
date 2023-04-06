// Import required dependencies
const express = require('express');
const router = express.Router();
const withAuth = require('../../utils/auth');

// Import inventory-related controller functions
const {
  // getAllInventories,
  getAllInventory,
  getInventoryById,
  getInventoryByCategory,
  getInventoryByCategoryId,
  createInventory,
  updateInventory,
  deleteInventory,
  getInventoryItemForEditing,
} = require('../../controllers/api/inventoryController');

// // Route handler for the inventory landing page
// router.get('/inventory-landing', withAuth, async (req, res) => {
//   try {
//     const categories = await getAllCategories();
//     res.render('inventory-landing', { categories, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Route for rendering the inventory page
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const inventory = await getAllInventory();
//     res.render('inventory', { inventory, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/', withAuth, async (req, res) => {
  try {
    console.log('Trying to get inventory data'); // Add this line
    const inventory = await getAllInventory();
    console.log('Got inventory data:', inventory); // Add this line
    res.render('inventory', { inventory, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log('Error getting inventory data:', err); // Add this line
    res.status(500).json(err);
  }
});

// Routes for inventory-related API endpoints
// router.get('/', getAllInventories);
router.get('/', getAllInventory);
router.get('/inventories/:id', getInventoryById);
router.get('/inventories/category/:id', getInventoryByCategoryId);
router.get('/category', getInventoryByCategory);
router.get('/edit/:id', withAuth, getInventoryItemForEditing);
router.post('/', createInventory);
router.put('/:id', updateInventory);
router.delete('/:id', deleteInventory);

// Export the router for use in other modules
module.exports = router;