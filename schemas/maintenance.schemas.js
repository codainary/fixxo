const Joi = require('joi');

const id = Joi.string();
const address = Joi.string().max(50);
const descripcion = Joi.string().max(200);
const pqrId = Joi.number().integer();

const createMaintenanceSchema = Joi.object({
  address: address.required(),
  descripcion: descripcion.required(),
  pqrId,
});

const updateMaintenanceSchema = Joi.object({
  address,
  descripcion,
  pqrId
});

const getMaintenanceSchema = Joi.object({
  id: id.required(),
});

module.exports = { createMaintenanceSchema, updateMaintenanceSchema, getMaintenanceSchema }
