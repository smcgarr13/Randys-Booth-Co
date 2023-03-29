// Import required dependencies and models
const sequelize = require('../config/connection');
const inventoryData = require('./inventory-seeds.json');
const categoryData = require('./category-seeds.json');
const projectData = require('./project-seeds.json');
const projectTeamData = require('./group-seeds.json');
const requestData = require('./request-seeds.json');
const { Category, Inventory,Project,ProjectTeam,Request,Employee} = require('../Models');

// Define the function to seed the database with sample data
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  await Inventory.bulkCreate(inventoryData, {
    individualHooks: true,
    returning: true,
  });
  await Project.bulkCreate(projectData, {
    individualHooks: true,
    returning: true,
  });
  await ProjectTeam.bulkCreate(projectTeamData, {
    individualHooks: true,
    returning: true,
  });
  await Request.bulkCreate(requestData, {
    individualHooks: true,
    returning: true,
  });

  // await Employee.bulkCreate();

  // Exit the process once seeding is complete
  process.exit(0);
};

// Execute the seedDatabase function
seedDatabase();