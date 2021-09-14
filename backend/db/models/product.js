'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    ownerId: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    description: DataTypes.TEXT,
    productTypeId: DataTypes.INTEGER,
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo( models.User, { foreignKey: 'ownerId' })
    Product.belongsTo( models.ProductType, { foreignKey: 'productTypeId' })


  };
  return Product;
};