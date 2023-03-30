// Import required dependencies
const router = require('express').Router();

// Import route modules for home and API routes
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const inventoryRoutes = require('../routes/api/inventory-routes');
const teamRoutes = require('./projectGroupRoutes');
const projectRoutes = require('./projectRoutes');
// Register the imported route modules with the main router
// Landing pagee showing all project related to user. 
router.use('/', homeRoutes);

router.use('/projects',projectRoutes);
router.use('/team',teamRoutes);

// Configure the router to use API routes and inventory routes
router.use('/api', apiRoutes);
router.use('/api/i', inventoryRoutes);



// Export the router for use in other modules
module.exports = router;
