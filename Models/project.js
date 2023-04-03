const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
    project_num: {
      type: DataTypes.STRING,
      primaryKey:true,
      allowNull: false,
    },
    Project_name:{
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
    },
    starting_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    delivery_date: {
      type: DataTypes.DATE, 
      // defaultValue:"TBD", 
    },
    // project_description:{
    //   type: DataTypes.ARRAY(DataTypes.STRING)
    // },
    complete:{
      type:DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;
