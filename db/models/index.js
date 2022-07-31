const { Pqr, PqrSchema } = require('./pqr.model');

function setupModels(sequelize) {
  Pqr.init(PqrSchema, Pqr.config(sequelize));
}

module.exports = setupModels;
