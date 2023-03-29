// Import required dependencies and models
const sequelize = require('../config/connection');
const inventoryData = require('./inventory-seeds.json');
const categoryData = require('./category-seeds.json');
const { Category, Inventory,Project,ProjectTeam,Request} = require('../Models');

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
  await Project.bulkCreate(inventoryData, {
    individualHooks: true,
    returning: true,
  });
  await ProjectTeam.bulkCreate(inventoryData, {
    individualHooks: true,
    returning: true,
  });
  await Request.bulkCreate(inventoryData, {
    individualHooks: true,
    returning: true,
  });

  await Employee.bulkCreate();

  // Exit the process once seeding is complete
  process.exit(0);
};

// Execute the seedDatabase function
seedDatabase();