// Import required dependencies
const express = require('express');
const router = express.Router();
const withAuth = require('../../utils/auth');
const { Inventory } = require('../../Models');

// Import category-related controller functions
const {
  getAllInventories,
  getInventoryById,
  createInventory,
  updateInventory,
  deleteInventory,
} = require('../../controllers/api/inventoryController');

// Add route handler for the inventory landing page
router.get('/inventory-landing', withAuth, async (req, res) => {
  try {
    // Fetch inventory data from the database
    const inventoryData = await Inventory.findAll();

    // Convert inventory data to a format suitable for rendering
    const inventories = inventoryData.map((inventory) => inventory.get({ plain: true }));

    // Render the inventory landing page
    res.render('inventory', { inventories });

    // Log that the inventory route is being called
    console.log("Inventory route is being called");

  } catch (err) {
    res.status(500).json(err);
  }
});

// Define routes for category-related API endpoints
router.get('/inventories', getAllInventories);
router.get('/inventories/:id', getInventoryById);
router.post('/inventories', createInventory);
router.put('/inventories/:id', updateInventory);
router.delete('/inventories/:id', deleteInventory);

// Export the router for use in other modules
module.exports = router;