const Joi = require('joi');

const id = Joi.string();
const identification = Joi.string().max(20);
const firstName = Joi.string().max(20);
const lastName = Joi.string().max(20);
const phone = Joi.string().min(10).max(20);
const email = Joi.string().max(50);
const username = Joi.string().max(15);
const password = Joi.string().min(10).max(150);
const address = Joi.string();
const active = Joi.boolean();
const role = Joi.number().integer();

const createUserSchema = Joi.object({

  identification: identification.required(),
  firstName: firstName.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  email:email.required(),
  username:username.required(),
  password: password.required(),
  address: address.required(),
  active: active.required(),
  role: role.required()

});

const updateUserSchema = Joi.object({

  identification,
  firstName,
  lastName,
  phone,
  email,
  username,
  password,
  address,
  active,
  role

});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
