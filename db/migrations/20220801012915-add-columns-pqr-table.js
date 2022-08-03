'use strict';

const { PQR_TABLE } = require('./../models/pqr.model');
const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    // await queryInterface.addColumn(PQR_TABLE, 'subject', {
    //   subject: {
    //     allowNull: true,
    //     type: DataTypes.STRING
    //   }
    // });
    // await queryInterface.addColumn(PQR_TABLE, 'context', {
    //   context: {
    //     allowNull: true,
    //     type: DataTypes.STRING
    //   }
    // });
    // await queryInterface.addColumn(PQR_TABLE, 'deleted', {
    //   deleted: {
    //     allowNull: true,
    //     type: DataTypes.STRING,
    //     defaultValue: false
    //   }
    // });
  },

  async down(queryInterface) {
    // await queryInterface.removeColumn(PQR_TABLE, 'subject');
    // await queryInterface.removeColumn(PQR_TABLE, 'context');
    // await queryInterface.removeColumn(PQR_TABLE, 'deleted');
  }
};
