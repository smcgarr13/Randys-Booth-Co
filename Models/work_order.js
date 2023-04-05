// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class WorkOrder extends Model {}

// WorkOrder.init(
//   {
//     project_num: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'quote',
//         key: 'quote_num',
//       },
//       primaryKey:true,
//     },
//     due_date: {
//       type: DataTypes.DATE, 
//       allowNull: false, 
//     },
//     project_manager:{
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     customer_name:{
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     job_num:{
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'workOrderList',
//         key: 'list_id',
//       },
//     },
//     job_desc: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     back_Matl:{
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     buttons:{
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     back_Matl:{
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     back_Matl:{
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     po_num: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     // Ship to or name of place. 
 
//     order_date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
 
//       // type: DataTypes.ARRAY(DataTypes.STRING)
//       // type: DataTypes.ARRAY(DataTypes.STRING)
//     },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'WorkOrder',
//   }
// );

// module.exports = WorkOrder;
