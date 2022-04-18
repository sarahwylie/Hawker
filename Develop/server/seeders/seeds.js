/* SEED THE DATABASE WITH FAKE DATA */
// Import Dependencies
const { faker } = require('@faker-js/faker'); // Faker.js helps generate dummy data to use

const db = require('../config/connection');
const { User, Category, Item } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName, lastName);
    const password = faker.internet.password();

    userData.push({ firstName, lastName, email, password });
  }
  User.collection.insertMany(userData);
  console.info('Users seeded.');
});

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

  // eslint-disable-next-line no-unused-vars
  const item = await Item.insertMany([
    {
      title: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      title: 'Canned Coffee',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      category: categories[1]._id,
      price: 1.99,
      quantity: 500
    }
  ]);
  console.info('Items seeded');
  console.info('Categories seeded.');
  process.exit();
});
