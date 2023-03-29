// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class ProjectTeam extends Model {}

// ProjectTeam.init(
//   {
//     employee_id:{
//         type:DataTypes.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true,
//     },
//     project_num: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'quote',
//         key: 'quote_num',
//       },
//     },
//     employee_name:{
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     employee_role: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     employee_email: {
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'ProjectTeam',
//   }
// );

// module.exports = ProjectTeam;
