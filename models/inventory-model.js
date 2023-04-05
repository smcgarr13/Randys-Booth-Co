// Import required dependencies and modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Category = require('./category-model');

// Define the Inventory model, extending Sequelize's Model class
class Inventory extends Model {}

// Initialize the Inventory model with its attributes and options
Inventory.init(
    {
      id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
      item_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      item_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      unit_cost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
      quantity_instock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
      available_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
      category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  }, 
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'inventory',
    }
);

// Define the association between Inventory and Category models
Inventory.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category',
});

// Export the Inventory model for use in other modules
module.exports = Inventory;



