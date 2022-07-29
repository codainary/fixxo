const Joi = require('joi');

const id = Joi.string().uuid();
const title = Joi.string().min(10).max(50);
const document = Joi.string().uri();
const deleted = Joi.boolean();

const createPqrSchema = Joi.object({
  title: title.required(),
  document:document,
  deleted: deleted.required(),
});

const updatePqrSchema = Joi.object({
  title: title,
  document:document,
  deleted: deleted,
});

const getPqrSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPqrSchema, updatePqrSchema, getPqrSchema }
