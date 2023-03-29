const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WorkOrderList extends Model {}

WorkOrderList.init(
  {
    list_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    workOrder_num:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qty_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Ship to or name of place. 
    units_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    item_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit_cost: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
    },
    total_cost:{
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    item_notes:{
        type:DataTypes.STRING,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'WorkOrderList',
  }
);

module.exports = WorkOrderList;
