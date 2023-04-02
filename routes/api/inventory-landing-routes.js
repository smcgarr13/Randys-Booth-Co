const express = require('express');
const router = express.Router();
const withAuth = require('../../utils/auth');
const { getAllCategories, getCategoryById } = require('../../controllers/api/categoryController');

router.get('/', withAuth, async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.render('inventory-landing', { categories, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route for specific category page
router.get('/:id', withAuth, async (req, res) => {
  try {
    const category = await getCategoryById(req.params.id);
    res.render('specific-category', { category, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    if (err.message === 'No category found with this id!') {
      res.status(404).json({ message: err.message });
    } else {
      res.status(500).json(err);
    }
  }
});
// router.get('/:id', async (req, res) => {
//   try {
//     withAuth(req, res, async () => {
//       const category = await getCategoryById(req.params.id);
//       res.render('specific-category', { category, loggedIn: req.session.loggedIn });
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;