const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {}

Order.init(
  {
    project_num: {
      type: DataTypes.INTEGER,
      references: {
        model: 'quote',
        key: 'quote_num',
      },
      primaryKey:true,
    },
    order_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    buyer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    buyer_email: {
      type: DataTypes.STRING,
    },
    ship_address:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    starting_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    delivery_date: {
      type: DataTypes.DATE, 
      defaultValue:"TBD", 
    },
    project_description:{
      // type: DataTypes.ARRAY(DataTypes.STRING)
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    
    quote_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'quote',
        key: 'quote_num',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Order',
  }
);

module.exports = Order;
