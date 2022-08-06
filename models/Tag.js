const { Model, DataTypes } = require('sequelize');
const ProductTag = require('./ProductTag')
const sequelize = require('../config/connection.js');
const Product = require('./Product')
class Tag extends Model {}

Tag.init(
  {
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

Tag.belongsToMany(Product, { through: ProductTag });

module.exports = Tag;
