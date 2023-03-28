const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
    project_num: {
      type: DataTypes.STRING,
      references: {
        model: 'quote',
        key: 'quote_num',
      },
      primaryKey:true,
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
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Project',
  }
);

module.exports = Project;
