const db = require('./connection');
const { Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Outdoor' },
    { name: 'Transportation' },
    { name: 'Tech' },
    { name: 'Sports' }
  ]);

  console.info('categories seeded.');
  process.exit();
});
