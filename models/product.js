//models/products.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Maintenance = require('./maintenance');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    listPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'product'
});

Product.hasMany(Maintenance, {foreignKey: 'product_id'});
Maintenance.belongsTo(Product, {foreignKey: 'product_id'});

Product.sync();
Maintenance.sync();

module.exports = Product;