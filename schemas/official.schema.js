const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(50);
const lastName = Joi.string().max(50);
const phone = Joi.string().max(10);
const userId = Joi.number().integer();

const createOfficialSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  userId: userId.required()
});

const updateOfficialSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required()
});

const getOfficialSchema = Joi.object({
  id: id.required()
});

module.exports = { createOfficialSchema, updateOfficialSchema, getOfficialSchema }
