const Joi = require('joi');

const id = Joi.string();
const subject = Joi.string().min(10).max(50);
const context = Joi.string().min(10).max(150);
const email = Joi.string().email();

const createPqrSchema = Joi.object({
  subject: subject.required(),
  context: context.required(),
  email: email.required(),
});

const updatePqrSchema = Joi.object({
  subject: subject,
  context: context,
  email: email,
});

const getPqrSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPqrSchema, updatePqrSchema, getPqrSchema }
