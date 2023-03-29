// Import the Inventory and Category models
const Inventory = require('./inventory-model');
const Category = require('./category-model');
const Project = require('./project');
const ProjectTeam  = require('./project_group');
const Request = require('./request');
const RequestList = require('./request_list');
const Employee = require('./employee')



// Define Belongs for Project
ProjectTeam.belongsTo(Project, {
  foreignKey: 'project_num',
  onDelete: 'CASCADE',
});
Request.belongsTo(Project, {
  foreignKey: 'project_num',
  onDelete: 'CASCADE',
});
RequestList.belongsTo(Request, {
  foreignKey: 'project_num',
  onDelete: 'CASCADE',
});


// Define hasMany asscociations
Project.hasMany(ProjectTeam, {
  foreignKey: 'project_num',
});
Project.hasMany(Request, {
  foreignKey: 'project_num',
});

// Define the association: Inventory belongsTo Category
Inventory.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
  
// Define the association: Categories have many Inventory Items
Category.hasMany(Inventory, {
  foreignKey: 'category_id',
});

// Export both models as part of a single object for easier import elsewhere
module.exports = { Inventory, Category,Project,ProjectTeam,Request,RequestList, Employee };