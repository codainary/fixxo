const Joi = require('joi');

const id = Joi.string();
const firstName = Joi.string().max(20);
const lastName = Joi.string().max(20);
const username = Joi.string().max(15);
const password = Joi.string().min(10).max(150);


const createUserSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  username: username.required(),
  password: password.required()
});

const updateUserSchema = Joi.object({
  firstName,
  lastName,
  username,
  password
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
