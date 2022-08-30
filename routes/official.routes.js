// const express = require('express');

// const OfficialServices  = require('./../services/official.service');
// const validatorHandler = require('./../middlewares/validator.handler');
// const { createOfficialSchema, updateOfficialSchema, getOfficialSchema } = require('./../schemas/official.schema');

// const router = express.Router();
// const service = new OfficialServices();

// router.get('/', async (req, res, next) => {
//   try {
//     const officials = await service.find();
//     res.json(officials);
//   } catch (error) {
//     next(error);
//   }
// });

// router.get('/:id',
//   validatorHandler(getOfficialSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const official = await service.findOne(id);
//       res.json(official);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.post('/',
//   validatorHandler(createOfficialSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const body = req.body;
//       const newOfficial = await service.create(body);
//       res.status(201).json(newOfficial);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.patch('/:id',
//   validatorHandler(getOfficialSchema, 'params'),
//   validatorHandler(updateOfficialSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const body = req.body;
//       const official = await service.update(id, body);
//       res.json(official);
//     } catch (error) {
//       next(error);
//     }
//   });

// router.delete('/:id',
//   validatorHandler(getOfficialSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const rta = await service.delete(id);
//       res.json(rta);
//     } catch (error) {
//       next(error);
//     }
//   });


// module.exports = router;
