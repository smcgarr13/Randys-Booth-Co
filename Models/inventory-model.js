const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const Project = require('./project');

class Inventory extends Model {}

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
      item_cost: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      total_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
      available_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    //   project_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //   model: 'project',
    //   key: 'id',
    // },
  }, 
  
  //     created_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: DataTypes.NOW,
    //   },
    //   updated_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: DataTypes.NOW,
    //   },

// },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'inventory',
    }
);

module.exports = Inventory;



