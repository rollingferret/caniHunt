'use strict';
const faker = require('faker');


module.exports = {
  up: (queryInterface, Sequelize) => {


    return queryInterface.bulkInsert('Products', [
      {
        ownerId: '1',
        title: 'test',
        imageUrl: 'test',
        description: 'test',
        productTypeId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: '2',
        title: 'test',
        imageUrl: 'test',
        description: 'test',
        productTypeId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: '3',
        title: 'test',
        imageUrl: 'test',
        description: 'test',
        productTypeId: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: '1',
        title: 'test',
        imageUrl: 'test',
        description: 'test',
        productTypeId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: '1',
        title: 'test',
        imageUrl: 'test',
        description: 'test',
        productTypeId: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};