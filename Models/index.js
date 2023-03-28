// Import the Inventory and Category models
const Inventory = require('./inventory-model');
const Category = require('./category-model');

// Define the association: Inventory belongsTo Category
Inventory.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
  
// Define the association: Categories have many Inventory Items
Category.hasMany(Inventory, {
  foreignKey: 'category_id',
});

// Export both models as part of a single object for easier import elsewhere
module.exports = { Inventory, Category };