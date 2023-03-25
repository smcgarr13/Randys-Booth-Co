const sequelize = require('../config/connection');
const Inventory = require('/Users/mchong/bootcamp/projects/Randys-Booth-Co/Models/inventory-model');
const inventoryData = require('./inventory-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Inventory.bulkCreate(inventoryData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();