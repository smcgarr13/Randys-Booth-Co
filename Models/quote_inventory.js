const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inventory_Quote extends Model {}

Inventory_Quote.init(
  {
    qInventory_num:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
    },
    inventory_num:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
    },
    quantiy:{
        type:DataTypes.INTEGER,
    },
    item_description:{
        type:DataTypes.STRING,
    },
    unit_price:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_price:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Inventory_Quote',
  }
);

module.exports = Inventory_Quote;