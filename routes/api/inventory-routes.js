const express = require('express');
const router = express.Router();
const { Inventory } = require('/Users/mchong/bootcamp/projects/Randys-Booth-Co/Models/inventory-model');

// GET all inventory items
router.get('/inventories', async (req, res) => {
  try {
    const inventories = await Inventory.findAll();
    res.status(200).json(inventories);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one inventory item
router.get('/inventories/:id', async (req, res) => {
    try {
      const inventory = await Inventory.findByPk(req.params.id);
      if (!inventory) {
        return res.status(404).json({ error: 'Inventory item not found' });
      }
      res.json(inventory);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

// POST a new inventory item
router.post('/inventories', async (req, res) => {
  try {
    const inventory = await Inventory.create(req.body);
    res.status(200).json(inventory);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT an update to an inventory item
router.put('/inventories/:id', async (req, res) => {
  try {
    const inventory = await Inventory.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(inventory);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE an inventory item
router.delete('/inventories/:id', async (req, res) => {
    try {
      const inventory = await Inventory.destroy({
        where: {
          id: req.params.id
        }
      });
      if (!inventory) {
        return res.status(404).json({ error: 'Inventory item not found' });
      }
      res.status(200).json({ message: 'Inventory item deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;