// Import required dependencies
const express = require('express');
const router = express.Router();

// Import category-related controller functions
const {
  getAllInventories,
  getInventoryById,
  createInventory,
  updateInventory,
  deleteInventory,
} = require('../../controllers/inventoryController');

// Define routes for category-related API endpoints
router.get('/inventories', getAllInventories);
router.get('/inventories/:id', getInventoryById);
router.post('/inventories', createInventory);
router.put('/inventories/:id', updateInventory);
router.delete('/inventories/:id', deleteInventory);

// Export the router for use in other modules
module.exports = router;