'use strict';

const { PQR_TABLE } = require('./../models/pqr.model');
//const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        PQR_TABLE,
        'issue_address',
        {
          allowNull: true,
          field: 'issue_address',
          type: Sequelize.DataTypes.TEXT(100), // ! Warning: PostgreSQL does not support TEXT with options. Plain `TEXT` will be used instead.
        },
        { transaction }
      );
      await queryInterface.addColumn(
        PQR_TABLE,
        'status',
        {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.DataTypes.SMALLINT,
        },
        { transaction }
      );
      await queryInterface.addColumn(
        PQR_TABLE,
        'type',
        {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.DataTypes.SMALLINT,
        },
        { transaction }
      );
      await queryInterface.addColumn(
        PQR_TABLE,
        'updated_at',
        {
          allowNull: true,
          type: Sequelize.DataTypes.DATE,
          field: 'updated_at',
          defaultValue: Sequelize.NOW
        },
        { transaction }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  async down(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn(PQR_TABLE, 'issue_address', { transaction });
      await queryInterface.removeColumn(PQR_TABLE, 'status', { transaction });
      await queryInterface.removeColumn(PQR_TABLE, 'type', { transaction });
      await queryInterface.removeColumn(PQR_TABLE, 'updated_at', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
