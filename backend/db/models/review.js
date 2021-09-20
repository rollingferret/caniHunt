'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    review: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo( models.User, { foreignKey: 'userId' })
    Review.belongsTo( models.Product, { foreignKey: 'productId' })
  };
  return Review;
};