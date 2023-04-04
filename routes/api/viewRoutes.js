// Import required dependencies and models
const router = require('express').Router();
const { Category, Inventory, Project } = require('../../models');

// Import the route modules and controllers
// const categoryRoutes = require('./category-routes');
const inventoryController = require('../../controllers/api/inventoryController');
const projectController = require('../../controllers/api/projectController');

// Import the utility function for getting an inventory item for editing
const { getInventoryItemForEditing } = require('../../controllers/api/inventoryController');

// Import the authentication middleware
const withAuth = require('../../utils/auth');

// Define the route to render the login page
router.get('/login', (req, res) => {
        // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/profile');
    //   return;
    // }
  res.render('login');
});

// Routes for project and inventory-related API endpoints
router.get('/projects', projectController.getProjects);
router.get('/inventory', inventoryController.getAllInventory);
router.get('/inventory/:id', inventoryController.getInventoryByCategoryId);
router.get('/inventory-landing', inventoryController.renderInventoryLandingPage);

// Route for fetching an inventory item by its ID for editing
router.get('/inventory/edit/:id', withAuth, async (req, res) => {
  try {
    const inventoryItem = await inventoryController.getInventoryItemForEditing(req.params.id);
    if (!inventoryItem) {
      return res.status(404).json({ error: 'Inventory item not found' });
    }
    res.render('edit-inventory', { inventory: inventoryItem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching the inventory item.' });
  }
});

// Routes for rendering the category page
router.get('/Sheet-Goods/:id', inventoryController.getInventoryByCategory);
router.get('/Hardwood/:id', inventoryController.getInventoryByCategory);
router.get('/Veneer/:id', inventoryController.getInventoryByCategory);
router.get('/Foam/:id', inventoryController.getInventoryByCategory);

// Export the router for use in other modules
module.exports = router;