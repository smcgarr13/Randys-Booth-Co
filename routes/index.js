// Import required dependencies
const router = require('express').Router();

// Import route modules for home and API routes
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const inventoryRoutes = require('../routes/api/inventory-routes');

// Register the imported route modules with the main router
router.use('/', homeRoutes);

// Configure the router to use API routes and inventory routes
router.use('/api', apiRoutes);
router.use('/api', inventoryRoutes);


// Export the router for use in other modules
module.exports = router;
