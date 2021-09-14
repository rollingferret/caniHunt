'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('ProductTypes', [
    { productType: "Sativa Flower", imageUrl: "https://cdn-icons-png.flaticon.com/512/188/188418.png", createdAt: new Date(), updatedAt: new Date()},
    { productType: "Indica Flower", imageUrl: "https://cdn-icons-png.flaticon.com/512/188/188418.png", createdAt: new Date(), updatedAt: new Date()},
    { productType: "Flower Drops", imageUrl: "https://cdn-icons-png.flaticon.com/512/188/188418.png", createdAt: new Date(), updatedAt: new Date()},
    { productType: "Grow Services", imageUrl: "https://cdn-icons-png.flaticon.com/512/188/188418.png", createdAt: new Date(), updatedAt: new Date()},
    { productType: "Rosin", imageUrl: "https://cdn-icons-png.flaticon.com/512/188/188418.png", createdAt: new Date(), updatedAt: new Date()},
    { productType: "Badder", imageUrl: "https://cdn-icons-png.flaticon.com/512/188/188418.png", createdAt: new Date(), updatedAt: new Date()},
    { productType: "Small Bud/Shake", imageUrl: "https://cdn-icons-png.flaticon.com/512/188/188418.png", createdAt: new Date(), updatedAt: new Date()},
    { productType: "Rosin Press", imageUrl: "https://cdn-icons-png.flaticon.com/512/188/188418.png", createdAt: new Date(), updatedAt: new Date()},
    { productType: "Dab Accessories", imageUrl: "https://cdn-icons-png.flaticon.com/512/188/188418.png", createdAt: new Date(), updatedAt: new Date()},
    { productType: "Glass Works", imageUrl: "https://cdn-icons-png.flaticon.com/512/188/188418.png", createdAt: new Date(), updatedAt: new Date()},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductTypes', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
