const Joi = require('joi');

const id = Joi.string().uuid();
const requester = Joi.string().min(10).max(50);
const email = Joi.string().email();
const description = Joi.string().min(10).max(100);
// const deleted = Joi.boolean();

const createPqrSchema = Joi.object({
  requester: requester.required(),
  email: email.required(),
  description: description.required(),
});

const updatePqrSchema = Joi.object({
  requester: requester,
  email: email,
  description: description,
});

const getPqrSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPqrSchema, updatePqrSchema, getPqrSchema }
