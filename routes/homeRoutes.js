// Import required dependencies and controllers
const router = require('express').Router();
const inventoryController = require('../controllers/api/inventoryController');
const withAuth = require('../utils/auth');
const categoryController = require('../controllers/api/categoryController');

// router.get('/', withAuth, categoryController.getAllCategories);

// login route
router.get('/login', (req, res) => {
    res.render('login');
  });
  
// rendering login as temporary home page
router.get('/', (req, res) => {
    res.render('login');
  });

// route for searching inventory via footer search bar
router.get('/search', inventoryController.searchInventory);

// Export the router for use in other modules
module.exports = router;
