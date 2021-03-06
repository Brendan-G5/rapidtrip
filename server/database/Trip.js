const Sequelize = require('sequelize');
const db = require('./db');

class Trip extends Sequelize.Model {}

Trip.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  picture: {
    type: Sequelize.STRING
  }
}, {
  sequelize: db,
  modelName: 'Trip',
  underscored: true,
  timestamps: false
});

module.exports = Trip;