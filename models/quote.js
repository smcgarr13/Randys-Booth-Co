// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Quote extends Model {}

// Quote.init(
//   {
//     quote_date:{
//         type:DataTypes.DATE,
//         allowNull:false,
//     },
//     quote_num:{
//         type:DataTypes.INTEGER,
//         allowNull:false,
//         primaryKey: true,
//     },
//     quoted_to: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       // references: {
//       //   model: 'order',
//       //   key: 'buyer_name',
//       // }
//     },
//     project_name:{
//         type: DataTypes.STRING,
//       // references: {
//       //   model: 'order',
//       //   key: 'order_name',
//       // }
//     },
//     buyer_email: {
//       type: DataTypes.STRING,
//       references: {
//         model: 'order',
//         key: 'buyer_email',
//       }
//     },
//     inventory_quote:{
//         type: DataTypes.INTEGER,
//         // references:{
//         //     model:'Inventory_Quote',
//         //     key:'list_id',
//         // },
//     },  
//     total_cost:{
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     deposit_cost:{
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//     balance_due:{
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'Quote',
//   }
// );

// module.exports = Quote;