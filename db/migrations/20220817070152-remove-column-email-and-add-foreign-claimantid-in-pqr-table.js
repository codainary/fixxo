'use strict';

const { PQR_TABLE } = require('./../models/pqr.model');
const { CLAIMANT_TABLE } = require('./../models/claimant.model');
//const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {

      await queryInterface.removeColumn(PQR_TABLE, 'email', { transaction });

      await queryInterface.addColumn(
        PQR_TABLE,
        'claimant_id',
        {
          field: 'claimant_id',
          allowNull: false,
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: CLAIMANT_TABLE,
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
        { transaction }
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        PQR_TABLE,
        'email',
        {
          allowNull: false,
          type: Sequelize.DataTypes.STRING
        },
        { transaction }
      );
      await queryInterface.removeColumn(PQR_TABLE, 'claimant_id', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
