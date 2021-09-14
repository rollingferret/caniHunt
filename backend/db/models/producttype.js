'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductType = sequelize.define('ProductType', {
    productType: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
  }, {});
  ProductType.associate = function(models) {
    // associations can be defined here
    ProductType.hasMany( models.Product, { foreignKey: 'productTypeId' })
  };
  return ProductType;
};