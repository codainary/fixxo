const { User, UserSchema } = require('./user.model');
const { Pqr, PqrSchema } = require('./pqr.model');
const { Maintenance, MaintenanceSchema } = require('./maintenance.model');
const { Official, OfficialSchema } = require('./official.model');
const { Order, OrderSchema } = require('./order.model');
const { Element, ElementSchema } = require('./element.model');
const { OrderElement, OrderElementSchema } = require('./order-element.model');
const { Claimant, ClaimantSchema } = require('./claimant.model');

function setupModels(sequelize) {
  // models initialization
  User.init(UserSchema, User.config(sequelize));
  Pqr.init(PqrSchema, Pqr.config(sequelize));
  Maintenance.init(MaintenanceSchema, Maintenance.config(sequelize));
  Official.init(OfficialSchema, Official.config(sequelize));
  Element.init(ElementSchema, Element.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderElement.init(OrderElementSchema, OrderElement.config(sequelize));
  Claimant.init(ClaimantSchema, Claimant.config(sequelize));

  // associations
  User.associate(sequelize.models);
  Pqr.associate(sequelize.models);
  Maintenance.associate(sequelize.models);
  Official.associate(sequelize.models);
  Element.associate(sequelize.models);
  Order.associate(sequelize.models);

  //OrderElement.associate(sequelize.models); this is a join table, its associations are outsite

}

module.exports = setupModels;
