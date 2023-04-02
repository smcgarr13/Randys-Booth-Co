// Import required dependencies and models
const router = require('express').Router();
const { Category, Inventory, Project } = require('../../Models');
const categoryRoutes = require('./category-routes');
const inventoryController = require('../../controllers/api/inventoryController');
const projectController = require('../../controllers/api/projectController');
const { getInventoryItemForEditing } = require('../../controllers/api/inventoryController');

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

// Route for fetching all projects. 
router.get('/projects', projectController.getProjects);

// Route for fetching all inventory items
router.get('/inventory', inventoryController.getAllInventory);

// Route for fetching inventory items by Id
router.get('/inventory/:id', inventoryController.getInventoryByCategoryId);

// // Route for fetching inventory item for editing
// router.get('/inventory/edit/:id', inventoryController.getInventoryItemForEditing);

// Route to render the inventory landing page with fetched categories
router.get('/inventory-landing', inventoryController.renderInventoryLandingPage);

// routes for rendering the category page
router.get('/Sheet-Goods/:id', inventoryController.getInventoryByCategory);
router.get('/Hardwood/:id', inventoryController.getInventoryByCategory);
router.get('/Veneer/:id', inventoryController.getInventoryByCategory);
router.get('/Foam/:id', inventoryController.getInventoryByCategory);

router.get('/inventory/edit/:id', withAuth, async (req, res) => {
  try {
    const inventoryItem = await inventoryController.getInventoryItemForEditing(req, { params: { id: req.params.id } });
    res.render('edit-inventory', { inventory: inventoryItem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching the inventory item.' });
  }
});


// Export the router for use in other modules
module.exports = router;


// // Route for fetching all projects. 
// router.get('/projects', async (req, res) => {
//   const dbProjectData = await Project.findAll();
//   const projects = dbProjectData.map((project) =>
//     project.get({ plain: true })
//   );
 
//   res.render('Project', {dbProjectData});

//   });
// // Define the route to fetch and display inventory items by category ID
// router.get('/inventory/:id', async (req, res) => {
//   var inventoryItems = await Inventory.findAll({
//     where: {
//       category_id: req.params.id,
//     },
//     include: [
//       Category,
//     ],
//   });
//   const inventory = inventoryItems.map((item) => item.get({ plain: true }));

//   res.render('inventory', { inventory });
// });

// // Define the route to fetch and display all inventory items
// router.get('/inventory', async (req, res) => {
//   try {
//     const inventory = await Inventory.findAll({
//       include: [Category],
//     });
//     res.render('inventory', { inventory: inventory });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'An error occurred while fetching the inventory data.' });
//   }
// });

// // Route to fetch and display inventory item for editing
// router.get('/inventory/edit/:id', async (req, res) => {
//   try {
//     const inventoryItem = await Inventory.findByPk(req.params.id, {
//       include: [Category],
//     });

//     if (!inventoryItem) {
//       return res.status(404).json({ error: 'Inventory item not found' });
//     }

//     res.render('edit-inventory', { inventory: inventoryItem.get({ plain: true }) });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'An error occurred while fetching the inventory item.' });
//   }
// });

// // // Define the route to render the inventory landing page
// // router.get('/inventory-landing', async (req, res) => {
// //   var categories = await Category.findAll({})
// //   res.render('inventory-landing', categories);
// // });

// // Route to render the inventory landing page with fetched categories
// router.get('/inventory-landing', async (req, res) => {
//   try {
//     const categories = await Category.findAll({});
//     res.render('inventory-landing', { categories });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'An error occurred while fetching the categories.' });
//   }
// });