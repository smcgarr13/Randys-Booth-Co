const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Request extends Model {}

Request .init(
  {
    request_type:{
        // Declare between: Receipt(Delivery),Budgetary Quote, Drawing Request,Purchase Order, Invoice,
        type:DataTypes.STRING,
        allowNull: false,
    },
    request_date:{
        type:DataTypes.DATE,
        allowNull: false,

    },
    request_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,

    },
    project_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    request_to:{
        type: DataTypes.STRING,
    },
    project_name:{
        type: DataTypes.STRING,
    },
    ship_to: {
      type: DataTypes.STRING,
    },
    // Ship to or name of place. 
    To_desc: {
      type: DataTypes.STRING,
    },
    order_date: {
      // type:DataTypes.INTEGER,
      type: DataTypes.DATE,
      allowNull: false,
    },
    required_date: {
        // Can be end of quote, needed date for request,
        // type:DataTypes.INTEGER,
      type: DataTypes.DATE, 
      allowNull: false, 
    },
    total_cost:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Request',
  }
);

module.exports = Request ;
