/* SEED THE DATABASE */
// Import Dependencies

const db = require('../config/connection');
const { Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();
  // eslint-disable-next-line no-unused-vars
  const categories = await Category.insertMany([
    { name: 'Outdoor' },
    { name: 'Auto' },
    { name: 'Tech' },
    { name: 'Clothing' },
    { name: 'Home' }
  ]);

  console.info('Categories seeded.');
  process.exit();
});
