'use strict';

const { USER_TABLE } = require('./../models/user.model');
const { PQR_TABLE } = require('./../models/pqr.model');
const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn(PQR_TABLE, 'user_id', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  async down(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        PQR_TABLE,
        'user_id',
        {
          field: 'user_id',
          allowNull: true,
          type: DataTypes.INTEGER,
          //unique: true, not used for One to Many associations
          references: {
            model: USER_TABLE,
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
  }
};
