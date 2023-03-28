// Import required dependencies
const router = require('express').Router();

// Import route modules for category, inventory, and user routes
const categoryRoutes = require('../../routes/api/category-routes');
const inventoryRoutes = require('../../routes/api/inventory-routes');
// const userRoutes = require('../../routes/api/userRoutes');

// Register the imported route modules with the main API router
router.use('/categories', categoryRoutes);
router.use('/inventories', inventoryRoutes);
// router.use('/users', userRoutes);

// Export the router for use in other modules
module.exports = router;