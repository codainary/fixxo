// const express = require('express');

// const ElementService = require('../services/element.service');
// const validatorHandler = require('../middlewares/validator.handler');
// const { createElementSchema, getElementSchema } = require('../schemas/element.schema');

// const router = express.Router();
// const service = new ElementService();

// router.get('/', async (req, res, next) => {
//   try {
//     const elements = await service.find();
//     res.json(elements);
//   } catch (error) {
//     next(error);
//   }
// });

// router.get(
//   '/:id',
//   validatorHandler(getElementSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const element = await service.findOne(id);
//       res.json(element);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.post(
//   '/',
//   validatorHandler(createElementSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const body = req.body;
//       const newElement = await service.create(body);
//       res.status(201).json(newElement);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// module.exports = router;
