/* SEED THE DATABASE WITH FAKE DATA */
// Import Dependencies
const { faker } = require('@faker-js/faker'); // Faker.js helps generate dummy data to use

const db = require('../config/connection');
const { User, Category } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const address = faker.address.streetAddress(true);
    const userName = faker.internet.userName(`${firstName} ${lastName}}`);
    const email = faker.internet.email(userName);
    const password = faker.internet.password();

    userData.push({ firstName, lastName, address, userName, email, password });
  }
  User.collection.insertMany(userData);
  console.info('Users seeded.');
});

db.once('open', async () => {
  await Category.deleteMany();
  // eslint-disable-next-line no-unused-vars
  const categories = await Category.insertMany([
    { name: 'Outdoor' },
    { name: 'Transportation' },
    { name: 'Tech' },
    { name: 'Sports' }
  ]);

  console.info('Categories seeded.');
  process.exit();
});
