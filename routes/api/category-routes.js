// Import required dependencies
const express = require('express');
const router = express.Router();

// Import category-related controller functions
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../../controllers/api/categoryController');

// Define routes for category-related API endpoints
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

// Export the router for use in other modules
module.exports = router;
