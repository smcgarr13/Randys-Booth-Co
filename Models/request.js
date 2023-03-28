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
        type:DataTypes.INTEGER,
        allowNull: false,

    },
    request_num: {
      type: DataTypes.STRING,
      primaryKey:true,
    },
    project_num: {
        type: DataTypes.INTEGER,
        references: {
          model: 'quote',
          key: 'quote_num',
        },
      primaryKey:true,
      },
    request_to:{
        type: DataTypes.STRING,
    },
    project_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ship_to: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Ship to or name of place. 
    To_desc: {
      type: DataTypes.STRING,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    required_date: {
        // Can be end of quote, needed date for request,
      type: DataTypes.DATE, 
      allowNull: false, 
    },
    total_cost:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
      // type: DataTypes.ARRAY(DataTypes.STRING)
      // type: DataTypes.ARRAY(DataTypes.STRING)
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Request',
  }
);

module.exports = Request ;
