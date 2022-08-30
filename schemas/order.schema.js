// const Joi = require('joi');

// const id = Joi.number().integer();
// const officialId = Joi.number().integer();

// const createOrderSchema = Joi.object({
//   officialId: officialId.required(),
// });

// const updateOrderSchema = Joi.object({
//   officialId,
// });

// const getOrderSchema = Joi.object({
//   id: id.required()
// });

// // ******************** | schema add elements to an order | ********************

// const orderId = Joi.number().integer();
// const elementId = Joi.number().integer();
// const amount = Joi.number().integer().min(1);

// const addElementSchema = Joi.object({
//   orderId: orderId.required(),
//   elementId: elementId.required(),
//   amount: amount.required()
// });

// module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema, addElementSchema }
