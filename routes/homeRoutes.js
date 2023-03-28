// Import required dependencies
const router = require('express').Router();
// const categoryController = require('../controllers/api/categoryController');
const inventoryController = require('../controllers/inventoryController');
// const withAuth = require('../utils/auth');

// login route
router.get('/login', (req, res) => {
    res.render('login');
  });

// Non-API routes for rendering the pages
router.get('/Sheet-Goods/:id', inventoryController.getInventoryByCategory);
router.get('/Hardwood/:id', inventoryController.getInventoryByCategory);
router.get('/Veneer/:id', inventoryController.getInventoryByCategory);
router.get('/Foam/:id', inventoryController.getInventoryByCategory);

// search route for footer
router.get('/search', inventoryController.searchInventory);

// Export the router for use in other modules
module.exports = router;
