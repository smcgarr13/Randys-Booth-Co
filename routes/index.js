// Import required dependencies
const router = require('express').Router();

// Import route modules
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const inventoryLandingRoutes = require('./api/inventory-landing-routes');
const categoryRoutes = require('./api/category-routes'); 
const inventoryRoutes = require('./api/inventory-routes');
const projectRoutes = require('./api/projectRoutes');

// Define routes for the landing page, APIs, and various modules
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/inventory-landing', inventoryLandingRoutes);
router.use('/categories', categoryRoutes);
router.use('/inventories', inventoryRoutes);
router.use('/projects', projectRoutes);

// Export the router for use in other modules
module.exports = router;
