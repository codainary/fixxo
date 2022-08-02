const Joi = require('joi');

const id = Joi.string();
const subject = Joi.string().min(10).max(50);
const context = Joi.string().min(10).max(150);
const email = Joi.string().email();
const userId = Joi.number().integer();
// Values for pagination and filters
const limit = Joi.number().integer();
const offset = Joi.number().integer();
const deleted = Joi.string();

const createPqrSchema = Joi.object({
  subject: subject.required(),
  context: context.required(),
  email: email.required(),
  userId: userId.required()
});

const updatePqrSchema = Joi.object({
  subject: subject,
  context: context,
  email: email
});

const getPqrSchema = Joi.object({
  id: id.required()
});

const queryPqrSchema = Joi.object({
  limit,
  offset,
  deleted
});


module.exports = { createPqrSchema, updatePqrSchema, getPqrSchema, queryPqrSchema }
