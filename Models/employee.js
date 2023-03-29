// const { Sequelize, Model } = require('sequelize');
// const sequelize = require('../config/connection');

// class Employee extends Model {}

// Employee.init(
//   {
//     user_id: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     user_email: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//     area_of_work: {
//       type: Sequelize.ENUM('Sales', 'Engineering', 'Fabrication'),
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'Employee',
//   }
// );

// Employee.associate = function(models) {
//   Employee.belongsToMany(models.Project, {
//     through: 'EmployeeProject',
//     foreignKey: 'employee_id',
//     otherKey: 'project_id',
//     as: 'active_projects',
//   });
// };

// module.exports = Employee;

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // username: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
