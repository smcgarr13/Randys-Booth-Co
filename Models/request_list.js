const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RequestList extends Model {}

RequestList.init(
  {
    list_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    project_num: {
      type: DataTypes.STRING,
    },
    qty_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    units_type: {
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
    modelName: 'RequestList',
  }
);

module.exports = RequestList;
