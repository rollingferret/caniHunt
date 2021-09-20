'use strict';
const faker = require('faker');


module.exports = {
  up: (queryInterface, Sequelize) => {


    return queryInterface.bulkInsert('Products', [
      {
        ownerId: '1',
        title: faker.random.words(),
        imageUrl: faker.image.cats(),
        description: faker.lorem.paragraph(),
        productTypeId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: '2',
        title: faker.random.words(),
        imageUrl: faker.image.animals(),
        description: faker.lorem.paragraph(),
        productTypeId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: '3',
        title: faker.random.words(),
        imageUrl: faker.image.business(),
        description: faker.lorem.paragraph(),
        productTypeId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: '3',
        title: faker.random.words(),
        imageUrl: faker.image.city(),
        description: faker.lorem.paragraph(),
        productTypeId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: '4',
        title: faker.random.words(),
        imageUrl: faker.image.fashion(),
        description: faker.lorem.paragraph(),
        productTypeId: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: '5',
        title: faker.random.words(),
        imageUrl: faker.image.food(),
        description: faker.lorem.paragraph(),
        productTypeId: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: '6',
        title: faker.random.words(),
        imageUrl: faker.image.nature(),
        description: faker.lorem.paragraph(),
        productTypeId: '6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: '7',
        title: faker.random.words(),
        imageUrl: faker.image.imageUrl(),
        description: faker.lorem.paragraph(),
        productTypeId: '7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: '8',
        title: faker.random.words(),
        imageUrl: faker.image.people(),
        description: faker.lorem.paragraph(),
        productTypeId: '8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: '7',
        title: faker.random.words(),
        imageUrl: faker.image.technics(),
        description: faker.lorem.paragraph(),
        productTypeId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};