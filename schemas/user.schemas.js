const Joi = require('joi');

const id = Joi.string();
const username = Joi.string().max(15);
const password = Joi.string().min(10).max(150);
const role = Joi.string().min(5);
const deleted = Joi.boolean().default(false);

const createUserSchema = Joi.object({
  username: username.required(),
  password: password.required(),
  role: role.required()
});

const updateUserSchema = Joi.object({
  username,
  password,
  role,
  deleted
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
