const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Product = require('./Product')
class Category extends Model {}

Category.init({
  id: {
    Type: DataTypes.NUMBER, 
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    Type: DataTypes.STRING,
    allowNull: false
  }
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);


Category.hasMany(Product)
Product.belongsTo(Category)


module.exports = Category;
