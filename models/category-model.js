// Import required dependencies and configuration
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Define Category class extending Model
class Category extends Model {}

// Initialize Category model with its attributes and options
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, 
    timestamps: false, 
    freezeTableName: true, 
    underscored: true, 
    modelName: 'category', 
  }
);

// Export the Category model for use in other modules
module.exports = Category;
