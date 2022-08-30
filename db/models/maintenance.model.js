// const { Model, DataTypes, Sequelize } = require('sequelize');

// const { PQR_TABLE } = require('./pqr.model');
// const { ORDER_TABLE } = require('./order.model');

// const MAINTENANCE_TABLE = 'maintenances';

// const MaintenanceSchema = {
//   id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: DataTypes.INTEGER
//   },
//   address: {
//     allowNull: false,
//     type: DataTypes.STRING
//   },
//   descripcion: {
//     allowNull: false,
//     type: DataTypes.TEXT
//   },
//   createdAt: {
//     allowNull: false,
//     type: DataTypes.DATE,
//     field: 'created_at',
//     defaultValue: Sequelize.NOW
//   },
//   pqrId: {
//     field: 'pqr_id',
//     allowNull: true,
//     type: DataTypes.INTEGER,
//     unique: true,
//     references: {
//       model: PQR_TABLE,
//       key: 'id'
//     },
//     onUpdate: 'CASCADE',
//     onDelete: 'SET NULL',
//   },
//   orderId: {
//     field: 'order_id',
//     allowNull: true,
//     type: DataTypes.INTEGER,
//     unique: true,
//     references: {
//       model: ORDER_TABLE,
//       key: 'id'
//     },
//     onUpdate: 'CASCADE',
//     onDelete: 'SET NULL',
//   }
// }

// class Maintenance extends Model {
//   static associate(models) {
//     this.belongsTo(models.Pqr, { as: 'pqr' });
//     this.belongsTo(models.Order, { as: 'order' });
//   }

//   static config(sequelize) {
//     return {
//       sequelize,
//       tableName: MAINTENANCE_TABLE,
//       modelName: 'Maintenance',
//       timestamps: false
//     }
//   }
// }

// module.exports = { MAINTENANCE_TABLE, MaintenanceSchema, Maintenance }
