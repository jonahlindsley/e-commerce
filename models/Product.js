// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Tag = require('./Tag')
const ProductTag = require('./ProductTag')
// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
  id: {
    Type: DataTypes.NUMBER,
    allowNullq: false,
    primaryKey: true,
    autoIncrement: true
  },
  product_name: {
    Type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    Type: DataTypes.STRING,
    allowNull: false,
    isDecimal: true
  },
  stock: {
    Type: DataTypes.NUMBER,
    allowNull: false,
    defaultValue: 10,
    isNumeric: true
  },
  category_id: {
    
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

Product.belongsToMany(Tag, { through: ProductTag });


module.exports = Product;
