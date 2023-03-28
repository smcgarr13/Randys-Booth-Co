// Import required dependencies and models
const router = require('express').Router();
const { Category, Inventory } = require('../../Models');

// Define the route to render the login page
router.get('/login', (req, res) => {
        // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/profile');
    //   return;
    // }
  res.render('login');
});

// Define the route to fetch and display inventory items by category ID
router.get('/inventory/:id', async (req, res) => {
  var inventoryItems = await Inventory.findAll({
    where: {
      category_id: req.params.id,
    },
    include: [
      Category,
    ],
  });
  const inventory = inventoryItems.map((item) => item.get({ plain: true }));

  res.render('inventory', { inventory });
});

// Define the route to fetch and display all inventory items
router.get('/inventory', async (req, res) => {
  try {
    const inventory = await Inventory.findAll({
      include: [Category],
    });
    res.render('inventory', { inventory: inventory });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching the inventory data.' });
  }
});

// Define the route to render the inventory landing page
router.get('/inventory-landing', async (req, res) => {
  var categories = await Category.findAll({})
  res.render('inventory-landing', categories);
});

// Export the router for use in other modules
module.exports = router;