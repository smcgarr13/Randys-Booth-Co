// Import required dependencies
const router = require('express').Router();
const categoryController = require('../../controllers/categoryController');
const inventoryController = require('../../controllers/inventoryController');
// const withAuth = require('../utils/auth');

// Category API routes
router.get('/categories', categoryController.getAllCategories);
router.get('/categories/:id', categoryController.getCategoryById);
router.post('/categories', categoryController.createCategory);
router.put('/categories/:id', categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);

// Inventory API routes
router.get('/inventories', inventoryController.getAllInventories);
router.get('/inventories/:id', inventoryController.getInventoryById);
router.post('/inventories', inventoryController.createInventory);
router.put('/inventories/:id', inventoryController.updateInventory);
router.delete('/inventories/:id', inventoryController.deleteInventory);

// Export the router for use in other modules
module.exports = router;
