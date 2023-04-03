// Import required dependencies
const router = require('express').Router();

// Import route modules for category, inventory, and user routes
const categoryRoutes = require('../../routes/api/category-routes');
const inventoryRoutes = require('../../routes/api/inventory-routes');
const userRoutes = require('../../routes/api/userRoutes');
const projectRoutes = require('../../routes/api/projectRoutes');
const teamRoutes = require('../../routes/api/projectGroupRoutes');
const requestRoutes = require('../../routes/api/requestRoutes');


// Register the imported route modules with the main API router
router.use('/categories', categoryRoutes);
router.use('/inventories', inventoryRoutes);
router.use('/user', userRoutes);
router.use('/projects',projectRoutes);
router.use('/team',teamRoutes);
router.use('/request',requestRoutes);

// Export the router for use in other modules
module.exports = router;

