const express = require('express');
const router = express.Router();
const withAuth = require('../../utils/auth');
const { getAllCategories, getCategoryById } = require('../../controllers/api/categoryController');


// Route for the inventory landing page
// router.get('/', async (req, res) => {
//   try {
//     const withAuthCallback = withAuth(req, res, () => {});
//     const categories = await getAllCategories(withAuthCallback);
//     res.render('inventory-landing', { categories, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/', withAuth, async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.render('inventory-landing', { categories, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => {
//   try {
//     const withAuthCallback = withAuth(req, res, () => {});
//     await getAllCategories(withAuthCallback);
//     res.render('inventory-landing', { categories, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/', withAuth, async (req, res) => {
//   try {
//     const categories = await getAllCategories();
//     res.render('inventory-landing', { categories, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Route for specific category page
router.get('/:id', async (req, res) => {
  try {
    withAuth(req, res, async () => {
      const category = await getCategoryById(req.params.id);
      res.render('specific-category', { category, loggedIn: req.session.loggedIn });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/:id', withAuth, async (req, res) => {
//   try {
//     const category = await getCategoryById(req.params.id);
//     res.render('specific-category', { category, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/:id', withAuth, async (req, res) => {
//   try {
//     const category = await getCategoryById(req.params.id);
//     res.render('specific-category', { category, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;






// const express = require('express');
// const router = express.Router();

// const { getAllCategories, getCategoryById } = require('../controllers/categoryController');
// const { withAuth } = require('../utils/auth');

// // router.get('/', async (req, res) => {
// //   try {
// //     // Render the Handlebars template for the inventory landing page
// //     res.render('inventory-landing');
// //   } catch (err) {
// //     res.status(500).json(err);
// //   }
// // });

// // router.get('/', withAuth, async (req, res) => {
// //   try {
// //     const categories = await getAllCategories();
// //     res.render('inventory-landing', { categories, loggedIn: req.session.loggedIn });
// //   } catch (err) {
// //     console.log(err);
// //     res.status(500).json(err);
// //   }
// // });

// router.get('/:id', withAuth, async (req, res) => {
//   try {
//     const category = await getCategoryById(req.params.id);
//     res.render('specific-category', { category, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // route for individual category pages
// router.get('/:categoryName/:categoryId', async (req, res) => {
//   try {
//     const category = await getCategoryById(req.params.categoryId);
//     res.render('category-page', { category });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// // // Import category-related controller functions
// // const {
// //   getAllCategories,
// // } = require('../controllers/categoryController');

// // router.get('/', async (req, res) => {
// //   try {
// //     const categories = await getAllCategories();
// //     res.render('inventory-landing', { categories });
// //   } catch (err) {
// //     res.status(500).json(err);
// //   }
// // });

// // // Import category-related controller functions
// // const {
// //   getCategoryById,
// // } = require('../controllers/categoryController');

// // router.get('/', async (req, res) => {
// //   try {
// //     // Render the Handlebars template for the inventory landing page
// //     res.render('inventory-landing');
// //   } catch (err) {
// //     res.status(500).json(err);
// //   }
// // });

// // Add this new route for individual category pages
// router.get('/:categoryName/:categoryId', async (req, res) => {
//   try {
//     const category = await getCategoryById(req.params.categoryId);
//     res.render('category-page', { category });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
