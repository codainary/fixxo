const { Pqr, PqrSchema } = require('./pqr.model');
const { Maintenance, MaintenanceSchema } = require('./maintenance.model');

function setupModels(sequelize) {
  Pqr.init(PqrSchema, Pqr.config(sequelize));
  Maintenance.init(MaintenanceSchema, Maintenance.config(sequelize));

  // associations
  Pqr.associate(sequelize.models);
  Maintenance.associate(sequelize.models);

}

module.exports = setupModels;
