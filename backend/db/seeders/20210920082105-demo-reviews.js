'use strict';
const faker = require('faker');


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
        userId: 1,
        productId: 2,
        review: faker.lorem.paragraph(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        productId: 3,
        review: faker.lorem.paragraph(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        productId: 4,
        review: faker.lorem.paragraph(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        productId: 6,
        review: faker.lorem.paragraph(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        productId: 2,
        review: faker.lorem.paragraph(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        productId: 5,
        review: faker.lorem.paragraph(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        productId: 7,
        review: faker.lorem.paragraph(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        productId: 2,
        review: faker.lorem.paragraph(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        productId: 3,
        review: faker.lorem.paragraph(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        productId: 5,
        review: faker.lorem.paragraph(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        productId: 4,
        review: faker.lorem.paragraph(),  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        productId: 3,
        review: faker.lorem.paragraph(),  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        productId: 4,
        review: faker.lorem.paragraph(),  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        productId: 5,
        review: faker.lorem.paragraph(),  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        productId: 6,
        review: faker.lorem.paragraph(),  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        productId: 1,
        review: faker.lorem.paragraph(),  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        productId: 2,
        review: faker.lorem.paragraph(),  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, { truncate: true, cascade: true, restartIdentity: true });

  }
};
