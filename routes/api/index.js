// Import Routes for API DATABASE
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./category-routes');
const inventoryRoutes = require('./inventory-routes');
const projectRoutes = require('./projectRoutes');
const teamRoutes = require('./projectGroupRoutes');
const requestRoutes = require('./requestRoutes');
const invlandingRoutes = require('./inventory-landing-routes');
// user-related routes
router.use('/user', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/inventories', inventoryRoutes);
router.use('/projects',projectRoutes);
router.use('/team',teamRoutes);
router.use('/request',requestRoutes);
router.use('/inventories/landing',invlandingRoutes);

// Export the router for use in other modules
module.exports = router;
