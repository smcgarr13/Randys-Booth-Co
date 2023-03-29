// Import required dependencies
const express = require('express');
const router = express.Router();

// Import category-related controller functions
const {
  getAllInventories,
  getInventoryById,
  createInventory,
  updateInventory,
  deleteInventory,
} = require('../../controllers/inventoryController');

// Define routes for category-related API endpoints
router.get('/inventories', getAllInventories);
router.get('/inventories/:id', getInventoryById);
router.post('/inventories', createInventory);
// router.post('/', inventoryController.createInventory);
// router.put('/inventories/:id', updateInventory);
router.put('/inventories/:id', async (req, res) => {
  try {
    const result = await updateInventory(req, res);
    if (req.headers.accept.includes('application/json')) {
      res.json(result);
    } else {
      res.redirect('/inventory');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while updating the inventory item.' });
  }
});

router.delete('/inventories/:id', deleteInventory);

// Export the router for use in other modules
module.exports = router;