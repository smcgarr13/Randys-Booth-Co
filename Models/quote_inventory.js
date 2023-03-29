// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Inventory_Quote extends Model {}

// Inventory_Quote.init(
//   {

// // 
//     list_id:{
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey:true,
//     },
//     // Identifiers for elements in model
//     qInventory_num:{
//         type:DataTypes.INTEGER,
//         allowNull:false,
//         reference:{
//             references: {
//                 model: 'quote',
//                 key: 'quote_num',
//               },
//         }
//     },
//     inventory_num:{
//         type:DataTypes.INTEGER,
//         allowNull:false,
//         autoIncrement: true,
//     },
//     quantiy:{
//         type:DataTypes.INTEGER,
//     },
//     item_description:{
//         type:DataTypes.STRING,
//     },
//     item_code:{
//         type: DataTypes.INTEGER,
//     },
//     unit_price:{
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     total_price:{
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     }, 
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'Inventory_Quote',
//   }
// );

// module.exports = Inventory_Quote;