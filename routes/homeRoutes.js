// Import required dependencies
const router = require('express').Router();
// const categoryController = require('../controllers/api/categoryController');
const inventoryController = require('../controllers/inventoryController');
const projectController = require('../controllers/projectController')
// const withAuth = require('../utils/auth');
// login route
router.get('/login', (req, res) => {
    res.render('login');
  });

router.get('/projects',projectController.getProjects);
// rendering login as temporary home page
router.get('/', (req, res) => {
    res.render('login');
  });

router.get('/projects', async (req, res) => {
    const dbProjectData = await Project.findAll();
    const projects = dbProjectData.map((project) =>
      project.get({ plain: true })
    );
   
    res.render('Project', {projects});
  
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
